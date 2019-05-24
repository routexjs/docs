---
id: headers
title: Headers
---

Headers are accessible under `ctx.req.headers`.
Make sure to use the lowercase key name (`Authorization` becomes `authorization`):

```js
app.get("/", ctx => {
  ctx.body = new TextBody(ctx.req.headers.host);
});
```
