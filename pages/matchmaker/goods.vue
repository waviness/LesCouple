<template>
	<view class="bg-white">
		<les-user :data="detail" :avatarAuth="true" :showId="true" :autoplay="true" />
		<view class="p-5">
		<view class="font-18 font-bold text-center">找对象需求</view>
		<view class="mt-2">属性：</view>
		<view class="mt-1">年龄范围：</view>
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
				detail: uni.getStorageSync('goodsDetail')
			}
		},
	}
</script>

<style>
</style>
