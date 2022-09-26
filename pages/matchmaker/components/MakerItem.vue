<template>
	<view class="d-flex align-center">
		<view>{{ index }}</view>
		<image :src="data.headerImg"></image>
		<view>
			<view class="">{{ data.name }}</view>
			<view class="">成功数：{{ data.successNum }}对</view>
			<view class="">平均匹配天数：{{ data.averageDay }}天</view>
		</view>
		<view class="">
			<u-rate v-model="data.rate" readonly ></u-rate>
		</view>
	</view>
</template>

<script>
	export default {
		name: "MakerItem",
		props: {
		  index: Number,
		  data: Object,
		},
	}
</script>

<style lang="scss"></style>