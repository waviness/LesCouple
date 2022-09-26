<template>
	<view class="maker-item bg-white d-flex mb-2 p-3" @click="onClick">
		<view
			:class="['maker-item__idx text-center color-white align-self-center', index % 4 === 1 ? 'bg-rank-1' : index % 4 === 2 ? 'bg-rank-2' : index % 4 === 3 ? 'bg-rank-3' : 'bg-rank-4']">
			{{ index + 1 }}</view>
		<image class="maker-item__img mx-2" :src="data.headerImg"></image>
		<view class="flex-1 d-flex u-flex-column justify-space-between full-height">
			<view class="font-14 clamp-2">{{ data.name }}</view>
			<view>
				<view class="font-12 color-gray">成功数：{{ data.successNum }}对</view>
				<view class="font-12 color-gray mt-1">平均匹配天数：{{ data.averageDay }}天</view>
			</view>
		</view>
		<view class="d-flex u-flex-column justify-start">
			<u-rate v-model="data.rate" activeColor="#f9ae3d" :gutter="2" readonly></u-rate>
			<view class="font-15 text-center mt-2">{{ data.rate.toFixed(1) }}</view>
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
		methods: {
			onClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss">
	.maker-item {
		height: 80px;

		&__idx {
			width: 30px;
			height: 30px;
			line-height: 30px;
			border-radius: 50%;
		}

		&__img {
			width: 80px;
			height: 80px;
		}
	}
</style>
