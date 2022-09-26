<template>
	<view>
		<view>注册</view>
		<u-button @click="submit">提交</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		methods: {
			submit() {
				uni.redirectTo({
					url: '/pages/home/index'
				})
			}
		}
	}
</script>

<style></style>
