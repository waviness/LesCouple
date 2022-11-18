<template>
	<view class="eidt-user-info pb-100">
		<view class="edit-user-info-form bg-white">
			<u-form ref="form1" labelWidth="90">
				<u-form-item prop="userInfo.type" label="属性" borderBottom required @click="showType = true">
					<u-input v-model="userInfo.typeName" disabled placeholder="请选择" disabledColor="transparent"
						border="none" color="#333"></u-input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>
				<u-picker :show="showType" @cancel="showType = false" :columns="columns" keyName="label"
					@confirm="confirmType"></u-picker>
				<u-form-item prop="userInfo.city" label="城市" borderBottom required @click="showCity = true">
					<u-input v-model="userInfo.city" disabled placeholder="请选择" disabledColor="transparent"
						border="none" color="#333"></u-input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>
				<u-picker :show="showCity" ref="uPicker" @cancel="showCity = false" :columns="proColumns"
					@change="changeHandler" @confirm="confirmCity"></u-picker>
				<u-form-item prop="userInfo.bornTime" label="出生" borderBottom required @click="showDate = true">
					<u-input v-model="userInfo.bornTime" disabled placeholder="请选择" disabledColor="transparent"
						border="none" color="#333"></u-input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>
				<u-datetime-picker :show="showDate" @cancel="showDate = false" @confirm="confirmBirth" v-model="value1"
					:minDate="-2209017943000" :maxDate="Number(new Date())" mode="date"></u-datetime-picker>
				<u-form-item prop="userInfo.job" label="职业" borderBottom @click="showJob = true">
					<u-input v-model="userInfo.job" disabled placeholder="请选择" disabledColor="transparent" border="none"
						color="#333"></u-input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>
				<u-picker :show="showJob" @cancel="showJob = false" :columns="jobColumns" keyName="label"
					@confirm="confirmJob">
				</u-picker>
				<u-form-item prop="userInfo.education" label="学历" borderBottom @click="showEducation = true">
					<u-input v-model="userInfo.educationName" disabled placeholder="请选择" disabledColor="transparent"
						border="none" color="#333"></u-input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>
				<u-picker :show="showEducation" @cancel="showEducation = false" :columns="educationColumns"
					keyName="label" @confirm="confirmEducation"></u-picker>
				<u-form-item prop="userInfo.height" label="身高" borderBottom @click="showHeight = true">
					<u-input v-model="userInfo.heightName" disabled placeholder="请选择" disabledColor="transparent"
						border="none" color="#333"></u-input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>
				<u-picker :show="showHeight" @cancel="showHeight = false" :columns="heightColumns" keyName="label"
					@confirm="confirmHeight"></u-picker>
				<u-form-item prop="userInfo.state" label="感情状态" borderBottom @click="showState = true">
					<u-input v-model="userInfo.stateName" disabled placeholder="请选择" disabledColor="transparent"
						border="none" color="#333"></u-input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>
				<u-picker :show="showState" @cancel="showState = false" :columns="stateColumns" keyName="label"
					@confirm="confirmState">
				</u-picker>
				<u-form-item prop="userInfo.hair" label="发长" borderBottom @click="showHair = true">
					<u-input v-model="userInfo.hairName" disabled placeholder="请选择" disabledColor="transparent"
						border="none" color="#333"></u-input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>
				<u-picker :show="showHair" @cancel="showHair = false" :columns="hairColumns" keyName="label"
					@confirm="confirmHair">
				</u-picker>
				<u-form-item prop="userInfo.pet" label="宠物" borderBottom @click="showPet = true">
					<u-input v-model="userInfo.pet" disabled placeholder="请选择" disabledColor="transparent" border="none"
						color="#333"></u-input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>
				<u-picker :show="showPet" @cancel="showPet = false" :columns="petColumns" @confirm="confirmPet">
				</u-picker>
				<u-form-item prop="userInfo.housing" label="房产" borderBottom @click="showHouse = true">
					<u-input v-model="userInfo.housing" disabled placeholder="请选择" disabledColor="transparent"
						border="none" color="#333"></u-input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>
				<u-picker :show="showHouse" @cancel="showHouse = false" :columns="housingColumns" @confirm="confirmHouse">
				</u-picker>
				<u-form-item prop="userInfo.income" label="收入" borderBottom @click="showIncome = true">
					<u-input v-model="userInfo.incomeName" disabled placeholder="请选择" disabledColor="transparent"
						border="none" color="#333"></u-input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>
				<u-picker :show="showIncome" @cancel="showIncome = false" :columns="incomeColumns"
					@confirm="confirmIncome"></u-picker>
				<u-form-item prop="userInfo.constellation" label="星座" borderBottom @click="showConstellation = true">
					<u-input v-model="userInfo.constellation" disabled placeholder="请选择" disabledColor="transparent"
						border="none" color="#333"></u-input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>
				<u-picker :show="showConstellation" @cancel="showConstellation = false" :columns="constellationColumns"
					@confirm="confirmConstellation"></u-picker>
				<u-form-item prop="userInfo.situation" label="出柜情况" borderBottom @click="showSituation = true">
					<u-input v-model="userInfo.situationName" disabled placeholder="请选择" disabledColor="transparent"
						border="none" color="#333"></u-input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>
				<u-picker :show="showSituation" @cancel="showSituation = false" :columns="situationColumns"
					@confirm="confirmSituation"></u-picker>
				<u-form-item prop="userInfo.child" label="育儿计划" borderBottom @click="showChild = true">
					<u-input v-model="userInfo.child" disabled placeholder="请选择" disabledColor="transparent"
						border="none" color="#333"></u-input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>
				<u-picker :show="showChild" @cancel="showChild = false" :columns="childColumns" @confirm="confirmChild">
				</u-picker>
				<view class="my-3">主页照片</view>
				<u-upload :fileList="userInfo.imgList" @afterRead="afterRead" @delete="deletePic" name="3" multiple
					:maxCount="4" uploadIcon="plus" :previewFullImage="true"></u-upload>
			</u-form>
		</view>
		<view class="m-8">
			<u-button type="primary" text="保存" shape="circle" @click="saveInfor"></u-button>
		</view>
		<u-modal :show="showOtherInput" title="填写职业" showCancelButton @cancel="showOtherInput = false"
			@confirm="onJobConfirm">
			<view class="slot-content">
				<u-input placeholder="请输入您的职业" border="surround" v-model="jobValue" />
			</view>
		</u-modal>
	</view>
