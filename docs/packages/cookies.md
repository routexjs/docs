---
id: cookies
title: Cookies
---

You can use [`@routex/cookies`](https://www.npmjs.com/package/@routex/cookies) for cookies.

## Install

```bash
yarn add @routex/cookies
# or
npm add @routex/cookies
```

## Usage

Setup your app:

```js
const { Routex, TextBody } = require("routex");
const cookies = require("@routex/cookies");

const port = process.env.PORT || 3000;
const app = new Routex();

app.use(cookies());

app.get("/", ctx => {
  const name = ctx.cookies.get("name");
  if (!name) {
    ctx.cookies.set("name", "john");
  }
  ctx.body = new TextBody("Set name cookie");
});

app.listen(port).then(() => console.log(`Listening on ${port}`));
```

### Get

You can use `ctx.cookies.get(cookie)` or `ctx.cookies.all` to get cookies:

```js
app.get("/a", ctx => {
  const name = ctx.cookies.get("name");
});

app.get("/b", ctx => {
  const { name } = ctx.cookies.all;
});
```

### Set

You can use `ctx.cookies.set(cookie, value)` set cookies:

```js
app.get("/", ctx => {
  ctx.cookies.set("name", "john");
});
```

You may also pass [options](https://www.npmjs.com/package/cookie#options-1) (see link for more details) as a third parameters:

| Option     | Type                         |
| ---------- | ---------------------------- |
| `domain`   | `string`                     |
| `encode`   | `(string) => string`         |
| `expires`  | `Date`                       |
| `httpOnly` | `boolean`                    |
| `maxAge`   | `number`                     |
| `path`     | `string`                     |
| `sameSite` | `boolean | 'lax' | 'strict'` |
| `secure`   | `boolean`                    |

### Remove

You can use `ctx.cookies.remove(cookie)` remove cookies:

```js
app.get("/remove", ctx => {
  ctx.cookies.remove("name");
});
```

## Options

You may also pass options to the `cookies()` middleware:

- [`parse`](https://www.npmjs.com/package/cookie#options):

  | Option   | Type                 |
  | -------- | -------------------- |
  | `decode` | `(string) => string` |

- [`serialize`](https://www.npmjs.com/package/cookie#options-1):

  | Option     | Type                         |
  | ---------- | ---------------------------- |
  | `domain`   | `string`                     |
  | `encode`   | `(string) => string`         |
  | `expires`  | `Date`                       |
  | `httpOnly` | `boolean`                    |
  | `maxAge`   | `number`                     |
  | `path`     | `string`                     |
  | `sameSite` | `boolean | 'lax' | 'strict'` |
  | `secure`   | `boolean`                    |
