---
id: handler
title: Handler
---

A handler can be:

- A function
  ```js
  const handler = ctx => {};
  ```
- A Promise (`async (ctx) => ...`)
  ```js
  const handler = async ctx => {};
  ```
- A router (`new Router()`)
  ```js
  const handler = new Router();
  ```
- A list of handlers (`[middleware, (ctx) => ..., router]`)

  ```js
  const handler = [
    myMiddleware1,
    myMiddleware2,
    myMiddleware3,
    ctx => {},
    myRouter,
    async ctx => {}
  ];
  ```
