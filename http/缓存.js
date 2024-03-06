/**
 * HTTP 缓存可以通过设置响应头来实现。以下是常见的 HTTP 缓存设置：

1. 强缓存（Expires 和 Cache-Control）：强缓存是利用客户端本地缓存，不发送请求到服务器。
可以通过设置 `Expires` 或 `Cache-Control` 响应头来控制强缓存的过期时间。

   - `Expires` 设置一个具体的过期日期和时间，例如 `Expires: Fri, 31 Dec 2022 23:59:59 GMT`。
   - `Cache-Control` 是 HTTP/1.1 中引入的更灵活的缓存控制方式，可以使用 `max-age` 
   指定从响应接收后多少秒内可使用缓存，例如 `Cache-Control: max-age=360` 
   表示缓存有效期为 360 秒。

2. 协商缓存（Last-Modified 和 ETag）：协商缓存是在客户端与服务器之间进行通信来验证资源是否被修改过，
并决定是否使用缓存。可以通过设置 `Last-Modified` 和 `ETag` 响应头来实现协商缓存。

   - `Last-Modified` 表示资源最后一次修改的时间，浏览器在下一次请求时会发送 `If-Modified-Since`
    请求头，服务器根据资源的修改时间判断是否返回新的内容。
   - `ETag` 是一个唯一标识符，表示资源内容的特征值。浏览器在下一次请求时会发送 `If-None-Match` 
   请求头，服务器根据资源的特征值判断是否返回新的内容。

一般情况下，建议同时使用强缓存和协商缓存来优化 HTTP 缓存设置。
可以通过在服务器端配置响应头来控制缓存行为，例如：

```http
HTTP/1.1 200 OK
Expires: Fri, 31 Dec 2022 23:59:59 GMT
Cache-Control: max-age=360
Last-Modified: Tue, 01 Jan 2022 00:00:00 GMT
ETag: "12345"
```

需要注意的是，正确设置 HTTP 缓存需要根据具体情况进行调整，并考虑到资源更新频率、用户体验和缓存策略等因素。
 */