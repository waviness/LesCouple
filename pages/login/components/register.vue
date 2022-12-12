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
							<TypeCheckBox :value.sync="userInfo.type" :options="typeOptions" type="radio" small />
							<FormTitle class="register__title" title="出生年月日" />
							<u-form-item prop="userInfo.bornTime" borderBottom @click="dateShow = true">
								<u-input v-model="userInfo.bornTime" disabled disabledColor="#ffffff"
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
							<AppCheckBox :value.sync="userInfo.characters" :options="charactersOptions" />
							<FormTitle class="register__title" title="爱好标签" description="多选" />
							<AppCheckBox :value.sync="userInfo.hobby" :options="hobbyOptions" />
							<FormTitle class="register__title" title="娱乐标签" description="多选" />
							<AppCheckBox :value.sync="userInfo.entertainment" :options="entertainmentOptions" />
						</view>
						<view v-if="stepNum === 3">
							<FormTitle class="register__title" title="意向属性" description="多选" />
							<TypeCheckBox :value.sync="userInfo.intentAttribute" :options="typeOptions" around />
							<FormTitle class="register__title" title="意向年龄范围" />
							<view v-if="stepNum === 3" class="pt-1 pb-3 d-flex align-center">
								<view class="mr-4">{{ userInfo.ageLevel[0] }}</view>
								<cj-slider class="flex-1" v-model="userInfo.ageLevel" :min="18" :max="100"
									:blockWidth="40" activeColor="#2979ff" :moveHeight="88" />
								<view class="ml-4">{{ userInfo.ageLevel[1] }}</view>
							</view>
						</view>
					</u-form>
					<view class="mt-5">
						<u-button v-if="stepNum < 3" type="primary" @click="nextStep">
							{{ `继续（${stepNum}/3）` }}
						</u-button>
						<u-button v-else type="primary" open-type="getPhoneNumber"
							@getphonenumber="getPhoneNumber">立即体验
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
		charactersOptions,
		hobbyOptions,
		entertainmentOptions
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
					bornTime: '',
					type: '',
					city: '',
					characters: [],
					hobby: [],
					entertainment: [],
					intentAttribute: [],
					ageLevel: [22, 30]
				},
				typeOptions,
				charactersOptions,
				hobbyOptions,
				provinceOptions,
				cityOptions,
				entertainmentOptions,
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
				this.userInfo.bornTime = formatDate(params.value)
				this.dateShow = false
			},
			getPhoneNumber(e) {
				console.log(e)
				if (!e.detail.code) {
					return
				}
				this.userInfo.code = e.detail.code
				this.userInfo.attribution = this.userInfo.type ? this.userInfo.type[0] : ''
				delete this.userInfo.type
				this.$emit('submit', this.userInfo)
			},
			nextStep() {
				if (this.stepNum === 1) {
					if (!this.userInfo.userName) {
						this.$toast('请输入昵称')
						return
					}
					if (!this.userInfo.type) {
						this.$toast('请选择属性')
						return
					}
					if (!this.userInfo.bornTime) {
						this.$toast('请选择出生年月日')
						return
					}
					if (!this.userInfo.city) {
						this.$toast('请选择城市')
						return
					}
				}
				if (this.stepNum === 2) {
					if (!this.userInfo.characters.length) {
						this.$toast('请至少选择一个性格标签')
						return
					}
					if (!this.userInfo.hobby.length) {
						this.$toast('请至少选择一个爱好标签')
						return
					}
					if (!this.userInfo.entertainment.length) {
						this.$toast('请至少选择一个娱乐标签')
						return
					}
				}
				if (this.stepNum === 3) {
					if (!this.userInfo.intentAttribute.length) {
						this.$toast('请至少选择一个意向属性')
						return
					}
				}
				if (this.stepNum < 3) {
					this.stepNum++
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
