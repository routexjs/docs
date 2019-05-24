---
id: middlewares
title: Middlewares
---

Middlewares are triggered at the start and end of handing a router.
A middleware is a handler that can return a function/Promise (to be called at the end of the request):

```js
app
  .middleware(ctx => {
    // Attaches data to the request in the root router
    ctx.data.name = "john";
  })
  .get("/", ctx => {
    ctx.body = new JsonBody({ name: ctx.data.name });
  });
app
  .child("/child")
  .middleware(ctx => {
    return () => {
      // Will append ' ... smith!' to all requests in this router
      ctx.res.write(" ... smith!");
    };
  })
  .get("/", ctx => {
    ctx.res.write(`My name is ${ctx.data.name}`);
  });
```

You can also apply multiple middlewares at once:

```js
app
  .middleware([
    ctx => {
      ctx.data.firstName = "john";
    },
    ctx => {
      ctx.data.lastName = "smith";
    }
  ])
  .get("/", ctx => {
    ctx.body = new JsonBody({
      firstName: ctx.data.firstName,
      lastName: ctx.data.lastName
    });
  });
```
