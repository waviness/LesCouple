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
		width: 60px;
		height: 60px;
		line-height: 60px;
		border-radius: 50%;

		&--small {
			width: 40px;
			height: 40px;
			line-height: 40px;
			border-radius: 50%;
		}
	}
</style>
