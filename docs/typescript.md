---
id: typescript
title: TypeScript
---

Routex is fully built in TypeScript, and it is a first-class citizen.

```typescript
import { Routex, TextBody, Handler, ICtx } from "routex";

const port = process.env.PORT || 3000;
const app = new Routex();

const handler: Handler = (ctx: ICtx) => {
  ctx.body = new TextBody("Hello world!");
};

app.get("/", handler);

app.listen(port).then(() => console.log(`Listening on ${port}`));
```
