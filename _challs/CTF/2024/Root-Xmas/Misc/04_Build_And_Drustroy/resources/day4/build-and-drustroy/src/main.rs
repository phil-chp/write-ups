use http_body_util::{combinators::BoxBody, BodyExt, Empty, Full};
use hyper::body::Bytes;
use hyper::server::conn::http1;
use hyper::service::service_fn;
use hyper::{HeaderMap, Method, Request, Response, StatusCode};
use hyper_util::rt::TokioIo;
use serde_json::Value;
use std::net::SocketAddr;
use tempfile::tempdir;
use tokio::fs;
use tokio::net::TcpListener;
use tokio::process::Command;
use tokio::signal;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error + Send + Sync>> {
    let addr = SocketAddr::from(([0, 0, 0, 0], 3000));
    let listener = TcpListener::bind(addr).await?;
    println!("Server running on http://{}", addr);

    let shutdown_signal = signal::ctrl_c();

    tokio::select! {
        _ = async {
            loop {
                let (stream, _) = listener.accept().await?;
                let io = TokioIo::new(stream);

                tokio::task::spawn(async move {
                    if let Err(err) = http1::Builder::new()
                        .serve_connection(io, service_fn(echo))
                        .await
                    {
                        eprintln!("Error serving connection: {:?}", err);
                    }
                });
            }
            #[allow(unreachable_code)]
            Ok::<(), Box<dyn std::error::Error + Send + Sync>>(())
        } => {},
        _ = shutdown_signal => {
            println!("Shutdown signal received.");
        },
    }

    println!("Server shutting down.");
    Ok(())
}

