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
  return new TextBody(`Hello ${ctx.params.name}!`);
};

app.get("/:name", handler);

app.listen(port).then(() => console.log(`Listening on ${port}`));
```

## Extending Types

The [context data](./context-data.md) object can be extended to be typed, using the following code:

```typescript
declare module "routex" {
  interface ICtxData {
    userId?: string;
  }
}
```

The [providers](./providers.md) object can be extended to be typed, using the following code:

```typescript
declare module "routex" {
  interface ICtxProviders {
    users: UserFacade;
  }
}
```
