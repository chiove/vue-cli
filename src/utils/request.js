/* eslint-disable no-console */
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

const resStatus = {
  830: '登录失效',
};

const instance = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: '',
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

const instanceAuth = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: '',
  timeout: 3000,
});

instanceAuth.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export const request = async (url, method, data, silent = false, config, auth) => {
  const instanceRequest = auth ? instanceAuth : instance;
  try {
    const response = await instanceRequest({
      url,
      method,
      [method === 'get' || method === 'delete' || method === 'put' ? 'params' : 'data']: data,
      config,
    });
    const res = response.data;

    if (!silent) {
      if (response.status === 200) {
        console.log(`-------------------- ${url} --------------------`);
        console.log(res);
        if (res.code !== 200) {
          console.log(res.message);
        }
      } else {
        console.log(httpStatus[response.status]);
      }
    }
    return res;
  } catch (error) {
    if (!silent) {
      if (error.response) {
        Message.error(httpStatus[error.response.status]);
      } else if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
        Message.error(httpStatus[408]);
      }
    }
    return Promise.reject(error);
  }
};

export const get = (url, data, silent, config) => request(url, 'get', data, silent, config, true);
export const post = (url, data, silent, config) => request(url, 'post', data, silent, config, true);

export default {
  get,
  post,
  request,
};
