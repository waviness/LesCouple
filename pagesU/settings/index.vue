<template>
	<view>
		<view class="bg-white">
			<u-cell-group>
				<u-cell title="账号设置" url="/pagesU/settings/account" isLink></u-cell>
				<u-cell title="隐私" url="/pagesU/settings/secrets" isLink></u-cell>
				<u-cell title="用户注册协议" url="/pagesU/settings/agreement" isLink></u-cell>
				<u-cell title="问题反馈" url="/pagesU/settings/feedback" isLink></u-cell>
				<u-cell url="/pagesU/settings/edition" isLink value="v1.0.0">
				<view
						slot="title"
						class="u-slot-title"
					>
						<text class="u-cell-text">版本</text>
						<u-tag
							text="新版本"
							size="mini"
							type="error"
						>
						</u-tag>
					</view>
				</u-cell>
				<u-cell title="关于我们" url="/pagesU/settings/aboutus" isLink></u-cell>
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

<style lang="scss">
	.u-slot-title {
		display: flex;
		.u-cell-text {
			padding-right: 10px;
		}
	}
</style>
