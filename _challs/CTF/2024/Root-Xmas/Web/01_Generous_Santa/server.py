from http.server import BaseHTTPRequestHandler, HTTPServer
import urllib.parse

class Server(BaseHTTPRequestHandler):
    def do_POST(self):
        print(f"Path: {self.path}")
        print(f"Headers: {self.headers}")
        body = self.rfile.read(int(self.headers['Content-Length'])).decode('utf-8')
        print(f"{urllib.parse.unquote_plus(body)}")
        self.send_response(200)
        self.end_headers()


def run(server_class=HTTPServer, handler_class=Server, port=8082):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print("Starting server...\n")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    httpd.server_close()
    print("Stopping server...\n")

if __name__ == '__main__':
    run()


# var x=new XMLHttpRequest();
# x.open("POST",'http://34.254.158.162/',true);
# x.send(encodeURIComponent("AAAA AAAA"));
