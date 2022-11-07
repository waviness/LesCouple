<template>
	<view class="search pb-100">
		<FormTitle class="search__title" title="属性" description="多选" />
		<view class="d-flex flex-wrap">
			<view v-for="(item, index) in typeOptions" :key="index" class="mr-2 mb-2">
				<u-tag :text="item.label" :plain="!item.checked" :name="index" @click="hobbyClick">
				</u-tag>
			</view>
		</view>
		<FormTitle class="search__title" title="城市" />
		<view class="d-flex flex-wrap">
			<view v-for="(item, index) in sameCityOptions" :key="index" class="mr-2 mb-2">
				<u-tag :text="item.label" :plain="!item.checked" :name="index" @click="hobbyClick">
				</u-tag>
			</view>
		</view>
		<FormTitle class="search__title" title="年龄" />
		<FormTitle class="search__title" title="学历" />
		<view class="d-flex flex-wrap">
			<view v-for="(item, index) in educationOptions" :key="index" class="mr-2 mb-2">
				<u-tag :text="item.label" :plain="!item.checked" :name="index" @click="hobbyClick">
				</u-tag>
			</view>
		</view>
		<FormTitle class="search__title" title="性格标签" description="多选" />
		<view class="d-flex flex-wrap">
			<view v-for="(item, index) in natureOptions" :key="index" class="mr-2 mb-2">
				<u-tag :text="item.label" :plain="!item.checked" :name="index" @click="hobbyClick">
				</u-tag>
			</view>
		</view>
		<FormTitle class="search__title" title="爱好标签" description="多选" />
		<view class="d-flex flex-wrap">
			<view v-for="(item, index) in hobbyOptions" :key="index" class="mr-2 mb-2">
				<u-tag :text="item.label" :plain="!item.checked" :name="index" @click="hobbyClick">
				</u-tag>
			</view>
		</view>
		<FormTitle class="search__title" title="娱乐标签" description="多选" />
		<view class="d-flex flex-wrap">
			<view v-for="(item, index) in funOptions" :key="index" class="mr-2 mb-2">
				<u-tag :text="item.label" :plain="!item.checked" :name="index" @click="hobbyClick">
				</u-tag>
			</view>
		</view>
		<view class="search-footer full-width d-flex justify-space-between">
			<u-button text="重置" shape="circle"></u-button>
			<u-button custom-style="marginLeft: 12px" type="primary" text="搜索" shape="circle" @click="toResultList">
			</u-button>
		</view>
	</view>
</template>

<script>
	import {
		typeOptions,
		sameCityOptions,
		educationOptions,
		natureOptions,
		hobbyOptions,
		funOptions
	} from '@/constants/common.js'
	import FormTitle from '@/components/FormTitle.vue'
	export default {
		name: 'HomeSearch',
		components: {
			FormTitle,
		},
		data() {
			return {
				typeOptions,
				sameCityOptions,
				educationOptions,
				natureOptions,
				hobbyOptions,
				funOptions
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
		padding: 40rpx;

		&__title {
			margin: 40rpx 0 20rpx 0;
			display: flex;
		}

		&-footer {
			position: fixed;
			bottom: 0;
			left: 0;
			padding: 80rpx;
			box-sizing: border-box;
		}
	}
</style>
