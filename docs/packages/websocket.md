---
id: websocket
title: WebSocket
---

You can use [`@routex/websocket`](https://www.npmjs.com/package/@routex/websocket) for WebSocket support.
WebSocket support is based on [ws](https://www.npmjs.com/package/ws).

## Install

```bash
yarn add @routex/websocket
# or
npm add @routex/websocket
```

## Usage

Setup your app:

```js
const { Routex, TextBody } = require("routex");
const websocket = require("@routex/websocket");

const port = process.env.PORT || 3000;
const app = new Routex();

app.appMiddleware(websocket());

// Must be a GET request.
app.get(
  "/",
  websocket.socketHandler(socket => {
    // Echo server
    socket.on("message", data => {
      socket.send("You said: " + data);
    });
  })
);

app.listen(port).then(() => console.log(`Listening on ${port}`));
```

## Options

You can pass any [server option from ws](https://github.com/websockets/ws/blob/HEAD/doc/ws.md#new-websocketserveroptions-callback) (except `server`).

```js
app.appMiddleware(
  websocket({
    backlog: 10, // he maximum length of the queue of pending connections
    perMessageDeflate: true, // Enable/disable permessage-deflate
    maxPayload: 1024 * 1024 // The maximum allowed message size in bytes
    // ...
  })
);
```

## Handler

The `socketHandler` accepts a socket handler, which is passed in a [WebSocket](https://github.com/websockets/ws/blob/HEAD/doc/ws.md#class-websocket) and `ctx`.

```js
app.get(
  "/:name",
  websocket.socketHandler((socket, ctx) => {
    // Send data
    socket.send(`Hello ${ctx.params.name}!`);

    // Receive data
    socket.on("message", data => {
      if (data === "Goodbye!") {
        // Close socket
        socket.close();
        return;
      }

      socket.send("You said: " + data);
    });
  })
);
```

The 3rd argument is the WebSocket server (`wss`).

## Note

This package uses the `ctx.data._socketHandler` key, do _not_ override it.
This can change at any time and should be considered internal.
