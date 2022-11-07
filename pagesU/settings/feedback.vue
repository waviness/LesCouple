<template>
	<view class="full-width">
		<view class="bg-white p-1">
			<u-textarea v-model="keywords" placeholder="欢迎您提出宝贵的建议" border="none" height="200" :maxlength="200" count ></u-textarea>
		</view>
		<view class="m-8">
			<u-button text="提交" type="primary" shape="circle" @click="toSubClick"></u-button>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Feedback',
		data() {
			return{
				keywords:''
			}
		},
		methods: {
			// 提交按钮
			toSubClick() {
				console.log(this.keywords)
				this.$toast('提交反馈成功')
				this.keywords = ''
			}
		}
		
	}
</script>

<style lang="scss"></style>

