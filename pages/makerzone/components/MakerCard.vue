<template>
	<view class="maker-card p-3 d-flex">
		<image class="maker-card__img" :src="data.headerImg" />
		<view class="ml-2 d-flex u-flex-column justify-space-between">
			<view class="font-18 color-white">{{ data.name }}</view>
			<view class="font-14 color-white bg-rank-1 mt-1 maker-card__tag">注册时间：{{ data.time }}</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "MakerCard",
		props: {
			data: Object
		},
	}
</script>

<style lang="scss">
	.maker-card {
		background-color: #31aefc;
		
		&__img {
			width: 80px;
			height: 80px;
		}
		
		&__tag {
			border-radius: 12px;
			padding: 3px 12px;
		}
	}
</style>
