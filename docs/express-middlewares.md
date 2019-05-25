---
id: express-middlewares
title: Express Middlewares
---

Routex has built-in support for Express/Connect/callback style middlewares. This support is not complete, and some may break (please file an issue):

```js
const { useExpress } = require("routex");
const cors = require("cors");

app.middleware(useExpress(cors()));
```

This enables the `(req, res) => ...` or `(req, res, next) => ...` syntax.

> When using `(res, res, next) => ...`, calling `next` is required. Using `(req, res) => ...` will be called synchronously.

## Known working

List of tested Express middlewares:

- [`cors`](https://www.npmjs.com/package/cors)
- [`body-parser`](https://www.npmjs.com/package/body-parser) (Use [`@routex/body-parser`](./packages/body-parser.md) for first-party support)

Middlewares not listed here should work.

## Known broken

Currently no known middlewares are broken. Please file an issue if you find one (so that we can add support for it, or list it here).
