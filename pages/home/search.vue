<template>
	<view class="search">
		<FormTitle class="d-flex my-3" title="属性" description="多选" />
		<AppCheckBox :value.sync="searchParams.toType" :options="typeOptions" />
		<FormTitle class="d-flex my-3" title="城市" />
		<AppCheckBox :value.sync="searchParams.sameCity" :options="sameCityOptions" appType="radio" />
		<FormTitle class="d-flex my-3" title="年龄" />
		<view class="pt-1 pb-3 d-flex align-center">
			<view class="mr-4">{{ searchParams.ageValue[0] }}</view>
			<cj-slider class="flex-1" v-model="searchParams.ageValue" :min="18" :max="100" :blockWidth="40"
				activeColor="#2979ff" />
			<view class="ml-4">{{ searchParams.ageValue[1] }}</view>
		</view>
		<FormTitle class="d-flex my-3" title="学历" description="多选" />
		<AppCheckBox :value.sync="searchParams.education" :options="educationOptions" />
		<FormTitle class="d-flex my-3" title="性格标签" description="多选" />
		<AppCheckBox :value.sync="searchParams.nature" :options="natureOptions" />
		<FormTitle class="d-flex my-3" title="爱好标签" description="多选" />
		<AppCheckBox :value.sync="searchParams.hobby" :options="hobbyOptions" />
		<FormTitle class="d-flex my-3" title="娱乐标签" description="多选" />
		<AppCheckBox :value.sync="searchParams.fun" :options="funOptions" />
		<view class="search-footer full-width d-flex justify-space-between">
			<u-button text="重置" shape="circle" @reset="reset"></u-button>
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
	import AppCheckBox from '@/components/AppCheckBox.vue'
	export default {
		name: 'HomeSearch',
		components: {
			FormTitle,
			AppCheckBox,
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
				searchParams: {
					toType: [],
					sameCity: [],
					ageValue: [22, 30],
					education: [],
					nature: [],
					hobby: [],
					fun: [],
				}
			}
		},
		methods: {
			reset() {
				this.searchParams = {
					toType: [],
					sameCity: [],
					ageValue: [22, 30],
					education: [],
					nature: [],
					hobby: [],
					fun: [],
				}
				this.$forceUpdate()
			},
			toResultList() {
				console.log(this.searchParams)
				// uni.navigateTo({
				// 	url: '/pages/home/result'
				// })
			}
		}
	}
</script>

<style lang="scss">
	.search {
		padding: 0 40rpx 280rpx 40rpx;

		&-footer {
			position: fixed;
			bottom: 0;
			left: 0;
			padding: 80rpx;
			box-sizing: border-box;
		}
	}
</style>
