<template>
	<view>
		<view class="bg-white">
			<u-cell-group>
				<u-cell title="账号设置" url="/pages/settings/account" isLink></u-cell>
				<u-cell title="隐私" url="/pages/settings/secrets" isLink></u-cell>
				<u-cell title="用户注册协议" url="/pages/settings/agreement" isLink></u-cell>
				<u-cell title="问题反馈" url="/pages/settings/feedback" isLink></u-cell>
				<u-cell title="关于我们" url="/pages/settings/aboutus" isLink></u-cell>
			</u-cell-group>
		</view>
		<view class="m-8">
			<u-button text="退出登录" @click="logout"></u-button>
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			logout() {
				uni.clearStorageSync()
				uni.reLaunch({
					url: '/pages/login/index'
				})
			}
		}
	}
</script>

<style>
</style>
