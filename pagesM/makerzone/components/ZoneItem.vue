<template>
	<view class="d-flex u-flex-column align-center p-5 zone-item" @click="onClick">
		<view :class="'zone-img iconfont icon-' + icon"></view>
		<view class="font-14 mt-1">{{ label }}</view>
	</view>
</template>

<script>
	export default {
		name: "ZoneItem",
		props: {
			icon: String,
			label: String,
		},
		methods: {
			onClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss">
	.zone-item {
		background-color: white;
		border-radius: 20rpx;
		margin: 40rpx 80rpx;
	}

	.zone-img {
		font-size: 80rpx;
		color: #515151;
	}
</style>
