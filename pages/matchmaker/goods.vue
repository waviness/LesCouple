<template>
	<view class="bg-white">
		<view class="py-3 text-center font-bold">{{ detail.title }}</view>
		<u-swiper :list="imgList" :radius="0" :height="200" :autoplay="true" indicator indicatorMode="dot" circular>
		</u-swiper>
		<view class="p-3">
			<view class="my-3">
				<view class="font-14 font-bold">服务内容</view>
			</view>
			<u-divider></u-divider>
			<view class="my-3">
				<view class="font-14 font-bold">用户评价</view>
			</view>
		</view>
	</view>
</template>

<script>
	// import {
	// 	LesUser
	// } from './components/User.vue'
	export default {
		name: 'GoodsDetail',
		components: {
			// LesUser
		},
		data() {
			return {
				detail: uni.getStorageSync('goodsDetail'),
				imgList: [
					'https://img2.baidu.com/it/u=351231172,1476228708&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
					'https://img2.baidu.com/it/u=873374196,739480524&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
					'https://img1.baidu.com/it/u=1767030698,911172892&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
				]
			}
		},
	}
</script>

<style>
</style>
