module.exports = {
  port: 5050,
  https: false,
  proxy: {
    '/v2.0.0/api': {
      target: 'https://mtest.sanxiapay.com:8843',
      changeOrigin: true,
      ws: false,
    },
    '/v2.0.0/api/seat/websocket': {
      target: 'https://mtest.sanxiapay.com:8843',
      changeOrigin: true,
      ws: true,
    },
    '/tee3': {
      target: 'https://mtest.sanxiapay.com:18443',
      changeOrigin: true,
      pathRewrite: {
        '/tee3': '',
      },
    },
  },
};
