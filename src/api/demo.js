import { get, post } from '../utils/request';


export const demoGet = (data) => {
  return get('/test', data);
};

export const demoPost = (data) => {
  return post('/test', data);
};


export const getOne = (data) => {
  return get(`/users/${data.id}`);
};
