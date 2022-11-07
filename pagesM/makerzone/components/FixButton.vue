<template>
	<view class="border-radius bg-primary color-white text-center fix-button" @click="onClick">+</view>
</template>

<script>
	export default {
		name: 'FixButton',
		methods: {
			onClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss">
	.fix-button {
		width: 120rpx;
		height: 120rpx;
		line-height: 104rpx;
		font-size: 80rpx;
	}
</style>
