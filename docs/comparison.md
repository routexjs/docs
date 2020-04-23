---
id: comparison
title: Comparison
---

|       Feature | Routex              | Koa | Express |
| ------------: | ------------------- | --- | ------- |
|       Routing | ✓                   |     | ✓       |
|   Middlewares | ✓                   | ✓   | ✓       |
|    Templating |                     |     | ✓       |
| Sending Files | First-party package |     | ✓       |
|         JSONP |                     |     | ✓       |

Routex is a lightweight Node router with built-in support for common use-cases, with official first-party packages for less common use cases (body parsing, WebSockets, Inversify decorators).

This is different to Koa (bare bones) and Express (all-in-one), but where Routex shines is its use of modern features such as Promises, and it's avoidance of the `next` callback hell.

|  Support | Routex | Koa | Express |
| -------: | ------ | --- | ------- |
| Promises | ✓      | ✓   |         |
|   `next` |        | ✓   | ✓       |

It also avoids generators which are usually confusing to developers.

## Errors

Routex uses the `throw` features for error handling, instead of using the `next` callback. This is a simpler pattern which is natural to developers.
