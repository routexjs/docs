---
id: query-string
title: Query String
---

Query string is parsed using `ctx.query`, as an object:

```js
app.get("/name", ctx => {
  // /name?firstName=john
  ctx.body = new TextBody(ctx.query.firstName);
});
```
