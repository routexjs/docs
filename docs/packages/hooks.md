---
id: hooks
title: Hooks
---

Routex Hooks are an alternative way to write server-side code, inspired by the great re-usability of [React Hooks](https://reactjs.org/docs/hooks-intro.html)

You can use [`@routex/hooks`](https://www.npmjs.com/package/@routex/hooks) for Hooks.

Unlike React Hooks, Routex Hooks can be called conditionally or in loops. Hook handlers must be wrapped by `hooksHandler` (see below)

> Hooks should be prefixed with `use` as a convention, but it is not enforced. It is strongly recommended that the prefix is used for consistency

## Install

```bash
yarn add @routex/hooks
# or
npm add @routex/hooks
```

## Usage

Setup your app:

```js
const { Routex, TextBody } = require("routex");
const { hooksHandler, useGetParam } = require("@routex/hooks");

const port = process.env.PORT || 3000;
const app = new Routex();

app.get(
  "/:name",
  hooksHandler(() => {
    const name = useGetParam("name");

    return new TextBody(name);
  })
);

app.listen(port).then(() => console.log(`Listening on ${port}`));
```

### `hooksHandler`

All handlers must be wrapped inside the `hooksHandler` function. This can optionally accept the standard `ctx` object, like a regular handler.

You can do anything a handler can do, including using a wrapped handled as a middleware or returning a body

## Hooks

Many Hooks are available for common uses. You can also create re-usable Custom Hooks (see below)

### `useGetCtx`

Get the current `ctx` object for the request

Example:

```js
const { hooksHandler, useGetCtx } = require("@routex/hooks");

const handler = hooksHandler(() => {
  const ctx = useGetCtx();
});
```

### `useGetParam`

Get a path parameter, such as `/:name`

Example:

```js
const { hooksHandler, useGetParam } = require("@routex/hooks");

const handler = hooksHandler(() => {
  const name = useGetParam("name");
});

// ...

app.get("/:name", handler);
```

### `useGetQuery`

Get a query parameter, such as `/?name=john`

Example:

```js
const { hooksHandler, useGetQuery } = require("@routex/hooks");

const handler = hooksHandler(() => {
  const name = useGetQuery("name");
});
```

### `useGetHeader`

Get a request header, such as `Authorization`

Example:

```js
const { hooksHandler, useGetHeader } = require("@routex/hooks");

const handler = hooksHandler(() => {
  const token = useGetHeader("Authorization");
});
```

### `useGetAllData`

Get `ctx.data`

Example:

```js
const { hooksHandler, useGetAllData } = require("@routex/hooks");

const handler = hooksHandler(() => {
  const data = useGetAllData();
});
```

### `useGetData`

Get a field from `ctx.data`

Example:

```js
const { hooksHandler, useGetData } = require("@routex/hooks");

const handler = hooksHandler(() => {
  const user = useGetData("user");
});
```

### `useSetData`

Set a field in `ctx.data`

Example:

```js
const { hooksHandler, useSetData } = require("@routex/hooks");

const handler = hooksHandler(() => {
  useSetData("user", { name: "john" });
});
```

### `useGetAllProviders`

Get `ctx.providers`

Example:

```js
const { hooksHandler, useGetAllProviders } = require("@routex/hooks");

const handler = hooksHandler(() => {
  const providers = useGetAllProviders();
});
```

### `useGetProvider`

Get a provider from `ctx.providers`

Example:

```js
const { hooksHandler, useGetProvider } = require("@routex/hooks");

const handler = hooksHandler(() => {
  const userRepository = useGetProvider("userRepository");
});
```

### `useGetMethod`

Get the request method, such as `get` or `post`

Example:

```js
const { hooksHandler, useGetMethod } = require("@routex/hooks");

const handler = hooksHandler(() => {
  const method = useGetMethod();
});
```

### `useSetStatusCode`

Set the response status code, such as `200` or `404`

Example:

```js
const { hooksHandler, useSetStatusCode } = require("@routex/hooks");

const handler = hooksHandler(() => {
  useSetStatusCode(404);
});
```

### `useSetBody`

Set the response body.

> It is recommended to use `return` for bodies.

Example:

```js
const { hooksHandler, useSetBody } = require("@routex/hooks");

const handler = hooksHandler(() => {
  useSetBody(new JsonBody({ name: "john" }));
});
```

## Custom Hooks

You can extract common functionality inside custom hooks, which can replace middlewares at the route level (middlewares are still preferred when used at the router level).

For example, if you often need to check if a parameter is set, and exists in the database, you can turn this:

```js
const { hooksHandler, useGetQuery } = require("@routex/hooks");

const getNameHandler = hooksHandler(async () => {
  const id = useGetQuery("id");
  if (!id) {
    throw new ErrorWithBody(200, new JsonBody({ error: "ID is required" }));
  }

  const user = await useGetProvider("userRepository").getUser(id);

  if (!user) {
    throw new ErrorWithBody(200, new JsonBody({ error: "User not found" }));
  }

  return new JsonBody({ name: user.name });
});

const getAgeHandler = hooksHandler(async () => {
  const id = useGetQuery("id");
  if (!id) {
    throw new ErrorWithBody(200, new JsonBody({ error: "ID is required" }));
  }

  const user = await useGetProvider("userRepository").getUser(id);

  if (!user) {
    throw new ErrorWithBody(200, new JsonBody({ error: "User not found" }));
  }

  return new JsonBody({ age: user.age });
});
```

Into the following:

```js
const { hooksHandler, useGetQuery } = require("@routex/hooks");

async function useGetUser(id) {
  const id = useGetQuery("id");
  if (!id) {
    throw new ErrorWithBody(200, new JsonBody({ error: "ID is required" }));
  }

  const user = useGetProvider("userRepository").getUser(id);

  if (!user) {
    throw new ErrorWithBody(200, new JsonBody({ error: "User not found" }));
  }

  return user;
}

const getNameHandler = hooksHandler(async () => {
  const user = await useGetUser();

  return new JsonBody({ name: user.name });
});

const getAgeHandler = hooksHandler(async () => {
  const user = await useGetUser();

  return new JsonBody({ age: user.age });
});
```
