import request from '@/utils/request.js'

// 用户登陆
export function userLogin(params) {
	return request.postParam('/userLogin', params).then(res => res.data)
}

// 用户注册
export function userRegister(params) {
	return request.post('/userRegister', params).then(res => res.data)
}
