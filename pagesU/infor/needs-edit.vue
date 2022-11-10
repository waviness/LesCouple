<template>
	<view class="pb-100">
		<view class="bg-white p-3">
			<u-form ref="nForm" labelWidth="90">
				<view class="mt-1 mb-3">
					<FormTitle title="意向属性" description="多选" />
				</view>
				<AppCheckBox :value.sync="objInfo.toType" :options="typeOptions" />
				<view class="mt-1 mb-3">
					<FormTitle title="年龄范围" />
				</view>
				<view class="pt-1 pb-3 d-flex align-center">
					<view class="mr-4">{{ objInfo.ageValue[0] }}</view>
					<cj-slider class="flex-1" v-model="objInfo.ageValue" :min="18" :max="100" :blockWidth="40"
						activeColor="#2979ff" />
					<view class="ml-4">{{ objInfo.ageValue[1] }}</view>
				</view>
				<view class="mt-1 mb-3">
					<FormTitle title="恋爱距离" description="多选" />
				</view>
				<AppCheckBox :value.sync="objInfo.sameCity" :options="sameCityOptions" />
				<view class="mt-1 mb-3">
					<FormTitle title="学历要求" description="多选" />
				</view>
				<AppCheckBox :value.sync="objInfo.education" :options="educationOptions" />
				<view class="mt-1 mb-3">
					<FormTitle title="性格标签" description="多选" />
				</view>
				<AppCheckBox :value.sync="objInfo.nature" :options="natureOptions" />
				<view class="mt-1 mb-3">
					<FormTitle title="爱好标签" description="多选" />
				</view>
				<AppCheckBox :value.sync="objInfo.hobby" :options="hobbyOptions" />
				<view class="mt-1 mb-3">
					<FormTitle title="娱乐标签" description="多选" />
				</view>
				<AppCheckBox :value.sync="objInfo.fun" :options="funOptions" />
				<view class="mt-1 mb-3">
					<FormTitle title="其他需求" />
				</view>
				<u-textarea v-model="objInfo.other" placeholder="请输入内容" height="120"></u-textarea>
			</u-form>
		</view>
		<view class="m-8">
			<u-button type="primary" text="保存" shape="circle" @click="saveInfor"></u-button>
		</view>
	</view>
</template>

<script>
	import cjSlider from '@/components/cj-slider/cj-slider.vue'
	import {
		typeOptions,
		educationOptions,
		sameCityOptions,
		natureOptions,
		hobbyOptions,
		funOptions
	} from '@/constants/common.js'
	import FormTitle from '@/components/FormTitle.vue'
	import AppCheckBox from '@/components/AppCheckBox.vue'
	export default {
		name: 'NeedsEdit',
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
				objInfo: {
					toType: [],
					ageValue: [22, 30],
					sameCity: '',
					education: '',
					nature: [],
					hobby: [],
					fun: [],
					other: '',
				},
			}
		},
		onLoad() {
			// this.getDetail()
		},
		methods: {
			getDetail() {
				const res = {
					toType: [1],
					ageValue: [25, 40],
					sameCity: 2,
					education: 3,
					nature: [3, 4],
					hobby: [2],
					fun: [1, 2],
					other: '啊飒飒阿萨'
				}
				this.objInfo = Object.assign({}, res)
				this.$forceUpdate()
			},
			saveInfor() {
				console.log(this.objInfo)
				this.$toast('保存成功')
			}
		}
	}
</script>

<style lang="scss" scoped></style>
