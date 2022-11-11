import request from '@/utils/request.js';

// 查询当前用户列表
export function getUserList(params) {
  return request.get('/getUserList', params).then(res => res.data);
}

// 查询某用户的具体信息
export function getUserInfo(params) {
  return request.get('/getUserInfo', params).then(res => res.data);
}

// 查询红娘的信息
export function getOwenMatchmakerInfo(params) {
  return request.get('/getOwenMatchmakerInfo', params).then(res => res.data);
}

// 关注用户
export function focusUser(params) {
  return request.post('/focusUser', params).then(res => res.data);
}