</template>

<script>
	import {
		typeOptions,
		provinceOptions,
		cityOptions,
		jobOptions,
		educationOptions,
		heightOptions,
		stateOptions,
		hairOptions,
		incomeOptions,
		situationOptions,
		constellationOptions
	} from '@/constants/common.js'
	import {
		formatDate,
		findNameInList
	} from '@/utils/common.js'
	export default {
		name: 'PersonalInfoEdit',
		data() {
			return {
				showDate: false,
				showSituation: false,
				showChild: false,
				showConstellation: false,
				showIncome: false,
				showState: false,
				showHeight: false,
				showEducation: false,
				showHair: false,
				showType: false,
				showJob: false,
				showCity: false,
				showPet: false,
				showHouse: false,
				showOtherInput: false,
				columns: [typeOptions],
				proColumns: provinceOptions,
				columnData: cityOptions,
				jobColumns: [jobOptions],
				stateColumns: [stateOptions],
				educationColumns: [educationOptions],
				heightColumns: [heightOptions],
				hairColumns: [hairOptions],
				incomeColumns: [incomeOptions],
				situationColumns: [situationOptions],
				constellationColumns: [constellationOptions],
				petColumns: [
					['有', '无']
				],
				housingColumns: [
					['有', '无']
				],
				childColumns: [
					['有', '无']
				],
				value1: Number(new Date()),
				userInfo: {
					imgList: [],
				},
				jobValue: '',
			}
		},
		onLoad() {
			this.getDetail()
		},
		methods: {
			async getDetail() {
				const res = await this.$api.getMyUserInfo({
					userId: uni.getStorageSync('userInfo').userId,
				})
				this.userInfo = res
				this.userInfo = {
					type: 1,
					job: '其他|XXX',
					education: 3,
					state: 1,
					hair: 1,
					pet: 1,
					constellation: '摩羯座',
					situation: 2,
					child: 0,
					imgList: [{
							url: 'https://img2.baidu.com/it/u=351231172,1476228708&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						},
						{
							url: 'https://img2.baidu.com/it/u=873374196,739480524&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
						},
						{
							url: 'https://img1.baidu.com/it/u=1767030698,911172892&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
						}
					],
				}
				this.value1 = Number(new Date(this.userInfo.bornTime))
				this.userInfo.pet = this.userInfo.pet === 1 ? '有' : this.userInfo.pet === 0 ? '无' : ''
				this.userInfo.housing = this.userInfo.housing === 1 ? '有' : this.userInfo.housing === 0 ? '无' : ''
				this.userInfo.child = this.userInfo.child === 1 ? '有' : this.userInfo.child === 0 ? '无' : ''
				this.userInfo.typeName = findNameInList(this.userInfo.type, typeOptions)
				this.userInfo.educationName = findNameInList(this.userInfo.education, educationOptions)
				this.userInfo.heightName = findNameInList(this.userInfo.height, heightOptions)
				this.userInfo.stateName = findNameInList(this.userInfo.state, stateOptions)
				this.userInfo.hairName = findNameInList(this.userInfo.hair, hairOptions)
				this.userInfo.incomeName = findNameInList(this.userInfo.income, incomeOptions)
				this.userInfo.situationName = findNameInList(this.userInfo.situation, situationOptions)
			},
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
					picker.setColumnValues(1, this.columnData[index])
				}
			},
			// 城市确认
			confirmCity(e) {
				this.showCity = false
				this.userInfo.city = e.value
			},
			// 属性确认
			confirmType(e) {
				this.showType = false
				this.userInfo.type = e.value[0].value
				this.userInfo.typeName = e.value[0].label
			},
			// 出生日期确认
			confirmBirth({
				value
			}) {
				this.showDate = false
				this.userInfo.bornTime = formatDate(value)
				const date = new Date(value)
				const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
				const D = date.getDate() + ' '
				const constellation = this.getAstro(Number(M.split('-')[0]), D)
				this.userInfo.constellation = constellation
			},
			// 职业确认
			confirmJob(e) {
				if (e.value[0] === '其他') {
					this.jobValue = ''
					this.showOtherInput = true
				} else {
					this.showJob = false
					this.userInfo.job = e.value[0].label
				}
			},
			onJobConfirm() {
				this.showOtherInput = false
				this.userInfo.job = `其他|${this.jobValue}`
				this.showJob = false
			},
			// 学历确认
			confirmEducation(e) {
				this.showEducation = false
				this.userInfo.education = e.value[0].value
				this.userInfo.educationName = e.value[0].label
			},
			// 身高确认
			confirmHeight(e) {
				this.showHeight = false
				this.userInfo.height = e.value[0].value
				this.userInfo.heightName = e.value[0].label
			},
			// 感情状态确认
			confirmState(e) {
				this.showState = false
				this.userInfo.state = e.value[0].value
				this.userInfo.stateName = e.value[0].label
			},
			// 发长确认
			confirmHair(e) {
				this.showHair = false
				this.userInfo.hair = e.value[0].value
				this.userInfo.hairName = e.value[0].label
			},
			// 宠物确认
			confirmPet(e) {
				this.showPet = false
				this.userInfo.pet = e.value[0]
			},
			// 房产确认
			confirmHouse(e) {
				this.showHouse = false
				this.userInfo.housing = e.value[0]
			},
			// 收入确认
			confirmIncome(e) {
				this.showIncome = false
				this.userInfo.income = e.value[0].value
				this.userInfo.incomeName = e.value[0].label
			},
			// 星座确认
			confirmConstellation(e) {
				this.showConstellation = false
				this.userInfo.constellation = e.value[0]
			},
			// 出柜情况确认
			confirmSituation(e) {
				this.showSituation = false
				this.userInfo.situation = e.value[0].value
				this.userInfo.situationName = e.value[0].label
			},
			// 育儿计划确认
			confirmChild(e) {
				this.showChild = false
				this.userInfo.child = e.value[0]
			},
			// 删除照片
			deletePic(event) {
				this.userInfo.imgList.splice(event.index, 1)
			},
			// 新增图片
			async afterRead(event) {
				// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this.userInfo.imgList.length
				lists.map((item) => {
					this.userInfo.imgList.push({
						...item,
						status: 'uploading',
						message: '上传中'
					})
				})
				for (let i = 0; i < lists.length; i++) {
					const result = await this.uploadFilePromise(lists[i].url)
					let item = this.userInfo.imgList[fileListLen]
					this.userInfo.imgList.splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '',
						url: result
					}))
					fileListLen++
				}
			},
			uploadFilePromise(url) {
				return new Promise((resolve, reject) => {
					let a = uni.uploadFile({
						url: 'http://192.168.2.21:7001/upload', // 仅为示例，非真实的接口地址
						filePath: url,
						name: 'file',
						formData: {
							user: 'test'
						},
						success: (res) => {
							setTimeout(() => {
								resolve(res.data.data)
							}, 1000)
						}
					})
				})
			},
			// 星座换算
			getAstro(m, d) {
				return "魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(m * 2 - (d < "102223444433".charAt(m - 1) - -19) * 2, 2) + '座';
			},
			// 提交按钮
			saveInfor() {
				if (!this.userInfo.type) {
					this.$toast('请选择属性')
					return
				}
				if (!this.userInfo.city) {
					this.$toast('请选择城市')
					return
				}
				if (!this.userInfo.bornTime) {
					this.$toast('请选择出生年月日')
					return
				}
				console.log(this.userInfo)
				const {
					type,
					city,
					bornTime,
					job,
					education,
					height,
					state,
					hair,
					income,
					constellation,
					situation,
					imgList,
				} = this.userInfo
				const pet = this.userInfo.pet === '有' ? 1 : this.userInfo.pet === '无' ? 0 : ''
				const housing = this.userInfo.housing === '有' ? 1 : this.userInfo.housing === '无' ? 0 : ''
				const child = this.userInfo.child === '有' ? 1 : this.userInfo.child === '无' ? 0 : ''
				const params = {
					type,
					city,
					bornTime,
					job,
					education,
					height,
					state,
					hair,
					income,
					constellation,
					situation,
					imgList,
					pet,
					housing,
					child,
				}
				console.log(params)
				this.$toast('保存成功')
			}
		},
	}
</script>

<style lang="scss">
	.eidt-user-info {
		display: flex;
		flex-direction: column;

		.edit-user-info-form {
			padding: 0px 30rpx;
		}
	}
</style>
