<template>
	<view class="login text-center">
		<image class="login__logo" src="../../static/images/logo.png" mode="aspectFit"></image>
		<view class="login__desc font-bold">LaLa红娘，助力脱单</view>
		<view class="login__btn">
			<u-button @click="getUserInfo">微信登录</u-button>
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
		},
		methods: {
			getUserInfo(data) {
				uni.login({
					provider: 'weixin',
					success: async (res) => {
						console.log('login success:', res);
						this.wxAuthCode = res.code ? res.code : ''
						const loginRes = await this.$api.userLogin({
							code: this.wxAuthCode,
						})
						uni.setStorageSync('token', loginRes.token)
						uni.setStorageSync('userInfo', loginRes.userInfo)
						if (loginRes.registFlag) { // 已注册
							this.$toast('登录成功')
							uni.switchTab({
								url: '/pages/home/index'
							})
						} else {
							this.registerShow = true
							console.log(this.registerShow)
						}
					},
					fail: (err) => {
						console.log('login fail:', err);
					}
				})
			},
			async onRegister(info) {
				info.openId = uni.getStorageSync('userInfo').openId
				info.hobby = String(info.hobby)
				info.entertainment = String(info.entertainment)
				info.city = String(info.city)
				info.characters = String(info.characters)
				info.ageLevel = String(info.ageLevel)
				info.intentAttribute = String(info.intentAttribute)
				const res = await this.$api.userRegister(info)
				// 提交注册 并 完成登录 跳转首页
				// uni.setStorageSync('userInfo', res) // 97417643
				// uni.switchTab({
				// 	url: '/pages/home/index'
				// })
				this.$toast('注册成功')
				this.getUserInfo()
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
