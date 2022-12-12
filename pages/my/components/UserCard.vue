<template>
	<view class="user-card">
		<image class="user-card__bg" src="../../../static/images/background.png" />
		<view class="user-card__header">
			<image class="user-card__img" :src="data.imgId || headerImgUrl" />
			<view
				:class="['font-11 color-white user-card__tag', data.authFlag ? 'bg-rank-1' : 'bg-gray']">
				{{ data.authFlag ? '已认证' : '未认证' }}
			</view>
		</view>
		<view class="user-card__info">
			<view class="font-14 font-bold">{{ data.userName }}</view>
			<view class="font-12 color-gray-2 mt-1">ID：{{ data.userId }}</view>
		</view>
	</view>
</template>

<script>
	import { headerImgUrl } from '@/constants/common.js'
	export default {
		name: "UserCard",
		props: {
			data: Object
		},
		data () {
			return {
				headerImgUrl
			}
		}
	}
</script>

<style lang="scss">
	.user-card {
		width: 100%;
		height: 360rpx;
		position: relative;
		
		&__bg {
			width: 100%;
			position: absolute;
			top: -240rpx;
			z-index: 1;
		}
		
		&__header {
			z-index: 999;
			position: absolute;
			left: 20rpx;
			bottom: 24rpx;
			background-color: white;
			border-radius: 50%;
			width: 176rpx;
			height: 176rpx;
		}
		
		&__img {
			width: 160rpx;
			height: 160rpx;
			border-radius: 50%;
			margin: 8rpx;
		}
		
		&__tag {
			position: absolute;
			right: -8rpx;
			bottom: 4rpx;
			padding: 0 16rpx;
			border-radius: 20rpx;
		}
		
		&__info {
			position: absolute;
			bottom: 24rpx;
			right: 20rpx;
			text-align: right;
		}
	}
</style>
