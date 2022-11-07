<template>
	<view class="search">
		<FormTitle class="search__title" title="属性" description="多选" />
		<view class="d-flex flex-wrap">
			<view v-for="(item, index) in typeOptions" :key="index" class="mr-2 mb-2">
				<u-tag :text="item.label" :plain="!item.checked" :name="index" @click="typeClick">
				</u-tag>
			</view>
		</view>
		<FormTitle class="search__title" title="城市" />
		<view class="d-flex flex-wrap">
			<view v-for="(item, index) in sameCityOptions" :key="index" class="mr-2 mb-2">
				<u-tag :text="item.label" :plain="!item.checked" :name="index" @click="sameCityClick">
				</u-tag>
			</view>
		</view>
		<FormTitle class="search__title" title="年龄" />
		<view class="pt-1 pb-3 d-flex align-center">
			<view class="mr-4">{{ ageValue[0] }}</view>
			<cj-slider class="flex-1" v-model="ageValue" :min="18" :max="100" :blockWidth="40" activeColor="#2979ff" />
			<view class="ml-4">{{ ageValue[1] }}</view>
		</view>
		<FormTitle class="search__title" title="学历" />
		<view class="d-flex flex-wrap">
			<view v-for="(item, index) in educationOptions" :key="index" class="mr-2 mb-2">
				<u-tag :text="item.label" :plain="!item.checked" :name="index" @click="educationClick">
				</u-tag>
			</view>
		</view>
		<FormTitle class="search__title" title="性格标签" description="多选" />
		<view class="d-flex flex-wrap">
			<view v-for="(item, index) in natureOptions" :key="index" class="mr-2 mb-2">
				<u-tag :text="item.label" :plain="!item.checked" :name="index" @click="natureClick">
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
				<u-tag :text="item.label" :plain="!item.checked" :name="index" @click="funClick">
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
	import cjSlider from '@/components/cj-slider/cj-slider.vue'
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
			cjSlider,
		},
		data() {
			return {
				typeOptions,
				sameCityOptions,
				educationOptions,
				natureOptions,
				hobbyOptions,
				funOptions,
				searchParams: {}
			}
		},
		methods: {
			typeClick(name) {
				this.typeOptions[name].checked = !this.typeOptions[name].checked
			},
			sameCityClick(name) {
				this.sameCityOptions[name].checked = !this.sameCityOptions[name].checked
			},
			educationClick(name) {
				this.educationOptions[name].checked = !this.educationOptions[name].checked
			},
			natureClick(name) {
				this.natureOptions[name].checked = !this.natureOptions[name].checked
			},
			hobbyClick(name) {
				this.hobbyOptions[name].checked = !this.hobbyOptions[name].checked
			},
			funClick(name) {
				this.funOptions[name].checked = !this.funOptions[name].checked
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
		padding: 0 40rpx 280rpx 40rpx;

		&__title {
			margin: 24rpx 0 16rpx 0;
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
