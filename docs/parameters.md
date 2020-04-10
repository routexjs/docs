---
id: parameters
title: Parameters
---

Route parameters are attached to the `ctx.params` object.

Parameters are available with the same syntax as [`path-to-regexp`](https://npmjs.org/package/path-to-regexp):

```js
app.get("/:name", (ctx) => {
  return new TextBody(ctx.params.name);
});
```
