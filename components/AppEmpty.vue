<template>
	<view>
		<u-empty :mode="mode" :text="text" :marginTop="marginTop"></u-empty>
	</view>
</template>

<script>
	export default {
		name: "AppEmpty",
		props: {
			mode: {
				type: String,
				default: 'data'
			},
			text: {
				type: String,
				default: '暂无数据'
			},
			marginTop: {
				type: String | Number,
				default: 0
			},
		},
	}
</script>

<style lang="scss"></style>
