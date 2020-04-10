---
id: routes
title: Routes
---

Routing in Routex is slightly different from other routers, because it is targeted towards making it much simpler.

To start, you can use the `.get`, `.post`, `.delete`, `.patch`, `.put`, and `.any` (all aliasing to `.route`) to attach single routes to a router.
These methods are chainable, and can be in any order (uses exact match):

```js
const { Routex, TextBody, JsonBody } = require("routex");
const app = new Routex();

app
  .get("/", () => {
    return new TextBody("GET /");
  })
  .post("/submit", (ctx) => {
    ctx.statusCode = 400;
    return new TextBody("POST /submit");
  })
  .get("/json", () => {
    return new JsonBody({ name: "john" });
  })
  .get(
    "/catch",
    () => {
      return new TextBody("GET /catch/*");
    },
    { exact: false }
  );

// Long form
app.route("POST", "/", (ctx) => {
  ctx.body = new TextBody("GET /");
});

app.any("/", (ctx) => {
  // Will catch all other methods on /
  ctx.body = new TextBody("DELETE/PUTCH/PUT /");
});
```

> Also see [handler](./handler.md).
