<!--
 * @Description: 
 * @Author: hannalai
 * @Date: 2022-09-28 12:55:07。
 * @LastEditTime: 2022-10-29 21:10:34
 * @LastEditors: Please set LastEditors
 * @Reference: 
-->
<template>
	<view class="u-page">
		<view class="register-store">
			<u-form labelPosition="left" :model="model" :rules="rules" ref="registerStoreForm">
				<u-form-item label="店铺名称" prop="storeInfo.store_name" labelWidth="80px" borderBottom ref="item1">
					<u-input placeholder="请填写店铺名称" v-model="model.storeInfo.store_name" @change="changeStoreName"
						border="none">
					</u-input>
				</u-form-item>
				<u-form-item label="店铺LOGO" prop="storeInfo.store_log" class="store-item store-logo" labelWidth="80px"
					borderBottom ref="item2">
					<view class="store-log">
						<u-upload :fileList="logpFileList" @afterRead="afterRead" @delete="deletePic" name="store_logo"
							multiple :previewFullImage="true" :maxCount="1" width="100" height="100"></u-upload>
					</view>
					<view class="store-tips">只支持.jpg格式</view>
				</u-form-item>
				<u-form-item label="店铺广告" prop="storeInfo.store_ad" class="store-item store-ad" labelWidth="80px"
					borderBottom ref="item3">
					<u-upload :fileList="adFileList" @afterRead="afterRead" @delete="deletePic" name="store_ad" multiple
						:previewFullImage="true" :maxCount="5" width="100" height="100"></u-upload>
					<view class="store-tips">最多上传5张图片，只支持.jpg格式</view>
				</u-form-item>
				<u-form-item label="店铺描述" prop="storeInfo.store_desc" labelWidth="80px" borderBottom ref="item4">
					<u-textarea placeholder="请输入描述信息,140字以内,请勿填写电话号码/微信等联系方式" v-model="model.storeInfo.store_desc"
						count></u-textarea>
				</u-form-item>
				<u-form-item label="联系人" prop="storeInfo.user_name" labelWidth="80px" borderBottom ref="item5">
					<u-input placeholder="请填写联系人" v-model="model.storeInfo.user_name" border="none"></u-input>
				</u-form-item>
				<u-form-item label="联系方式" prop="storeInfo.user_phone" labelWidth="80px" borderBottom ref="item6">
					<u-input placeholder="请填写联系方式" v-model="model.storeInfo.user_phone" border="none"></u-input>
				</u-form-item>
			</u-form>
			<u-button type="primary" text="申请注册" customStyle="margin-top: 50px" @click="submit"></u-button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			model: {
				storeInfo: {
					store_name: '',
					store_log: '',
					store_ad: '',
					store_desc: '',
					user_name: '',
					user_phone: '',
				},
			},
			rules: {
				'storeInfo.store_name': {
					type: 'string',
					required: true,
					message: '请填写店铺名称',
					trigger: ['blur']
				},
				'storeInfo.user_name': [{
					type: 'string',
					required: true,
					message: '请填写姓名',
					trigger: ['blur', 'change']
				}, {
					// 此为同步验证，可以直接返回true或者false，如果是异步验证，稍微不同，见下方说明
					validator: (rule, value, callback) => {
						// 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
						return uni.$u.test.chinese(value);
					},
					message: "姓名必须为中文",
					// 触发器可以同时用blur和change，二者之间用英文逗号隔开
					trigger: ["change", "blur"],
				}],
				'storeInfo.user_phone': [{
					type: 'string',
					required: true,
					message: '请填写联系方式',
					trigger: ['blur', 'change']
				}, {
					validator: (rule, value, callback) => {
						return uni.$u.test.mobile(value);
					},
					message: "请填写正确的手机号",
					// 触发器可以同时用blur和change，二者之间用英文逗号隔开
					trigger: ["change", "blur"],
				}]
			},
			logpFileList: [],
			adFileList: [{ url: 'https://cdn.uviewui.com/uview/swiper/1.jpg' }],
		}
	},
	onReady() {
		// 如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则
		this.$refs.registerStoreForm.setRules(this.rules)
	},
	onShow() {
	},
	methods: {
		changeStoreName() {

		},
		// 删除图片
		deletePic(event) {
			this[`fileList${event.name}`].splice(event.index, 1)
		},
		// 新增图片
		async afterRead(event) {
			// 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
			let lists = [].concat(event.file)
			let fileListLen = this[`fileList${event.name}`].length
			lists.map((item) => {
				this[`fileList${event.name}`].push({
					...item,
					status: 'uploading',
					message: '上传中'
				})
			})
			for (let i = 0; i < lists.length; i++) {
				const result = await this.uploadFilePromise(lists[i].url)
				let item = this[`fileList${event.name}`][fileListLen]
				this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
					status: 'success',
					message: '',
					url: result
				}))
				fileListLen++
			}
		},
		uploadFilePromise(url) {
			return new Promise((resolve, reject) => {
				let a = uni.uploadFile({
					url: 'http://192.168.2.21:7001/upload', // 仅为示例，非真实的接口地址
					filePath: url,
					name: 'file',
					formData: {
						user: 'test'
					},
					success: (res) => {
						setTimeout(() => {
							resolve(res.data.data)
						}, 1000)
					}
				});
			})
		},
		submit() {
			// 如果有错误，会在catch中返回报错信息数组，校验通过则在then中返回true
			this.$refs.form1.validate().then(res => {
				uni.$u.toast('校验通过')
			}).catch(errors => {
				uni.$u.toast('校验失败')
			})
		},
	},
}
</script>

<style lang="scss">
.register-store {
	height: 100vh;
	background: #fff;
	padding: 16px;
}

.store-log {
	display: flex;
	justify-content: flex-start;
}

.store-item {
	width: 68px;
}

.store-name {
	display: flex;
	align-items: center;
	justify-content: flex-start;
}

.store-title {
	color: #000;
	margin-right: 8px;
}
</style>
