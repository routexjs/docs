---
id: middlewares
title: Middlewares
---

Middlewares are triggered at the start and end of handing a router.
A middleware is a handler that can return a function/Promise (to be called at the end of the request):

```js
app
  .middleware((ctx) => {
    // Attaches data to the request in the root router
    ctx.data.name = "john";
  })
  .get("/", (ctx) => {
    return new JsonBody({ name: ctx.data.name });
  });
app
  .child("/child")
  .middleware((ctx) => {
    return () => {
      // Will append ' ... smith!' to all requests in this router
      ctx.res.write(" ... smith!");
    };
  })
  .get("/", (ctx) => {
    ctx.res.write(`My name is ${ctx.data.name}`);
  });
```

You can also apply multiple middlewares at once:

```js
app
  .middleware([
    (ctx) => {
      ctx.data.firstName = "john";
    },
    (ctx) => {
      ctx.data.lastName = "smith";
    },
  ])
  .get("/", (ctx) => {
    return new JsonBody({
      firstName: ctx.data.firstName,
      lastName: ctx.data.lastName,
    });
  });
```

## Example: Auth Middleware

A common use case is to have a middleware to protect routes to authenticated users.

```js
const { ErrorWithStatusCode } = require("routex");

async function withAuth(ctx) {
  // Using @routex/cookies
  const token = ctx.cookies.get("token");
  // Using Authorization header (removes "Bearer ")
  const token =
    ctx.req.headers["authorization"] &&
    ctx.req.headers["authorization"].splice(7);

  if (!token) {
    throw new ErrorWithStatusCode(400, ["Missing token"]);
  }

  const user = await getUserByToken(token);

  if (!user) {
    throw new ErrorWithStatusCode(400, ["Invalid token"]);
  }

  ctx.data.user = user;
  ctx.data.token = token;
}

// Single route
app.get("/protected", [withAuth, protectedRoute]);

// Child router
app.child("/protected", protectedRouter).middleware(withAuth);
```
