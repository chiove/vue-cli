module.exports = {
  port: '3030',
  childProcess: true, // 开启可在router中自定义接口，模拟数据请求
  proxy: {
    baseUrl: '/api',
    dev: 'http://127.0.0.1:3000', // dev target
    prod: 'http://127.0.0.1:3000',
  },
};
