---
id: context-data
title: Context Data
---

You can use `ctx.data` to store any data, such as attaching a `user` using an authentication middleware (see [middlewares](./middlewares.md) for example):

```js
const myMiddleware = ctx => {
  ctx.data.name = "Charles";
};

app.middleware(myMiddleware);

app.get("/", ctx => {
  ctx.body = new TextBody(ctx.data.name);
});
```
