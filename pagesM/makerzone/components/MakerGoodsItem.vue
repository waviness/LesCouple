<template>
	<view class="order-item bg-white mt-2 p-3" @click="onClick">
		<view class="d-flex">
			<image class="order-item__img" :src="data.headerImg"></image>
			<view class="flex-1 ml-2 slh">
				<view class="d-flex align-center justify-space-between font-14 slh">
					<view class="slh">{{ data.title }}</view>
					<view v-if="data.status === 1" class="font-14 color-rank-1 ml-3">待审核</view>
					<view v-if=" data.status === 2" class="font-14 color-red ml-3">审核未通过</view>
					<view v-if=" data.status === 4" class="font-14 color-gray ml-3">已下架</view>
				</view>
				<!-- <view class="font-14 color-gray mt-1">总价：￥{{ data.price }}</view> -->
			</view>
		</view>
		<view class="d-flex justify-flex-end mt-2">
			<view v-if="data.status === 3" style="width: 80px" class="mr-3">
				<u-button size="small" text="修改" shape="circle" @tap.stop="onButClick('modify')"></u-button>
			</view>
			<view style="width: 80px">
				<u-button v-if="data.status === 3" type="primary" size="small" :plain="true" text="下架" shape="circle"
					@tap.stop="onButClick('undercarriage')"></u-button>
				<u-button v-else-if="data.status === 4" type="error" size="small" :plain="true" text="删除" shape="circle"
					@tap.stop="onButClick('delete')"></u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "MakerGoodsItem",
		props: {
			data: Object,
		},
		methods: {
			onClick() {
				this.$emit('click')
			},
			onButClick(type) {
				console.log('商品操作', type);
				if (type === 'modify') {
					uni.navigateTo({
						url: '/pagesM/makerzone/publish-goods'
					})
				} else if (type === 'delete') {
					this.$toast('删除成功');
				} else if (type === 'undercarriage') {
					this.$toast('下架成功');
				}
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
