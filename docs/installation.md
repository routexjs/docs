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

## Usage

Create an `index.js` and setup your first Routex server:

```js
const { Routex, TextBody } = require("routex");

const port = process.env.PORT || 3000;
const app = new Routex();

app.get("/", ctx => {
  ctx.body = new TextBody("Hello world!");
});

app.listen(port).then(() => console.log(`Listening on ${port}`));
```
