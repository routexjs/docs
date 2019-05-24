---
id: request-id
title: Request ID
---

Each request is automatically set a request ID (UUID by default), accessible using `ctx.requestId`. It can also be customized:

```js
// Disables request ID (will be undefined)
const app = new Routex({
  requestId: false
});

// Using a custom request ID generator
const app = new Routex({
  requestId: () => new Date().getMilliseconds()
});

app.get("/", ctx => {
  ctx.body = new TextBody(`Your request ID is: ${ctx.requestId}`);
});
```
