<template>
	<view
		:class="[small ? 'type-tag--small' : 'type-tag', active ? `bg-type-${type} border-type-${type}-1 color-white` : `bg-white border-type-${type}-1`]"
		@click="onClick">
		{{ text }}
	</view>
</template>

<script>
	export default {
		name: "TypeTag",
		props: {
			type: {
				type: Number,
				default: 0
			},
			text: {
				type: String,
				default: ''
			},
			active: {
				type: Boolean,
				default: false
			},
			small: {
				type: Boolean,
				default: false
			},
		},
		methods: {
			onClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss">
	.type-tag {
		width: 120rpx;
		height: 120rpx;
		line-height: 120rpx;
		border-radius: 50%;

		&--small {
			width: 80rpx;
			height: 80rpx;
			line-height: 80rpx;
			border-radius: 50%;
		}
	}
</style>
