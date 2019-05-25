---
id: scaling
title: Scaling
---

Routex is built to scale your application. You can easily seperate your applications into smaller units with [child routes](./child-routers.md).

#### `users/router.js`

```js
const { Router } = require("routex");

const createUser = require("./create");
const editUser = require("./edit");
const viewUser = require("./view");

const router = new Router();

router.post("/", createUser);
router.put("/", createUser);
router.get("/:userId", viewUser);

module.export = router;
```

#### `index.js`

```js
const { Routex } = require("routex");

const userRouter = require("./users/router");
const authRouter = require("./auth/router");

const app = new Routex();

app.child("/users", userRouter);
app.child("/auth", authRouter);
```
