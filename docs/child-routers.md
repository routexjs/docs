---
id: child-routers
title: Child Routers
---

Child routers are useful to scale up your app and split it's functionally into smaller working units:

## Using `app.child`

You can create a child router using `app.child(path)`:

```js
app.child("/child").get("/", () => {
  return new TextBody("GET /child");
});
```

## Router Class

You can also create a router using the `Router` class, and attach it using `app.child`:

```js
const { Router } = require("routex");
const nameRouter = new Router();

nameRouter.get("/", () => {
  return new TextBody("GET /name");
});

app.child("/name", nameRouter);
```

## Middlewares

You can also apply middlewares when creating child routers:

```js
const firstNameMiddleware = (ctx) => {
  ctx.data.firstName = "john";
};
const lastNameMiddleware = (ctx) => {
  ctx.data.lastName = "smith";
};

const { Router } = require("routex");
const childRouter = new Router();

app.child("/firstName", [childRouter, firstNameMiddleware]);
app.child("/name", [childRouter, [firstNameMiddleware, lastNameMiddleware]]);

// Or

app.child("/firstName", [null, firstNameMiddleware]);
app.child("/name", [null, [firstNameMiddleware, lastNameMiddleware]]);

// Or

app.child("/firstName").middleware(firstNameMiddleware);
app.child("/name").middleware([firstNameMiddleware, lastNameMiddleware]);
```