async fn echo(
    req: Request<hyper::body::Incoming>,
) -> Result<Response<BoxBody<Bytes, hyper::Error>>, hyper::Error> {
    match (req.method(), req.uri().path()) {
        (&Method::GET, "/") => {
            let mut response = Response::new(full("If you're here, you should read more code."));
            response
                .headers_mut()
                .insert("Content-Type", "text/plain".parse().unwrap());
            Ok(response)
        }
        (&Method::POST, "/remote-build") => {
            // INFO: Is application/json
            if !is_content_type_json(req.headers()) {
                let mut response = Response::new(full("Content-Type must be application/json"));
                *response.status_mut() = StatusCode::UNSUPPORTED_MEDIA_TYPE;
                return Ok(response);
            }

            let b: Bytes = req.collect().await?.to_bytes();
            // INFO: Get JSON from body
            let s: Value = match serde_json::from_slice(&b) {
                Ok(json) => json,
                Err(e) => {
                    eprintln!("JSON parsing error: {:?}", e);
                    let mut response = Response::new(full("Error parsing JSON"));
                    *response.status_mut() = StatusCode::BAD_REQUEST;
                    return Ok(response);
                }
            };

            if let Value::Object(map) = s {
                // INFO: Verify file is .rs and no `..`
                for filename in map.keys() {
                    if !filename.ends_with(".rs") || filename.contains("..") {
                        let mut response = Response::new(full("Grrrrr(ust)."));
                        *response.status_mut() = StatusCode::FORBIDDEN;
                        return Ok(response);
                    }
                }

                let temp_dir = match tempdir() {
                    Ok(dir) => dir,
                    Err(e) => {
                        eprintln!("Failed to create temp directory: {:?}", e);
                        let mut response = Response::new(full("Internal Server Error"));
                        *response.status_mut() = StatusCode::INTERNAL_SERVER_ERROR;
                        return Ok(response);
                    }
                };

                // INFO: Create `<tmp_path>/src` directory
                let src_dir = temp_dir.path().join("src");
                if let Err(e) = fs::create_dir_all(&src_dir).await {
                    eprintln!("Failed to create src directory: {:?}", e);
                    let mut response = Response::new(full("Internal Server Error"));
                    *response.status_mut() = StatusCode::INTERNAL_SERVER_ERROR;
                    return Ok(response);
                }

                for (filename, content) in &map {
                    // Info: Check that content is string
                    let content_str = match content.as_str() {
                        Some(s) => s,
                        None => {
                            eprintln!("Content for file {} is not a string", filename);
                            let mut response = Response::new(full("Invalid content type for file"));
                            *response.status_mut() = StatusCode::BAD_REQUEST;
                            return Ok(response);
                        }
                    };

                    // Info: Create and write to <tmp_path>/<src/main.rs>
                    let file_path = temp_dir.path().join(filename);
                    if let Some(parent) = file_path.parent() {
                        if let Err(e) = fs::create_dir_all(parent).await {
                            eprintln!("Failed to create directories for {}: {:?}", filename, e);
                            let mut response = Response::new(full("Internal Server Error"));
                            *response.status_mut() = StatusCode::INTERNAL_SERVER_ERROR;
                            return Ok(response);
                        }
                    }
                    if let Err(e) = fs::write(&file_path, content_str.as_bytes()).await {
                        eprintln!("Failed to write file {}: {:?}", filename, e);
                        let mut response = Response::new(full("Internal Server Error"));
                        *response.status_mut() = StatusCode::INTERNAL_SERVER_ERROR;
                        return Ok(response);
                    }
                }

                let cargo_toml = r#"
[package]
name = "temp_build"
version = "0.1.0"
edition = "2021"

[dependencies]
"#;
                // INFO: Create and write to <tmp_path>/Cargo.toml
                if let Err(e) = fs::write(temp_dir.path().join("Cargo.toml"), cargo_toml).await {
                    eprintln!("Failed to write Cargo.toml: {:?}", e);
                    let mut response = Response::new(full("Internal Server Error"));
                    *response.status_mut() = StatusCode::INTERNAL_SERVER_ERROR;
                    return Ok(response);
                }

                // INFO: Build binary
                let build_output = match Command::new("cargo")
                    .args(&["build", "--release"])
                    .current_dir(temp_dir.path())
                    .output()
                    .await
                {
                    Ok(output) => output,
                    Err(e) => {
                        eprintln!("Failed to execute cargo build: {:?}", e);
                        let mut response = Response::new(full("Internal Server Error"));
                        *response.status_mut() = StatusCode::INTERNAL_SERVER_ERROR;
                        return Ok(response);
                    }
                };

                if !build_output.status.success() {
                    let stderr = String::from_utf8_lossy(&build_output.stderr);
                    eprintln!("Build failed: {}", stderr);
                    let mut response = Response::new(full(format!("Build failed: {}", stderr)));
                    *response.status_mut() = StatusCode::BAD_REQUEST;
                    return Ok(response);
                }

                let binary_name = if cfg!(windows) {
                    "temp_build.exe"
                } else {
                    "temp_build"
                };

                let binary_path = temp_dir
                    .path()
                    .join("target")
                    .join("release")
                    .join(binary_name);

                if !binary_path.exists() {
                    eprintln!("Built binary not found at {:?}", binary_path);
                    let mut response = Response::new(full("Built binary not found"));
                    *response.status_mut() = StatusCode::INTERNAL_SERVER_ERROR;
                    return Ok(response);
                }

                let binary = match fs::read(&binary_path).await {
                    Ok(data) => data,
                    Err(e) => {
                        eprintln!("Failed to read binary: {:?}", e);
                        let mut response = Response::new(full("Internal Server Error"));
                        *response.status_mut() = StatusCode::INTERNAL_SERVER_ERROR;
                        return Ok(response);
                    }
                };

                let response = Response::builder()
                    .status(StatusCode::OK)
                    .header("Content-Type", "application/octet-stream")
                    .header("Content-Disposition", "attachment; filename=\"binary\"")
                    .body(full(binary))
                    .unwrap();

                return Ok(response);
            }

            let mut response = Response::new(full("Invalid JSON structure"));
            *response.status_mut() = StatusCode::BAD_REQUEST;
            Ok(response)
        }
        _ => {
            let mut not_found = Response::new(empty());
            *not_found.status_mut() = StatusCode::NOT_FOUND;
            Ok(not_found)
        }
    }
}

fn is_content_type_json(headers: &HeaderMap) -> bool {
    match headers.get("Content-Type") {
        Some(ct) => ct
            .to_str()
            .map(|s| s.starts_with("application/json"))
            .unwrap_or(false),
        None => false,
    }
}

fn empty() -> BoxBody<Bytes, hyper::Error> {
    Empty::<Bytes>::new()
        .map_err(|never| match never {})
        .boxed()
}

fn full<T: Into<Bytes>>(chunk: T) -> BoxBody<Bytes, hyper::Error> {
    Full::new(chunk.into())
        .map_err(|never| match never {})
        .boxed()
}
