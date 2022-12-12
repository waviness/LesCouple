import request from '@/utils/request.js'

// 首页推荐用户
export function getHomeList(params) {
	return request.get('/index/page', params).then(res => res.data)
}

// 查询某用户的具体信息
export function getUserInfo(params) {
	return request.get('/getUserInfo/' + params).then(res => res.data)
}

// 查询红娘的信息
export function getOwenMatchmakerInfo(params) {
	return request.get('/getOwenMatchmakerInfo', params).then(res => res.data)
}

// 关注用户
export function focusUser(params) {
	return request.post('/focusUser', params).then(res => res.data)
}

// 查询当前登录用户信息
export function getMyUserInfo(params) {
	return request.get('/getMyUserInfo', params).then(res => res.data)
}

// 获取关注的人信息
export function getConcernedUser(params) {
	return request.get(`/getConcernedUser/${params.userId}`, params).then(res => res.data)
}

// 获取被关注的人信息
export function getConcernUser(params) {
	return request.get(`/getConcernUser/${params.userId}`, params).then(res => res.data)
}

// 查询“谁看过我”
export function getBrowseUser(params) {
	return request.get(`/getBrowseUser/${params.userId}/${params.pageSize}`, params).then(res => res.data)
}

// 查询“我看过谁
export function getBrowsedUser(params) {
	return request.get(`/getBrowsedUser/${params.userId}`, params).then(res => res.data)
}

// 查询用户需求信息
export function getUserIntention(params) {
	return request.get('/getUserIntention', params).then(res => res.data)
}

// 保存用户需求信息
export function updateUserIntention(params) {
	return request.post('/updateUserIntention', params).then(res => res.data)
}

// 保存用户信息
export function updateUserInfo(params) {
	return request.post('/updateUserInfo', params).then(res => res.data)
}

// 上传图片
export function uploadImages(params) {
	return request.post('/images/upload', params).then(res => res.data)
}
