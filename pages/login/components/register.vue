<template>
	<view>
		<u-overlay :show="show" :duration="400" :z-index="999" :opacity="0.3">
			<u-popup :show="show" :round="10" @close="close" :overlay="false" closeable>
				<view v-if="stepNum > 1" class="mt-4 ml-3 d-flex align-center color-gray" @click="stepNum--">
					<u-icon name="arrow-left" size="18" color="#999999" class="mr-1"></u-icon>上一步
				</view>
				<view class="register">
					<u-form labelPosition="left" :model="model" ref="form1">
						<view v-show="stepNum === 1">
							<FormTitle class="register__title" title="昵称" />
							<u-input v-model="userInfo.userName" placeholder="保存后不可更改" border="bottom"></u-input>
							<FormTitle class="register__title" title="属性" />
							<TypeCheckBox :value.sync="userInfo.toType" :options="typeOptions" around />
							<TypeCheckBox :value.sync="userInfo.type" :options="typeOptions" type="radio" small />
							<FormTitle class="register__title" title="出生年月日" />
							<u-form-item prop="userInfo.birthday" borderBottom @click="dateShow = true">
								<u-input v-model="userInfo.birthday" disabled disabledColor="#ffffff"
									placeholder="请选择出生年月日" border="none"></u-input>
								<u-icon slot="right" name="arrow-right"></u-icon>
							</u-form-item>
							<FormTitle class="register__title" title="城市" />
							<u-form-item prop="userInfo.city" borderBottom @click="pickerShow = true">
								<u-input v-model="userInfo.city" disabled disabledColor="#ffffff" placeholder="请选择城市"
									border="none" @click="pickerShow = true"></u-input>
								<u-icon slot="right" name="arrow-right"></u-icon>
							</u-form-item>
						</view>
						<view v-show="stepNum === 2">
							<FormTitle class="register__title" title="性格标签" description="多选" />
							<AppCheckBox :value.sync="userInfo.nature" :options="natureOptions" />
							<FormTitle class="register__title" title="爱好标签" description="多选" />
							<AppCheckBox :value.sync="userInfo.hobby" :options="hobbyOptions" />
						</view>
						<view v-if="stepNum === 3">
							<FormTitle class="register__title" title="意向属性" description="多选" />
							<TypeCheckBox :value.sync="userInfo.toType" :options="typeOptions" around />
							<FormTitle class="register__title" title="意向年龄范围" />
							<view v-if="stepNum === 3" class="pt-1 pb-3 d-flex align-center">
								<view class="mr-4">{{ userInfo.ageValue[0] }}</view>
								<cj-slider class="flex-1" v-model="userInfo.ageValue" :min="18" :max="100"
									:blockWidth="40" activeColor="#2979ff" :moveHeight="88" />
								<view class="ml-4">{{ userInfo.ageValue[1] }}</view>
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

		<u-datetime-picker :show="dateShow" :zIndex="20000" :minDate="minDate" :maxDate="maxDate" v-model="dateValue"
			mode="date" @cancel="dateShow = false" @confirm="onDateConfirm">
		</u-datetime-picker>

		<u-picker :show="pickerShow" ref="uPicker" @cancel="pickerShow = false" :columns="provinceOptions"
			@change="changeHandler" @confirm="confirmCity"></u-picker>
	</view>
</template>

<script>
	import cjSlider from '@/components/cj-slider/cj-slider.vue'
	import {
		provinceOptions,
		cityOptions,
		typeOptions,
		natureOptions,
		hobbyOptions
	} from '@/constants/common.js'
	import {
		formatDate
	} from '@/utils/common.js'
	import FormTitle from '@/components/FormTitle.vue'
	import AppCheckBox from '@/components/AppCheckBox.vue'
	import TypeCheckBox from './TypeCheckBox.vue'
	export default {
		name: 'Register',
		components: {
			FormTitle,
			AppCheckBox,
			TypeCheckBox,
			cjSlider
		},
		data() {
			return {
				show: true,
				stepNum: 1,
				minDate: Date.parse(new Date('1900-01-01')),
				maxDate: Date.parse(new Date()),
				dateShow: false,
				dateValue: Number(new Date()),
				pickerShow: false,
				userInfo: {
					userName: '',
					birthday: '',
					type: '',
					city: '',
					nature: [],
					hobby: [],
					toType: [],
					ageValue: [22, 30]
				},
				typeOptions,
				natureOptions,
				hobbyOptions,
				provinceOptions,
				cityOptions,
			}
		},
		methods: {
			// 改变省市联动
			changeHandler(e) {
				const {
					columnIndex,
					value,
					values, // values为当前变化列的数组内容
					index,
					// 微信小程序无法将picker实例传出来，只能通过ref操作
					picker = this.$refs.uPicker
				} = e
				// 当第一列值发生变化时，变化第二列(后一列)对应的选项
				if (columnIndex === 0) {
					// picker为选择器this实例，变化第二列对应的选项
					picker.setColumnValues(1, this.cityOptions[index])
				}
			},
			// 城市确认
			confirmCity(e) {
				this.pickerShow = false
				this.userInfo.city = e.value
			},
			close() {
				this.$emit('close')
			},
			onDateConfirm(params) {
				this.userInfo.birthday = formatDate(params.value)
				this.dateShow = false
			},
			nextStep() {
				console.log(this.userInfo)
				if (this.stepNum === 1) {
					if (!this.userInfo.userName) {
						this.$toast('请输入昵称')
						return
					}
					if (!this.userInfo.type) {
						this.$toast('请选择属性')
						return
					}
					if (!this.userInfo.birthday) {
						this.$toast('请选择出生年月日')
						return
					}
					if (!this.userInfo.city) {
						this.$toast('请选择城市')
						return
					}
				}
				if (this.stepNum === 2) {
					if (!this.userInfo.nature.length) {
						this.$toast('请至少选择一个性格标签')
						return
					}
					if (!this.userInfo.hobby.length) {
						this.$toast('请至少选择一个爱好标签')
						return
					}
				}
				if (this.stepNum === 3) {
					if (!this.userInfo.toType.length) {
						this.$toast('请至少选择一个意向属性')
						return
					}
				}
				if (this.stepNum < 3) {
					this.stepNum++
				} else {
					console.log(this.userInfo)
					// 提交注册 并 完成登录 跳转首页
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
