
import axios from 'axios';

const httpStatus = {
  400: '请求错误',
  401: '未授权',
  403: '拒绝访问',
  408: '请求超时',
  404: '请求的资源不存在',
  500: '服务器错误',
  503: '服务不可用',
  504: '网关超时',
  505: 'HTTP版本不受支持',
};

const dataStatus = {
  830: '登录失效',
};

const instance = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: __BASE_URL__,
  timeout: 3000,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

const request = async (url, method, data, silent = false, config) => {
  try {
    const response = await instance({
      url,
      method,
      [method === 'get' || method === 'delete' ? 'params' : 'data']: data,
      config,
    });
    const res = response.data;
    if (!silent) {
      if (response.status === 200) {
        if (res.code !== 200) {
          console.log(dataStatus[response.status]);
        }
      } else {
        console.log(httpStatus[response.status]);
      }
    }
    return res;
  } catch (error) {
    if (!silent) {
      if (error.response) {
        console.log(httpStatus[error.response.status]);
      } else if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
        console.log(httpStatus[408]);
      }
    }
    return Promise.reject(error);
  }
};

export default {
  get: (url, data, silent, config) => request(url, 'get', data, silent, config),
  post: (url, data, silent, config) => request(url, 'post', data, silent, config),
  request,
};
