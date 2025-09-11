🚦 CORS Flow for Unsafe Requests

Example:

```javascript
await fetch("https://api.com/data", {
  method: "PATCH",
  headers: { "API-Key": "secret" }
});
```


This request is “unsafe” (PATCH + custom header).
So the browser does:

Step 1: Preflight (OPTIONS)
OPTIONS /data
Origin: https://app.com
Access-Control-Request-Method: PATCH
Access-Control-Request-Headers: API-Key, Content-Type

Step 2: Server must reply
200 OK
Access-Control-Allow-Origin: https://app.com
Access-Control-Allow-Methods: PATCH, PUT, DELETE
Access-Control-Allow-Headers: API-Key, Content-Type
Access-Control-Max-Age: 86400


If accepted, browser proceeds to real request.

If rejected, ❌ blocked.

Step 3: Actual request sent
PATCH /data
Origin: https://app.com
API-Key: secret
Content-Type: application/json

Step 4: Actual response
200 OK
Access-Control-Allow-Origin: https://app.com

🍪 Credentials (Cookies, Auth)

By default:
fetch("https://api.com") → no cookies sent (even if you’re logged in).

To include cookies/auth:

fetch("https://api.com/data", {
  credentials: "include"
});


But then the server must allow it:

Access-Control-Allow-Origin: https://app.com
Access-Control-Allow-Credentials: true


⚠️ Note: You cannot use * here. The origin must be explicit.