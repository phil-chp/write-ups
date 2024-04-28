Homepage:

```
GET / HTTP/2
Host: abyssal-odds.france-cybersecurity-challenge.fr
Cookie: session_id=54da1554efcb63d6; csrf_token=da2193b25135bab2
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:124.0) Gecko/20100101 Firefox/124.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Upgrade-Insecure-Requests: 1
Sec-Fetch-Dest: document
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: none
Sec-Fetch-User: ?1
Dnt: 1
Sec-Gpc: 1
Te: trailers
```

Buy page:

```
GET /buy HTTP/2
Host: abyssal-odds.france-cybersecurity-challenge.fr
Cookie: session_id=54da1554efcb63d6; csrf_token=da2193b25135bab2
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:124.0) Gecko/20100101 Firefox/124.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://abyssal-odds.france-cybersecurity-challenge.fr/
Upgrade-Insecure-Requests: 1
Sec-Fetch-Dest: document
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: same-origin
Sec-Fetch-User: ?1
Dnt: 1
Sec-Gpc: 1
Te: trailers
```

Buy a box:

```
POST /buy HTTP/2
Host: abyssal-odds.france-cybersecurity-challenge.fr
Cookie: session_id=54da1554efcb63d6; csrf_token=da2193b25135bab2
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:124.0) Gecko/20100101 Firefox/124.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Content-Type: application/x-www-form-urlencoded
Content-Length: 38
Origin: https://abyssal-odds.france-cybersecurity-challenge.fr
Referer: https://abyssal-odds.france-cybersecurity-challenge.fr/buy
Upgrade-Insecure-Requests: 1
Sec-Fetch-Dest: document
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: same-origin
Sec-Fetch-User: ?1
Dnt: 1
Sec-Gpc: 1
Te: trailers

csrf_token=da2193b25135bab2&action=buy
```

Open box with random key:

```
POST /open HTTP/2
Host: abyssal-odds.france-cybersecurity-challenge.fr
Cookie: session_id=54da1554efcb63d6; csrf_token=da2193b25135bab2
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:124.0) Gecko/20100101 Firefox/124.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Content-Type: application/x-www-form-urlencoded
Content-Length: 75
Origin: https://abyssal-odds.france-cybersecurity-challenge.fr
Referer: https://abyssal-odds.france-cybersecurity-challenge.fr/buy
Upgrade-Insecure-Requests: 1
Sec-Fetch-Dest: document
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: same-origin
Sec-Fetch-User: ?1
Dnt: 1
Sec-Gpc: 1
Te: trailers

csrf_token=da2193b25135bab2&key=94921599&boxId=889534d10b36cc6c&action=open
```

I've tried messing with the values, for example setting the csrf_token in the parameters to anything other yields a 403 page with some CSP errors in the console:

```
Content-Security-Policy: The page’s settings blocked the loading of a resource at https://cdn.jsdelivr.net/npm/@picocss/pico/css/pico.min.css (“style-src”).
Content-Security-Policy: The page’s settings blocked the loading of a resource at inline (“script-src”).
Content-Security-Policy: The page’s settings blocked the loading of a resource at inline (“script-src”).
```

It appears like the POST /buy page doesn't verify the csrf_token (in the URL params not in the cookies), setting it to anything else advances like if nothing.

----

7: -9223372036854775808

1: -2
4: -1 1
1: >0
1: 4294967295
7: 9223372036854775807 92389366923893669238936692389366
