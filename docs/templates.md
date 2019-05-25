---
id: templates
title: Templates
---

Using templates (such as Pug, Handlebars, etc) is easy in Routex, using the [Consolidate.js](https://www.npmjs.com/package/consolidate) package.

## Install

```bash
yarn add consolidate
# or
npm install consolidate
```

Additionally, you will want to install your template engine of choice. For example, Pug:

```bash
yarn add pug
# or
npm install pug
```

## Usage

```js
const { TextBody } = require("routex");
const cons = require("consolidate");

app.get("/", ctx => {
  const html = cons.pug("views/index.pug", { name: "Charles" });

  ctx.body = new TextBody(html, "text/html");
});
```

> Don't forgot to use the `text/html` content type when returning HTML.
