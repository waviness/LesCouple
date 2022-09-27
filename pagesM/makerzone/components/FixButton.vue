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
		width: 60px;
		height: 60px;
		line-height: 52px;
		font-size: 40px;
	}
</style>
