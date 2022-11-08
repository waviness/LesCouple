<template>
	<view class="container">
		<image class="develope" src="../../static/icon-404.png" mode="aspectFit"></image>
		<view class="develope-text">正在努力开发中…</view>
		<!-- <u-cell-group>
			<u-cell title="我的UID" value="132456"></u-cell>
			<u-cell title="微信" value="132456"></u-cell>
		</u-cell-group> -->
	</view>
</template>

<script>
	export default {
		name: 'AboutUs',
		data() {
			return{}
		}
	}
</script>

<style lang="less" scoped>
	.container {
		width: 100%;
		height: 100vh;
		background: #ffffff;
	}
	.develope{
		width: 542rpx;
		height: 510rpx;
		position: absolute;
		top: 200rpx;
		left: 106rpx;
	}
	.develope-text{
		width: 750rpx;
		line-height: 44rpx;
		font-size: 32rpx;
		color: #626262;
		text-align: center;
		position: absolute;
		top: 594rpx;
	}
</style>

