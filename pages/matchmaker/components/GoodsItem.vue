<template>
	<view class="goods-item bg-white" @click="onClick">
		<image class="goods-item__img" :src="data.headerImg" mode="aspectFill"></image>
		<view class="flex-1 font-14 clamp-2 p-2">{{ data.title }}</view>
		<view class="d-flex justify-space-between align-baseline p-2">
			<view class="color-red">￥{{ data.price }}</view>
			<view class="font-12 color-gray">销量{{ data.saleNum }}</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "GoodsItem",
		props: {
			data: Object,
		},
		methods: {
			onClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.goods-item {
		height: 400rpx;
		border-radius: 20rpx;
		box-shadow: 0 1px 6px 0.5px rgba(209, 207, 207, 0.5);

		&__img {
			width: 100%;
			height: 240rpx;
			border-radius: 20rpx 20rpx 0 0;
		}
	}
</style>
