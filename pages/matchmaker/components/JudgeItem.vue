<template>
	<view class="judge-item bg-white p-3" @click="onClick">
		<view class="d-flex">
			<image class="judge-item__img" :src="data.headerImg"></image>
			<view class="ml-2 flex-1">
				<view class="font-14 clamp-2 mb-1">{{ data.name }}</view>
				<u-rate v-model="data.rate" activeColor="#f9ae3d" :gutter="2" readonly></u-rate>
			</view>
			<view class="font-12 color-gray">{{ data.time }}</view>
		</view>
		<view class="mt-2 color-gray-2 font-14">{{ data.content }}</view>
	</view>
</template>

<script>
	export default {
		name: "JudgeItem",
		props: {
			index: Number,
			data: Object,
		},
		methods: {
			onClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss">
	.judge-item {
		
		&__img {
			width: 80rpx;
			height: 80rpx;
		}
	}
</style>
