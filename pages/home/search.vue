<template>
	<view class="search bg-white pt-3">
		<!-- <u-tabs :list="tabList" @click="tabClick"></u-tabs> -->
		<view v-if="searchType === 2" class="py-3">
			<u-subsection :list="tabList" :current="current" @change="tabClick"></u-subsection>
		</view>
		<!-- <view class="d-flex justify-space-between align-center" @click="() => { this.moreShow = !this.moreShow }">
			<view>条件搜索</view>
			<view class="d-flex align-center">
				<text class="font-12 color-gray mr-1">{{ moreShow ? '收起' : '展开' }}</text>
				<u-icon :name="moreShow ? 'arrow-up' : 'arrow-down'"></u-icon>
			</view>
		</view> -->
		<view v-show="current === 1" class="mt-4">
			<u-input placeholder="请输入用户ID" border="surround" v-model="userId"></u-input>
		</view>
		<view v-show="current === 0">
			<FormTitle class="d-flex py-3" title="属性" description="多选" />
			<AppCheckBox :value.sync="searchParams.intentAttribute" :options="typeOptions" />
			<FormTitle v-if="searchType === 1" class="d-flex my-3" title="城市" />
			<AppCheckBox v-if="searchType === 1" :value.sync="searchParams.sameCity" :options="sameCityOptions"
				appType="radio" />
			<FormTitle v-if="searchType === 2" class="d-flex my-3" title="省份" />
			<view v-if="searchType === 2" class="d-flex" @click="pickerShow = true">
				<u-input v-model="searchParams.province" border="surround" disabled disabledColor="#ffffff"
					placeholder="请选择省份">
					<template slot="suffix">
						<u-icon slot="right" name="arrow-right"></u-icon>
					</template>
				</u-input>
			</view>
			<FormTitle class="d-flex my-3" title="年龄" />
			<view class="pt-1 pb-3 d-flex align-center">
				<view class="mr-4">{{ searchParams.ageLevel[0] }}</view>
				<cj-slider class="flex-1" v-model="searchParams.ageLevel" :min="18" :max="100" :blockWidth="40"
					activeColor="#2979ff" :moveHeight="88" />
				<view class="ml-4">{{ searchParams.ageLevel[1] }}</view>
			</view>
			<FormTitle class="d-flex my-3" title="学历" description="多选" />
			<AppCheckBox :value.sync="searchParams.education" :options="educationOptions" />
			<FormTitle v-if="searchType === 2" class="d-flex my-3" title="发长" description="多选" />
			<AppCheckBox v-if="searchType === 2" :value.sync="searchParams.hair" :options="hairOptions" />
			<FormTitle class="d-flex my-3" title="性格标签" description="多选" />
			<AppCheckBox :value.sync="searchParams.characters" :options="charactersOptions" />
			<FormTitle class="d-flex my-3" title="爱好标签" description="多选" />
			<AppCheckBox :value.sync="searchParams.hobby" :options="hobbyOptions" />
			<FormTitle class="d-flex my-3" title="娱乐标签" description="多选" />
			<AppCheckBox :value.sync="searchParams.entertainment" :options="entertainmentOptions" />
			<FormTitle v-if="searchType === 2" class="d-flex my-3" title="认证标签" />
			<AppCheckBox v-if="searchType === 2" :value.sync="searchParams.auth" :options="authOptions" />
		</view>
		<view class="search-footer full-width d-flex justify-space-between">
			<u-button text="重置" shape="circle" @reset="reset"></u-button>
			<u-button custom-style="marginLeft: 12px" type="primary" text="搜索" shape="circle" @click="toResultList">
			</u-button>
		</view>

		<u-picker :show="pickerShow" ref="uPicker" @cancel="pickerShow = false" :columns="provinceOptions"
			@confirm="confirmProvince"></u-picker>
	</view>
</template>

<script>
	import cjSlider from '@/components/cj-slider/cj-slider.vue'
	import {
		typeOptions,
		sameCityOptions,
		educationOptions,
		charactersOptions,
		hobbyOptions,
		entertainmentOptions,
		hairOptions,
		provinceOptions
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
				tabList: [{
					name: '条件搜索'
				}, {
					name: '精准搜索'
				}],
				current: 0,
				searchType: uni.getStorageSync('searchType') || 1, // 1用户搜索 2红娘搜索
				typeOptions,
				sameCityOptions,
				educationOptions: [{
					value: 0,
					label: '不限'
				}, ...educationOptions],
				charactersOptions,
				hobbyOptions,
				entertainmentOptions,
				hairOptions: [{
					value: 0,
					label: '不限'
				}, ...hairOptions],
				provinceOptions: [provinceOptions[0]],
				authOptions: [{
					value: 0,
					label: '不限'
				}, {
					value: 1,
					label: '已认证'
				}],
				searchParams: {
					intentAttribute: [],
					province: '',
					ageLevel: [22, 30],
					education: [0],
					hair: [0],
					characters: [],
					hobby: [],
					entertainment: [],
					auth: [0],
					sameCity: [],
				},
				pickerShow: false,
				// moreShow: uni.getStorageSync('searchType') === 1,
				userId: ''
			}
		},
		methods: {
			tabClick(index) {
				this.current = index
			},
			// 省份确认
			confirmProvince(e) {
				this.pickerShow = false
				console.log(e.value)
				this.searchParams.province = e.value[0]
			},
			reset() {
				if (this.current === 1) {
					this.searchParams = {
						intentAttribute: [],
						province: '',
						ageLevel: [22, 30],
						education: [0],
						hair: [0],
						characters: [],
						hobby: [],
						entertainment: [],
						auth: [0],
					}
				} else {
					this.userId = ''
				}
				this.$forceUpdate()
			},
			toResultList() {
				if (this.current === 0) {
					console.log(this.searchParams)
				} else [
					console.log(this.userId)
				]
				uni.navigateTo({
					url: '/pages/home/result'
				})
			},
		}
	}
</script>

<style lang="scss">
	.search {
		padding: 0 40rpx 280rpx 40rpx;
		min-height: 100vh;

		&-footer {
			position: fixed;
			bottom: 0;
			left: 0;
			padding: 80rpx;
			box-sizing: border-box;
		}
	}
</style>
