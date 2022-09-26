<template>
	<view class="form-item d-flex align-center">
		<view>{{ title }}</view>
		<view v-if="description" class="form-item__desc">（{{ description }})</view>
	</view>
</template>

<script>
	export default {
		name: "LesItem",
		props: {
		  index: Number,
		  name: String,
		  successNum: Number,
		  averageDay: Number,
		  rate: Number,
		},
	}
</script>

<style lang="scss">
.form-item {
	&__title {
		
	}
	&__desc {
		color: $uni-text-color-grey;
		font-size: 12px;
	}
}
</style>