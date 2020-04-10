---
id: introduction
title: Introduction
---

[Routex](https://www.npmjs.com/package/routex) is a modern Node router.

## Features

- Easy to use, good performance
- Modern API, native Promise support, fully typed (TypeScript)
- Close compatibility with Express/Koa, fast migration
- Very few dependencies, small API surface, easy to fully understand and extend
- 100% code coverage, well tested

## The Context

Routex uses a context (`ctx`) object to store all information related to a request and response.

The `ctx` object is used for incoming data such as [parameters](parameters.md), and response with [`ctx.body`](body.md).
