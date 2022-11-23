<template>
	<view class="login text-center">
		<image class="login__logo" src="../../static/images/logo.png" mode="aspectFit"></image>
		<view class="login__desc font-bold">LaLa红娘，助力脱单</view>
		<view class="login__btn">
			<u-button v-if="canIUseGetUserProfile" @click="getUserProfile">微信登录</u-button>
			<u-button v-else open-type="getUserInfo" @getuserinfo="getWxUserInfo">微信登录</u-button>
		</view>
		<!-- <view class="mt-3 text-underline color-primary font-14" @click="registerShow = true">
			立即注册
		</view> -->
		<Register v-if="registerShow" @submit="onRegister" @close="registerShow = false" />
	</view>
</template>

<script>
	import Register from './components/register.vue'
	export default {
		name: 'Login',
		components: {
			Register
		},
		data() {
			return {
				wxAuthCode: '',
				canIUseGetUserProfile: false,
				registerShow: false
			}
		},
		onLoad() {
			const userInfo = uni.getStorageSync('userInfo')
			if (userInfo?.userId) {
				uni.switchTab({
					url: '/pages/home/index'
				})
			}
			if (wx.getUserProfile) {
				this.canIUseGetUserProfile = true
			}
		},
		onShow() {
			this.wxLogin()
		},
		methods: {
			getUserProfile() {
				wx.getUserProfile({
					lang: 'zh_CN',
					desc: '用于完善会员资料',
					success: (res) => {
						this.getWxUserInfo({
							detail: res
						})
					}
				})
			},
			wxLogin() {
				uni.login({
					provider: 'weixin',
					success: (res) => {
						console.log('login success:', res);
						this.wxAuthCode = res.code ? res.code : ''
					},
					fail: (err) => {
						console.log('login fail:', err);
					}
				})
			},
			getWxUserInfo(data) {
				const {
					encryptedData: encryteDate,
					iv,
					rawData,
					sigcharacters: sigcharactersl
				} = data.detail
				const obj = {
					code: this.wxAuthCode,
					// encryteDate,
					// iv,
					// rawData,
					// sigcharactersl
				}
				// this.$api.userLogin(obj).then(res => {
					this.$toast('登录成功')
					uni.setStorageSync('userInfo', {
						name: '土方十四郎',
						userId: 232,
						headerImg: 'https://img1.baidu.com/it/u=346755217,1159990253&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						isAuth: 1,
						hasMaker: 0,
						isMaker: 1,
					})
					// if (res.data.registFlag) { // 已注册
						// uni.setStorageSync('userInfo', res.data.userInfo)
						uni.switchTab({
							url: '/pages/home/index'
						})
				// 	} else {
				// 		this.registerShow = true
				// 	}
				// }).catch(err => {
				// 	this.wxLogin()
				// })
			},
			async onRegister(info) {
				info.openId = 't23232322131111'
				info.wechatNumber = 'testestest111'
				// info.imgId = 'testestest111'
				info.hobby = String(info.hobby)
				info.entertainment = String(info.entertainment)
				info.city = String(info.city)
				info.characters = String(info.characters)
				info.ageLevel = String(info.ageLevel)
				info.intentAttribute = String(info.intentAttribute)
				const res = await this.$api.userRegister(info)
				// 提交注册 并 完成登录 跳转首页
				uni.setStorageSync('userInfo', res.data)
				uni.switchTab({
					url: '/pages/home/index'
				})
			}
		}
	}
</script>

<style lang="scss">
	.login {
		width: 100vw;
		height: 100vh;
		background: $uni-color-primary;

		&__logo {
			margin-top: 160rpx;
		}

		&__desc {
			color: #FC8CCD;
			letter-spacing: 2rpx;
		}

		&__btn {
			margin: 160rpx 160rpx 0 160rpx;
		}
	}
</style>
