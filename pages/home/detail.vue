<template>
	<view class="bg-white">
		<les-user :data="detail" :avatarAuth="true" :showId="true" :autoplay="true" />
		<view class="mt-4 d-flex">
			<u-tag v-for="(item, idx) in detail.hobbys" :key="idx" :text="hobbyList[item]" :type="tagTypes[idx]"></u-tag>
		</view>
		<view class="p-5">
			<view class="font-18 font-bold text-center">找对象需求</view>
			<view class="mt-2">属性：{{ typeText }}</view>
			<view class="mt-1">年龄范围：{{ detail.toAgeRange[0] }} ~ {{ detail.toAgeRange[1] }}</view>
		</view>
	</view>
</template>

<script>
	import {
		typeOptions,
		hobbyOptions,
	} from '@/constants/common.js'
	import {
		LesUser
	} from './components/User.vue'
	export default {
		name: 'UserDetail',
		components: {
			LesUser
		},
		data() {
			return {
				detail: uni.getStorageSync('userDetail'),
				typeOptions,
				hobbyOptions,
				tagTypes: ['primary', 'warning', 'success', 'error']
			}
		},
		computed: {
			typeText() {
				const target = this.typeOptions.find(item => {
					return item.value === +this.detail.type
				})
				return target.label
			},
			hobbyList() {
				const list = this.hobbyOptions.map(item => {
					return item.label
				})
				return ['', ...list]
			}
		}
	}
</script>

<style>
</style>
