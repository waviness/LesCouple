import request from '@/utils/request.js'

// 查询当前用户的全部订单信息
export function getOrderList(params) {
	return request.get('/getOrderList', params).then(res => res.data)
}
