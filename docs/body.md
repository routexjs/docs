---
id: body
title: Body
---

Returning data in Routex uses the `ctx.body` prop.

## Text

You can return simple text using the `TextBody` class. The optional second argument is the content type:

```js
const { TextBody } = require("routex");

app.get("/", ctx => {
  ctx.body = new TextBody("Hello world!");
});

app.get("/html", ctx => {
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

app.get("/", ctx => {
  ctx.body = new JsonBody({ hello: "world" });
});

app.get("/pretty", ctx => {
  ctx.body = new JsonBody({ hello: "world" }, { pretty: true });
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
    this.contentLength = this.body.length;
    this.contentType = "text/plain";
  }

  write = response => {
    response.write(this.body);
  };

  toString = () => this.body;
}

app.get("/", ctx => {
  ctx.body = new TestBody();
});
```

<!--TypeScript-->

```typescript
import { IBody } from "routex";

class TestBody implements IBody {
  readonly body = "text";
  readonly contentLength = this.body.length;
  readonly contentType = "text/plain";

  write = response => {
    response.write(this.body);
  };

  toString = () => this.body;
}

app.get("/", ctx => {
  ctx.body = new TestBody();
});
```

<!--END_DOCUSAURUS_CODE_TABS-->
