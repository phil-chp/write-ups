FROM rust:1.82
WORKDIR /app
COPY ./build-and-drustroy /app
RUN cargo build --release
CMD ["/app/target/release/build-and-drustroy"]