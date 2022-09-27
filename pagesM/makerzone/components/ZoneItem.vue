<template>
	<view class="d-flex u-flex-column align-center p-5 zone-item" @click="onClick">
		<image class="zone-img" :src="`../../../static/${icon}.png`" />
		<view class="font-14 mt-1">{{ label }}</view>
	</view>
</template>

<script>
	export default {
		name: "ZoneItem",
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
	.zone-item {
		background-color: white;
		border-radius: 10px;
		margin: 20px 40px;
	}

	.zone-img {
		width: 40px;
		height: 40px;
	}
</style>
