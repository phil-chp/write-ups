from http.server import BaseHTTPRequestHandler, HTTPServer

class Server(BaseHTTPRequestHandler):
    def do_GET(self):
        print("URL:\n", self.path)
        self.send_response(200)
        self.end_headers()

def run(server_class=HTTPServer, handler_class=Server, port=8000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    httpd.server_close()

if __name__ == '__main__':
    run()
