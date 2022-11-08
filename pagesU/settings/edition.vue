<template>
	<!-- <view class="container">
		<image class="develope" src="../../static/icon-404.png" mode="aspectFit"></image>
		<view class="develope-text">正在努力开发中…</view>
	</view> -->
	<view class="edition">
		<view class="editionImage text-center">
			<image class="login__logo" src="../../static/logo.png" mode="aspectFit"></image>
			<view class="logo_font font-bold">LCP</view>
			<view class="logo_edition">版本:1.0.0</view>
		</view>
		<view class="editionBefore">
			<u-button text="已是最新版本"  size="small" shape="circle" color="#bbbbbb" disabled></u-button>
		</view>
		<view class="editionNew">
			<u-button text="有新的版本"  size="small" shape="circle" type="primary"></u-button>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.edition {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.editionImage {
			position: relative;
			.login__logo {
				margin-top: 80rpx;
			}
			.logo_font {
				font-size: 40rpx;
				letter-spacing: 2rpx;
			}
			.logo_edition {
				color: #7d8ea8;
				letter-spacing: 2rpx;
			}
		}
		.editionBefore {
			width: 80%;
			margin-top: 200rpx;
		}
		.editionNew{
			width: 80%;
			margin-top: 30rpx;
		}
	}
	
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