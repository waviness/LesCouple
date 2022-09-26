<template>
	<view class="user-item d-flex mb-2">
		<u-avatar class="user-item__img" :src="data.headerImg" shape="square"></u-avatar>
		<view class="flex-1 d-flex u-flex-column justify-space-between full-height">
			<view class="font-14 clamp-2">{{ data.name }}</view>
			<view class="font-12 color-gray">{{ data.city }} {{ data.year }}年 {{ data.height }}cm {{ data.education }} {{ data.work }}</view>
		</view>
		<view :class="['d-flex color-white', `d-flex bg-type-${data.type}`]">
			<view class="font-14 font-bold">{{ typeText }}</view>
			<view class="font-12">{{ data.level }}</view>
		</view>
	</view>
</template>

<script>
	import {
		typeOptions,
	} from '@/constants/common.js'
	export default {
		name: "UserItem",
		props: {
			data: Object,
		},
		data() {
			return {
				typeOptions,
			}
		},
		computed: {
			typeText() {
				const target = this.typeOptions.find(item => {
					item.value === +this.data.type
					console.log('------', item.value, '====', this.data.type)
				})
				console.log('------', this.typeOptions)
				console.log('------', this.data.type)
				console.log('------', target)
				return target.label
			}
		}
	}
</script>

<style lang="scss">
	.user-item {
		height: 60px;

		&__img {
			width: 60px;
			height: 60px;
		}
	}
</style>
