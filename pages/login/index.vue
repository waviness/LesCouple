<template>
	<view class="login text-center">
		<image class="login__logo" src="../../static/logo.png" mode="aspectFit"></image>
		<view class="login__desc font-bold">LaLa红娘，助力脱单</view>
		<view class="login__btn">
			<u-button v-if="canIUseGetUserProfile" @click="getUserProfile">微信登录</u-button>
			<u-button v-else type="primary" open-type="getUserInfo" @getuserinfo="getWxUserInfo">微信登录</u-button>
		</view>
		<view class="mt-3 text-underline color-primary font-14" @click="registerShow = true">
			立即注册
		</view>
		<Register v-if="registerShow" @close="registerShow = false" />
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
			if (wx.getUserProfile) {
				this.canIUseGetUserProfile = true
			}
		},
		onShow() {
			this.wxLogin()
		},
		methods: {
			getUserProfile() {
				this.$toast('登录成功')
				uni.switchTab({
					url: '/pages/home/index'
				})
				// wx.getUserProfile({
				// 	lang: 'zh_CN',
				// 	desc: '用于完善会员资料',
				// 	success: (res) => {
				// 		this.getWxUserInfo({
				// 			detail: res
				// 		})
				// 	}
				// })
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
			async getWxUserInfo(data) {
				const {
					encryptedData: encryteDate,
					iv,
					rawData,
					signature: signaturel
				} = data.detail
				const obj = {
					code: this.wxAuthCode,
					encryteDate,
					iv,
					rawData,
					signaturel
				}
				this.$api.userLogin(obj).then(res => {
					this.$toast('登录成功')
					const flag = 0
					if (flag) { // 已注册
						uni.switchTab({
							url: '/pages/home/index'
						})
					} else {
						this.registerShow = true
					}
				}).catch(err => {
					this.wxLogin()
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
