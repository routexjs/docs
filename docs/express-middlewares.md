---
id: express-middlewares
title: Express Middlewares
---

Routex has built-in support for Express/Connect/callback style middlewares.

```js
const { useExpress } = require("routex");
const cors = require("cors");

app.middleware(useExpress(cors()));
```

This enables the `(req, res) => ...` or `(req, res, next) => ...` syntax.
