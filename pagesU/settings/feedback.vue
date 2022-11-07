<template>
	<view class="feedback">
		<view class="feedbackTextarea">
			<u--textarea v-model="value2" placeholder="欢迎您提出宝贵的建议" count ></u--textarea>
		</view>
		<view class="subBtn">
			<u-button type="success" text="提交"  size="large" @click="toSubClick"></u-button>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Feedback',
		data() {
			return{
				value2:''
			}
		},
		methods: {
			// 提交按钮
			toSubClick() {}
		}
		
	}
</script>

<style lang="scss">
	.feedback{
		padding-top: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center; 
		.feedbackTextarea {
			width: 80%;
		}
		.subBtn {
			width: 50%;
			padding-top: 40px;
		}
	}
</style>

