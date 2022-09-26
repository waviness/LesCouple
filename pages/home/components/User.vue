<template>
	<view class="maker-item bg-white d-flex mb-2 p-3" @click="onClick">
		<user-item :data="data" />
	</view>
</template>

<script>
	export default {
		name: "LesUser",
		props: {
			data: Object,
		},
		methods: {
			onClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss"></style>
