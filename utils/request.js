const baseUrl = 'https://www.lescouple.top:9090';

function http(url, params, type, header) {
	return new Promise((resolve, reject) => {
		uni
			.request({
				url: baseUrl + url,
				header,
				method: type,
				data: params,
				timeout: 30000,
			})
			.then(res => {
				if (res[1].statusCode == 200 && res[1].data.code == 200) {
					resolve(res[1].data);
				} else if (res[1].statusCode == 200 && res[1].data.code == 401) {
					uni.showToast({
						icon: 'none',
						title: res[1].data.msg || '登录已过期，请重新登录',
						duration: 2000,
					});
					setTimeout(() => {
						uni.clearStorageSync();
						uni.reLaunch({
							url: '/pages/login/index',
						});
					}, 1000);
				} else if (res[1].statusCode == 200 && res[1].data.code == 400) {
					uni.showToast({
						icon: 'none',
						title: res[1].data.msg,
						duration: 2000,
					});
				} else if (
					res[1].statusCode == 200 &&
					res[1].data.code != 200 &&
					res[1].data.code != 400
				) {
					reject(res[1].data);
					uni.showToast({
						icon: 'none',
						title: res[1].data.msg,
						duration: 2000,
					});
				} else {
					reject(res[1].data);
					uni.showToast({
						icon: 'none',
						title: '当前网络不给力哦~',
						duration: 2000,
					});
				}
			})
			.catch(err => {
				console.log('失败：' + url);
				console.log(err);
				reject(err);
			});
	});
}
const request = {
	get: function(url, params) {
		return http(url, params, 'GET');
	},
	post: function(url, params) {
		return http(url, params, 'POST');
	},
};

export default request;
