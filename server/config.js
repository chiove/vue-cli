module.exports = {
  port: '3030',
  childProcessPort: '3000',
  childProcess: false, // node子进程服务
  proxy: {
    baseUrl: '/api/v1/',
    dev: 'http://127.0.0.1:3000', // dev target
    prod: 'http://127.0.0.1:3000',
  },
};
