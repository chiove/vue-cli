
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (context, options) => {
  const proxys = createProxyMiddleware(context, options);
  return proxys;
};
