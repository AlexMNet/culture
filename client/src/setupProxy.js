const { createProxyMiddleware } = require("http-proxy-middleware");
const proxy = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware(
      "/api/v1/images", // replace with your endpoint
      { target: "http://localhost:5000" } // replace with your target
    )
  );
};
