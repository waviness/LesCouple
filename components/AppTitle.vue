<template>
	<view class="d-flex align-center">
		<view class="app-title"></view>
		<view class="font-16 ml-1">{{ title }}</view>
	</view>
</template>

<script>
	export default {
		name: "AppTitle",
		props: {
			title: String,
		},
	}
</script>

<style lang="scss">
	.app-title {
		display: inline-block;
		width: 8rpx;
		height: 30rpx;
		background: #2979ff;
	}
</style>
