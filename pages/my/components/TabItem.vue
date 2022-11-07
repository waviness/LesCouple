<template>
	<view class="d-flex u-flex-column align-center" @click="onClick">
		<image class="tab-img" :src="`../../../static/${icon}.png`" />
		<view class="font-14 mt-1">{{ label }}</view>
	</view>
</template>

<script>
	export default {
		name: "TabItem",
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
	.tab-img {
		width: 60rpx;
		height: 64rpx;
	}
</style>
