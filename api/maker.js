import request from '@/utils/request.js';

// 查询红娘列表及店铺
export function getMatchmakerList(params) {
  return request.get('/getMatchmakerList', params).then(res => res.data);
}

// 查询该红娘商品信息
export function getProductList(params) {
  return request.get('/getProductList', params).then(res => res.data);
}

// 查询最优评价及总评价数
export function getPettyEvaluation(params) {
  return request.get('/getPettyEvaluation', params).then(res => res.data);
}

// 查询红娘的所有评价
export function getEvaluationList(params) {
  return request.get('/getEvaluationList', params).then(res => res.data);
}

// 提交订单信息
export function insertOrderInfor(params) {
  return request.post('/insertOrderInfor', params).then(res => res.data);
}

// 订单支付
export function payForOrder(params) {
  return request.post('/payForOrder', params).then(res => res.data);
}
