---
id: body-parser
title: Body Parser
---

You can use [`@routex/body-parser`](https://www.npmjs.com/package/@routex/body-parser) for body parsing.
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

// Content-Type: application/json (to object)
app.use(bodyParser.json());

// Content-Type: text/plain (to string)
app.use(bodyParser.text());

// Content-Type: application/x-www-form-urlencoded (to object)
app.use(bodyParser.urlencoded());

// Content-Type: application/octet-stream (to Buffer)
app.use(bodyParser.raw());

app.get("/", ctx => {
  ctx.body = new JsonBody(ctx.req.body);
});

app.listen(port).then(() => console.log(`Listening on ${port}`));
```

The parsed body is available under `ctx.req.body` (same API as `body-parser`).

## Options

This package uses [`body-parser`](https://www.npmjs.com/package/body-parser), and the options passed to `json()`, `text()`, `urlencoded()`, or `raw()` are the same as `body-parser`'s.

You can view all options [here](https://www.npmjs.com/package/body-parser#api).
