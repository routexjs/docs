---
id: listen
title: Listening
---

Using `app.listen` is a simple way to start your Routex server:

```js
// Can parse port from string
app.listen(process.env.PORT || 3000);

// Will randomly assign port
app.listen();

// Returns a Promise with port and server
app.listen().then(async ({ port, server, close }) => {
  console.log(`Listening on :${port}`);
  console.log(`Max connections: ${server.maxConnections}`);
  // Wait 1s
  await new Promise(resolve => setTimeout(resolve, 1000));
  // Close server,
  await close();
});

// Using a custom http.Server
const server = http.createServer(app.handler);
app.listen({ server });
```

## HTTPS

Pass a `https` option to the listen options to start an HTTPS server:

```js
const fs = require("fs");
const privateKey = fs.readFileSync("server.key");
const certificate = fs.readFileSync("server.crt");

app.listen(3000, {
  https: {
    key: privateKey,
    cert: certificate
  }
});
```

To start both an HTTP and HTTPS server, run `.listen` twice:

```js
app.listen(3000);

app.listen(3001, {
  https: {
    key: privateKey,
    cert: certificate
  }
});
```

## Cluster

Cluster can be automatically done using [throng](https://www.npmjs.com/package/throng):

```js
// Cluster with # of cores automatically
app.listen(3000, { cluster: true });

// Cluster with a set number of workers
app.listen(3000, { cluster: 2 });
```

The worker ID cluster can be accessed using `ctx.workerId` (`null` when not clustering).

## Testing

To use in testing or in `http.createServer`, you can use `app.handler`:

```js
const server = http.createServer(app.handler);

// Using supertest
request(app.handler);
```
