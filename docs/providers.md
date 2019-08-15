---
id: providers
title: Providers
---

You can use `ctx.providers` to store providers (for dependency injection). This allows to easily swap out providers (say switching caching service, image host, etc):

```js
const users = {
  getUser(id) {
    // ...
  }
};

const app = new Routex({
  providers: {
    users
  }
});

app.get("/", ctx => {
  const user = ctx.providers.users.getUser(1);
  ctx.body = new JsonBody({ user });
});
```

You can also inject new providers in middlewares (the root providers will not be mutated):

```js
const app = new Routex({
  providers: {
    users
  }
});

app.middleware(ctx => {
  ctx.providers.images = {
    getImage(id) {
      // ...
    }
  };
});

app.get("/", ctx => {
  const user = ctx.providers.users.getUser(1);
  const image = ctx.providers.images.getImage(1);
  ctx.body = new JsonBody({ user, image });
});
```
