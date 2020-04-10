---
id: errors
title: Errors
---

Error handling in Routex uses `throw` as flow control. Routex comes with a few default error types, and a default error handler.

Throwing an error will stop the flow of execution and call your error handler.
If the error is thrown during your route handling (not router-level middlewares),
it will apply the end result of middlewares before calling your error handler.

> Note: You cannot return a body in an error handler. You must use `ctx.body`

```js
const { Routex, TextBody } = require("routex");

const customErrorHandler = (ctx, error) => {
  ctx.body = new TextBody(`You got an error! ${error}`);
};

const app = new Routex({ errorHandler: customErrorHandler });

app.get("/", (ctx) => {
  throw new Error("Some error");
});
```

## Error Types

### Error With Status Code

Use the `ErrorWithStatusCode` class to return an error with a status code:

```js
const { ErrorWithStatusCode } = require("routex");

app.get("/", () => {
  throw new ErrorWithStatusCode(500, "Error message");
});
```

### Error With Body

Use the `ErrorWithBody` class to return an error with a body and status code:

```js
const { ErrorWithBody } = require("routex");

app.get("/", () => {
  throw new ErrorWithBody(500, new TextBody("500 Server Error"));
});
```

### Custom

You can create your own custom error types by extending `Error` or one of the built-in error types:

```js
const { ErrorWithStatusCode } = require("routex");

class ServerError extends ErrorWithStatusCode {
  constructor(message) {
    super(500, message);
  }
}

app.get("/", () => {
  throw new ServerError("Something went wrong!");
});
```
