---
id: inversify
title: Inversify
---

You can use [`@routex/inversify`](https://www.npmjs.com/package/@routex/inversify) for [Inversify](https://github.com/inversify/InversifyJS) decorators/utilities.

This package providers the `@Controller` and method decorators (`@Get`, `@Post`, etc).

TypeScript is highly recommended, and is required to be used with `reflect-metadata` (required by Inversify)

## Install

```bash
yarn add @routex/inversify
# or
npm add @routex/inversify
```

## Usage

Setup your app:

```ts
import "reflect-metadata";
import { ICtx, TextBody } from "routex";
import {
  RoutexInversifyServer,
  TYPE,
  Get,
  Controller,
} from "@routex/inversify";
import { injectable } from "inversify";

@injectable()
@Controller("/test")
class TestController {
  @Get("/name/:name")
  getName(ctx: ICtx) {
    return new TextBody(ctx.params.name);
  }
}

const container = new Container();

container
  .bind(TYPE.Controller)
  .to(TestController)
  .whenTargetNamed("TestController");

const server = new RoutexInversifyServer(container);

const port = process.env.PORT || 3000;

server
  .build()
  .listen(port)
  .then(() => console.log(`Listening on ${port}`));
```

## Controllers

Controllers are defined with the `@Controller` decorator, and must be binded using `TYPE.Controller`. You must also use the `@injectable` decorator

The decorator accepts 2 optional argument, path (`string`) and middlewares (`array`, see middleware section below)

Full usage would be: `@Controller("/users/, [authMiddleware, "otherMiddleware"])`

Example:

```ts
import { MIDDLEWARE } from "./type";

@injectable()
@Controller("/users", [MIDDLEWARE.Auth])
class UsersController {
  @Get("/:id")
  getUser(ctx: ICtx) {
    // ...
  }

  @Post("/", [MIDDLEWARE.IsAdmin])
  createUser(ctx: ICtx) {
    // ...
  }
}
```

## Methods

Methods are defined using a method decorator such as `@Get`, `@Post`, `@Put`, `@Patch`, `@Head`, `@Delete`, or `@Options`

Methods accept 1 required argument, path (`string`), and 2 optional arguments, middlewares (`array`, see middleware section below) and options (`IRouteOptions`)

Full usage would be: `@Get("/", [authMiddleware, "otherMiddleware"], { exact: true })`

You can also use `@Method` which additionally accepts the a method (`Methods`) as the first argument.

## Middlewares

Middlewares can be defined as a middleware function, or a `string`/`symbol` which will be injected from the Inversify container.

Example:

```ts
const symbolMiddlewareKey = Symbol();

container.bind("stringMiddlewareKey").toContantValue((ctx: ICtx) => {
  // ...
});

container.bind(symbolMiddlewareKey).toContantValue((ctx: ICtx) => {
  // ...
});

function functionMiddleware(ctx: ICtx) {
  // ...
}

// ...

@injectable()
@Controller()
class UsersController {
  @Get("/", [functionMiddleware, "stringMiddlewareKey", symbolMiddlewareKey])
  getUsers(ctx: ICtx) {
    // ...
  }
}
```

### Injectable

You can also use an injectable middleware, which is a class extending `interfaces.InjectableMiddleware`

Example:

```ts
import { injectable } from "inversify";
import { ICtx } from "routex";
import { Controller, interfaces } from "@routex/inversify";

@Controller()
@injectable()
export class TestMiddleware implements interfaces.InjectableMiddleware {
  middleware(ctx: ICtx) {
    ctx.data.name = "john";
  }
}

// ...

container.bind("TestMiddleware").to(TestMiddleware);

// ...

@injectable()
@Controller()
class UsersController {
  @Get("/", ["TestMiddleware"])
  getUsers(ctx: ICtx) {
    // ...
  }
}
```
