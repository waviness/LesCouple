<template>
	<view>
		<u-overlay :show="show" :duration="400" :z-index="999" :opacity="0.3">
			<u-popup :show="show" :round="10" @close="close" :overlay="false" closeable>
				<view class="register">
					<u-form labelPosition="left" :model="model" :rules="rules" ref="form1">
						<view v-show="stepNum === 1">
							<FormTitle class="register__title" title="昵称" />
							<u-input v-model="model.userInfo.name" placeholder="保存后不可更改" border="bottom"></u-input>
							<FormTitle class="register__title" title="属性" />
							<view class="d-flex flex-wrap">
								<type-tag v-for="(item, index) in typeOptions" :key="index" class="mr-5"
									:type="item.value" :text="item.label" :active.sync="item.checked" small
									@click="typeClick(index)" />
							</view>
							<FormTitle class="register__title" title="出生年月" />
							<u-form-item prop="userInfo.birthday" borderBottom @click="dateShow = true">
								<u-input v-model="model.userInfo.birthday" disabled disabledColor="#ffffff"
									placeholder="请选择出生年月" border="none"></u-input>
								<u-icon slot="right" name="arrow-right"></u-icon>
							</u-form-item>
							<FormTitle class="register__title" title="城市" />
							<u-form-item prop="userInfo.city" borderBottom @click="pickerShow = true">
								<u-input v-model="model.userInfo.city" disabled disabledColor="#ffffff"
									placeholder="请选择城市" border="none"></u-input>
								<u-icon slot="right" name="arrow-right"></u-icon>
							</u-form-item>
							<!-- <uni-data-picker placeholder="请选择地址" popup-title="请选择城市" collection="opendb-city-china"
							field="code as value, name as text" orderby="value asc" :step-searh="true" self-field="code"
							parent-field="parent_code" @change="onchange" @nodeclick="onnodeclick">
						</uni-data-picker> -->
						</view>
						<view v-show="stepNum === 2">
							<FormTitle class="register__title" title="性格标签" description="多选" />
							<view class="d-flex flex-wrap">
								<view v-for="(item, index) in natureOptions" :key="index" class="mb-2 mr-2">
									<u-tag :text="item.label" :plain="!item.checked" :name="index" @click="natureClick">
									</u-tag>
								</view>
							</view>
							<FormTitle class="register__title" title="爱好标签" description="多选" />
							<view class="d-flex flex-wrap">
								<view v-for="(item, index) in hobbyOptions" :key="index" class="mb-2 mr-2">
									<u-tag :text="item.label" :plain="!item.checked" :name="index" @click="hobbyClick">
									</u-tag>
								</view>
							</view>
						</view>
						<view v-show="stepNum === 3">
							<FormTitle class="register__title" title="意向属性" description="多选" />
							<view class="d-flex flex-wrap justify-space-around">
								<type-tag v-for="(item, index) in toTypeOptions" :key="index" :type="item.value"
									:text="item.label" :active.sync="item.checked" @click="toTypeClick(index)" />
							</view>
						</view>
					</u-form>
					<view class="mt-5">
						<u-button type="primary" @click="nextStep">
							{{ stepNum < 3 ? `继续（${stepNum}/3）` : '立即体验' }}
						</u-button>
					</view>
				</view>
			</u-popup>
		</u-overlay>
		<u-datetime-picker :show="dateShow" :zIndex="20000" v-model="userInfo.birthday" mode="year-month"
			@cancel="dateShow = false" @confirm="dateShow = false"></u-datetime-picker>

		<!-- <picker :show="pickerShow" v-model="userInfo.city" mode="region"></picker> -->
	</view>
</template>

<script>
	import {
		typeOptions,
		natureOptions,
		hobbyOptions
	} from '@/constants/common.js'
	import FormTitle from '@/components/FormTitle.vue'
	import TypeTag from '@/components/TypeTag.vue'
	export default {
		name: 'Register',
		components: {
			FormTitle,
			TypeTag,
		},
		data() {
			return {
				show: true,
				stepNum: 1,
				dateShow: false,
				pickerShow: false,
				model: {
					userInfo: {
						name: '',
						birthday: '',
						type: '',
						city: '',

					}
				},
				rules: {
					'userInfo.name': {
						type: 'string',
						required: true,
						message: '请填写昵称',
						trigger: ['blur', 'change']
					},
					'userInfo.birthday': {
						type: 'string',
						max: 1,
						required: true,
						message: '请选择出生年月',
						trigger: ['blur', 'change']
					},
					'userInfo.city': {
						type: 'string',
						max: 1,
						required: true,
						message: '请选择城市',
						trigger: ['blur', 'change']
					},
				},
				typeOptions,
				natureOptions,
				hobbyOptions,
				toTypeOptions: typeOptions
			}
		},
		methods: {
			close() {
				this.$emit('close')
			},
			typeClick(index) {
				this.typeOptions[index].checked = !this.typeOptions[index].checked
				console.log(this.typeOptions)
			},
			natureClick(name) {
				this.natureOptions[name].checked = !this.natureOptions[name].checked
			},
			hobbyClick(name) {
				this.hobbyOptions[name].checked = !this.hobbyOptions[name].checked
			},
			toTypeClick(name) {
				this.toTypeOptions[name].checked = !this.toTypeOptions[name].checked
			},
			nextStep() {
				if (this.stepNum < 3) {
					this.stepNum++
				} else {
					// 提交注册 并 跳转首页
					uni.setStorageSync('userInfo', {
						name: '土方十四郎',
						id: 124234556,
						headerImg: 'https://img1.baidu.com/it/u=346755217,1159990253&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						isAuth: 1
					})
					uni.switchTab({
						url: '/pages/home/index'
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.register {
		margin: 20px;

		&__title {
			margin: 20px 0 10px 0;
			display: flex;
		}
	}
</style>
