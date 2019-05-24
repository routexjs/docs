---
id: body-parser
title: Body Parser
---

You can use [`@routex/body-parser`](https://www.npmjs.com/package/@routex/websocket) for body parsing.
Body parsing is based on [`body-parser`](https://www.npmjs.com/package/body-parser).

## Install

```bash
yarn add @routex/body-parser
# or
npm add @routex/body-parser
```

## Usage

Setup your app:

```js
const { Routex, JsonBody } = require("routex");
const bodyParser = require("@routex/body-parser");

const port = process.env.PORT || 3000;
const app = new Routex();

app.use(bodyParser.json());

app.get("/", ctx => {
  ctx.body = new JsonBody(ctx.req.body);
});

app.listen(port).then(() => console.log(`Listening on ${port}`));
```

The parsed body is available under `ctx.req.body` (same API as `body-parser`).
