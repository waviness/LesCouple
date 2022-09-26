<template>
	<view class="search">
		<FormTitle class="search__title" title="爱好标签" description="多选" />
		<view class="d-flex flex-wrap justify-space-between">
			<view v-for="(item, index) in hobbyOptions" :key="index">
				<u-tag :text="item.label" :plain="!item.checked" :name="index" @click="hobbyClick">
				</u-tag>
			</view>
		</view>
		<view class="search-footer full-width d-flex justify-space-between">
			<u-button text="重置" shape="circle"></u-button>
			<u-button custom-style="marginLeft: 12px" type="primary" text="搜索" shape="circle" @click="toResultList"></u-button>
		</view>
	</view>
</template>

<script>
	import {
		typeOptions,
		natureOptions,
		hobbyOptions
	} from '@/constants/common.js'
	import FormTitle from '@/components/FormTitle.vue'
	export default {
		name: 'HomeSearch',
		components: {
			FormTitle,
		},
		data() {
			return {
				hobbyOptions,
			}
		},
		methods: {
			hobbyClick(name) {
				this.hobbyOptions[name].checked = !this.hobbyOptions[name].checked
			},
			toResultList() {
				uni.navigateTo({
					url: '/pages/home/result'
				})
			}
		}
	}
</script>

<style lang="scss">
	.search {
		padding: 20px;
	
		&__title {
			margin: 20px 0 10px 0;
			display: flex;
		}
		
		&-footer {
			position: fixed;
			bottom: 0;
			left: 0;
			padding: 20px;
			box-sizing: border-box;
		}
	}
</style>
