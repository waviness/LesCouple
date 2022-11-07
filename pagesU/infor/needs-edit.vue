<template>
	<view class="pb-100">
		<view class="bg-white p-3">
			<u-form :model="needsModel" :rules="rules" ref="nForm" labelWidth="90">
				<view class="mt-1 mb-3">
					<FormTitle title="意向属性" description="多选" />
				</view>
				<AppCheckBox :value.sync="model.objInfo.type" :options="typeOptions" />
				<view class="mt-1 mb-3">
					<FormTitle title="年龄范围" />
				</view>
				<view class="pt-1 pb-3 d-flex align-center">
					<view class="mr-4">{{ model.objInfo.ageValue[0] }}</view>
					<cj-slider class="flex-1" v-model="model.objInfo.ageValue" :min="18" :max="100" :blockWidth="40" activeColor="#2979ff" />
					<view class="ml-4">{{ model.objInfo.ageValue[1] }}</view>
				</view>
				<view class="mt-1 mb-3">
					<FormTitle title="恋爱距离" description="多选" />
				</view>
				<AppCheckBox :value.sync="model.objInfo.sameCity" :options="sameCityOptions" />
				<view class="mt-1 mb-3">
					<FormTitle title="学历要求" description="多选" />
				</view>
				<AppCheckBox :value.sync="model.objInfo.education" :options="educationOptions" />
				<view class="mt-1 mb-3">
					<FormTitle title="性格标签" description="多选" />
				</view>
				<AppCheckBox :value.sync="model.objInfo.nature" :options="natureOptions" />
				<view class="mt-1 mb-3">
					<FormTitle title="爱好标签" description="多选" />
				</view>
				<AppCheckBox :value.sync="model.objInfo.hobby" :options="hobbyOptions" />
				<view class="mt-1 mb-3">
					<FormTitle title="娱乐标签" description="多选" />
				</view>
				<AppCheckBox :value.sync="model.objInfo.fun" :options="funOptions" />
				<view class="mt-1 mb-3">
					<FormTitle title="其他需求" />
				</view>
				<u-textarea v-model="model.objInfo.other" placeholder="请输入内容" height="120"></u-textarea>
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
				model: {
					objInfo: {
						attr: '',
						ageValue: []
					},
				},
				rules: {
					'objInfo.attr': {
						type: 'string',
						required: true,
						message: '请选择意向属性',
						trigger: ['blur', 'change']
					},
				}
			}
		},
		onLoad() {
			this.$refs.nForm.setRules(this.rules)
		},
		methods: {
			saveInfor() {
				console.log(this.model)
				this.$refs.nForm.validate().then(res => {
					uni.$u.toast('校验通过')
				}).catch(errors => {
					uni.$u.toast('校验失败')
				})
			}
		}
	}
</script>

<style lang="scss" scoped></style>
