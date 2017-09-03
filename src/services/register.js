import request from '../utils/request';

export async function register (data) {
  return request('/api/center/register','post',data);
}