<!--
 * @Description: 
 * @Author: hannalai
 * @Date: 2022-09-28 12:55:07
 * @LastEditTime: 2022-11-12 20:59:38
 * @LastEditors: Please set LastEditors
 * @Reference: 
-->
<template>
	<view class="publish-good">
		<u-form labelPosition="left" :model="model" :rules="rules" ref="publishGoodForm">
			<u-form-item label="商品名称" prop="goodInfo.good_name" labelWidth="160rpx" borderBottom required ref="item1">
				<u-input placeholder="请填写商品名称" v-model="model.goodInfo.good_name" @change="changegoodName"
					border="none">
				</u-input>
			</u-form-item>
			<u-form-item label="商品图片" prop="goodInfo.good_ad" class="good-item good-ad" labelWidth="80px" borderBottom
				required ref="item2">
				<u-upload :fileList="fileListgood_ad" @afterRead="afterRead" @delete="deletePic" name="good_ad" multiple
					:previewFullImage="true" :maxCount="5" width="200rpx" height="200rpx"></u-upload>
				<view class="good-tips">最多上传5张图片，只支持.jpg格式</view>
			</u-form-item>
			<u-form-item label="服务内容" prop="goodInfo.good_desc" labelWidth="160rpx" borderBottom ref="item3">
				<u-textarea placeholder="请输入服务内容,400字以内,请勿填写电话号码/微信等联系方式" v-model="model.goodInfo.good_desc" count maxlength="400">
				</u-textarea>
			</u-form-item>
			<u-form-item label="商品价格" prop="goodInfo.price" labelWidth="160rpx" borderBottom ref="item4">
				<u-input placeholder="不可填写" placeholder-style="color: #E54D42" v-model="model.goodInfo.user_name" border="none" readonly></u-input>
			</u-form-item>
		</u-form>
		<u-button type="primary" text="申请发布" customStyle="margin-top: 100rpx" @click="submit"></u-button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			disabled: true,
			model: {
				goodInfo: {
					good_name: '',
					good_ad: '',
					good_desc: '',
					price: ''
				},
			},
			rules: {
				'goodInfo.good_name': {
					type: 'string',
					required: true,
					message: '请重新填写商品名称，不超过20个字',
					max: 20,
					trigger: ['blur']
				},
				'goodInfo.price': {
					type: 'number',
					required: true,
					message: '请重新填写商品价格',
					max: 5,
					trigger: ['blur']
				},
			},
		    fileListgood_ad: [],
		}
	},
	onReady() {
		// 如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则
		this.$refs.publishGoodForm.setRules(this.rules)
	},
	onShow() {
	},
	methods: {
		changegoodName() {

		},
		// 删除图片
		deletePic(event) {
			console.log('event', event.name, );
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
.publish-good {
	height: 100vh;
	background: #fff;
	padding: 32rpx;
}

.good-log {
	display: flex;
	justify-content: flex-start;
}

.good-item {
	width: 136rpx;
}

.good-name {
	display: flex;
	align-items: center;
	justify-content: flex-start;
}

.good-title {
	color: #000;
	margin-right: 16rpx;
}
</style>
