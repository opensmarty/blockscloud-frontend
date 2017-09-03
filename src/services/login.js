import request from '../utils/request';

export async function login (data) {
  return request('/api/center/login','post',data);
}
