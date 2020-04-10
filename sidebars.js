module.exports = {
  docs: {
    "Getting Started": [
      "introduction",
      "installation",
      "listen",
      "body",
      "providers",
      "typescript",
    ],
    Routes: [
      "routes",
      "child-routers",
      "parameters",
      "query-string",
      "headers",
      "context-data",
      "request-id",
      "errors",
    ],
    Middlewares: ["middlewares", "express-middlewares"],
    Examples: ["scaling", "templates"],
  },
  packages: [
    "packages/index",
    "packages/body-parser",
    "packages/cookies",
    "packages/hooks",
    "packages/websocket",
  ],
};
