---
id: installation
title: Installation
---

Install is simple and easy:

```bash
yarn add routex
# or
npm install routex
```

## Hello World

Create an `index.js` and setup your first Routex server:

```js
const { Routex, TextBody, JsonBody } = require("routex");

const port = process.env.PORT || 3000;
const app = new Routex();

app.get("/", () => {
  return new TextBody("Hello world!");
});

app.get("/:name", ctx => {
  return new JsonBody({ hello: ctx.params.name });
});

app.listen(port).then(() => console.log(`Listening on ${port}`));
```
