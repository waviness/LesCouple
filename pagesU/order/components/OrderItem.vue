<template>
	<view class="order-item bg-white mt-2 p-3" @click="onClick">
		<view class="d-flex align-center">
			<image class="order-item__icon" src="../../../static/saler.png"></image>
			<view class="font-14 clamp-2 ml-2">{{ data.name }}</view>
		</view>
		<view class="d-flex mt-2">
			<image class="order-item__img" :src="data.headerImg"></image>
			<view class="flex-1 ml-2">
				<view class="font-14 clamp-2 slh">{{ data.title }}</view>
				<view class="font-12 color-gray mt-2">支付时间：{{ data.date }}</view>
				<view class="font-12 color-gray mt-1">总价：￥{{ data.price }}</view>
			</view>
		</view>
		<view class="d-flex justify-flex-end mt-2">
			<view v-if="data.status === 1" style="width: 80px" class="mr-3">
				<u-button size="small" text="取消订单" shape="circle" @click.stop="onButClick(4)"></u-button>
			</view>
			<view style="width: 80px">
				<u-button v-if="data.status === 1" type="warning" size="small" text="立即支付" shape="circle"
					@click.stop="onButClick(1)"></u-button>
				<u-button v-else-if="data.status === 2" type="error" size="small" text="匹配" shape="circle"
					@click.stop="onButClick(2)"></u-button>
				<u-button v-else-if="data.status === 3" type="error" size="small" :plain="true" text="评价" shape="circle"
					@click.stop="onButClick(3)"></u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "OrderItem",
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
