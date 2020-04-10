---
id: body
title: Body
---

Returning a body can be done using `return` inside a handler.
You may also set the body to the `ctx.body` prop.

## Text

You can return simple text using the `TextBody` class. The optional second argument is the content type:

```js
const { TextBody } = require("routex");

app.get("/", () => {
  return new TextBody("Hello world!");
});

app.get("/html", (ctx) => {
  ctx.body = new TextBody(
    "<html><body><h1>Hello world!</h1></body></html>",
    "text/html"
  );
});
```

## JSON

You can return JSON using the `JsonBody` class. The optional second argument is the JSON options:

```js
const { JsonBody } = require("routex");

app.get("/", () => {
  return new JsonBody({ hello: "world" });
});

app.get("/pretty", () => {
  return new JsonBody({ hello: "world" }, { pretty: true });
});
```

## Custom

You can create your own body type by implementing the `Body` interface:

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->

```js
class TestBody {
  constructor() {
    this.body = "test";
    this.contentType = "text/plain";
  }

  toBuffer = () => {
    return Buffer.from(this.body, "utf8");
  };

  toString = () => this.body;
}

app.get("/", (ctx) => {
  return new TestBody();
});
```

<!--TypeScript-->

```typescript
import { IBody } from "routex";

class TestBody implements IBody {
  readonly body = "test";
  readonly contentType = "text/plain";

  toBuffer = () => {
    return Buffer.from(this.body, "utf8");
  };

  toString = () => this.body;
}

app.get("/", (ctx) => {
  return new TestBody();
});
```

<!--END_DOCUSAURUS_CODE_TABS-->
