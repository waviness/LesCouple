<template>
	<view class="order-item bg-white mt-2 p-3" @click="onClick">
		<view class="d-flex justify-space-between">
			<view class="font-14">订单号：{{ data.orderno }}</view>
			<view v-if="data.status === 1" class="font-14 color-red">待付款</view>
			<view v-if=" data.status === 3" class="font-14 color-rank-1">待评价</view>
		</view>
		<view class="d-flex mt-2">
			<image class="order-item__img" :src="data.headerImg"></image>
			<view class="flex-1 ml-2">
				<view class="d-flex align-center font-14">
					<view class="slh">{{ data.title }}</view>
					<view class="ml-3">￥{{ data.price }}</view>
				</view>
				<view class="font-12 color-gray mt-3">买家：{{ data.buyer }}</view>
				<view class="font-12 color-gray mt-1">ID：{{ data.id }}</view>
			</view>
		</view>
		<view class="d-flex justify-flex-end mt-2">
			<view style="width: 80px">
				<u-button v-if="data.status === 2" type="error" size="small" text="匹配" shape="circle"
					@click.stop="onButClick(2)"></u-button>
				<u-button v-else-if="data.status === 4" type="error" size="small" :plain="true" text="回复" shape="circle"
					@click.stop="onButClick(4)"></u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "MakerOrderItem",
		props: {
			data: Object,
		},
		methods: {
			onClick() {
				this.$emit('click')
			},
			onButClick(type) {
				console.log(type)
			}
		}
	}
</script>

<style lang="scss">
	.order-item {

		&__icon {
			width: 36rpx;
			height: 36rpx;
		}

		&__img {
			width: 140rpx;
			height: 140rpx;
		}
	}
</style>
