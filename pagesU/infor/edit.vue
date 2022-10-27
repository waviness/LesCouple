<template>
	<view class="eidt-user-info">
		<view class="eidt-user-info-header">
			<u-button type="success" text="保存" shape="circle" size="small" @click="toResultList"></u-button>
		</view>
		<view class="edit-user-info-form">
			<u-form labelPosition="top" :model="model1" :rules="rules" ref="form1" labelWidth="90">
				<u-form-item prop="userInfo.attr" label="属性" borderBottom required>
					<u-input v-model="model1.userInfo.attr" disabled disabledColor="transparent"
					border="none" color="#333"></u-input>
					<u-icon slot="right" label="选择" labelColor="#69BBDC" @click="showType = true"></u-icon>
				</u-form-item>
				<u-picker :show="showType" @cancel="showType = false" :columns="columns" keyName="label" @confirm="confirmType"></u-picker>
				<u-form-item prop="userInfo.city" label="城市" borderBottom required>
					<u-input v-model="model1.userInfo.city" disabled disabledColor="transparent"
					border="none" color="#333"></u-input>
					<u-icon slot="right" label="选择" labelColor="#69BBDC" @click="showCity = true"></u-icon>
				</u-form-item>
				<u-picker :show="showCity" ref="uPicker" @cancel="showCity = false" :columns="proColumns" @change="changeHandler"
				@confirm="confirmCity"
				></u-picker>
				<u-form-item prop="userInfo.birth" label="出生" borderBottom required>
					<u-input v-model="model1.userInfo.birth" disabled disabledColor="transparent"
					border="none" color="#333"></u-input>
					<u-icon slot="right" label="选择" labelColor="#69BBDC" @click="showDate = true"></u-icon>
				</u-form-item>
				<u-datetime-picker
				                :show="showDate"
								@cancel="showDate = false"
								@confirm="confirmBirth"
				                v-model="value1"
								:minDate="-2209017943000" 
								:maxDate="Number(new Date())"
				                mode="date"
				></u-datetime-picker>
				<u-form-item prop="userInfo.job" label="职业" borderBottom>
					<u-input v-model="model1.userInfo.job" disabled disabledColor="transparent"
					border="none" color="#333"></u-input>
					<u-icon slot="right" label="选择" labelColor="#69BBDC" @click="showJob = true"></u-icon>
				</u-form-item>
				<u-picker :show="showJob" @cancel="showJob = false" :columns="jobColumns"
				@confirm="confirmJob"
				></u-picker>
				<u-form-item prop="userInfo.education" label="学历" borderBottom>
					<u-input v-model="model1.userInfo.education" disabled disabledColor="transparent"
					border="none" color="#333"></u-input>
					<u-icon slot="right" label="选择" labelColor="#69BBDC" @click="showEducation = true"></u-icon>
				</u-form-item>
				<u-picker :show="showEducation" @cancel="showEducation = false" :columns="educationColumns"
				@confirm="confirmEducation"
				></u-picker>
				<u-form-item prop="userInfo.height" label="身高">
					<u-input v-model="model1.userInfo.height" disabled disabledColor="transparent"
					border="none" color="#333"></u-input>
					<u-icon slot="right" label="选择" labelColor="#69BBDC" @click="showHeight = true"></u-icon>
				</u-form-item>
				<u-picker :show="showHeight" @cancel="showHeight = false" :columns="heightColumns"
				@confirm="confirmHeight"
				></u-picker>
				<view class="bg_image" >主页照片
					<u-upload
						:fileList="imgList"
						@afterRead="afterRead"
						@delete="deletePic"
						name="3"
						multiple
						:maxCount="4"
						:previewFullImage="true"
					></u-upload>
				</view>
				<u-form-item prop="userInfo.state" label="感情状态" borderBottom>
					<u-input v-model="model1.userInfo.state" disabled disabledColor="transparent"
					border="none" color="#333"></u-input>
					<u-icon slot="right" label="选择" labelColor="#69BBDC" @click="showState = true"></u-icon>
				</u-form-item>
				<u-picker :show="showState" @cancel="showState = false" :columns="stateColumns"
				@confirm="confirmState"
				></u-picker>
				<u-form-item prop="userInfo.hair" label="发长" borderBottom>
					<u-input v-model="model1.userInfo.hair" disabled disabledColor="transparent"
					border="none" color="#333"></u-input>
					<u-icon slot="right" label="选择" labelColor="#69BBDC" @click="showHair = true"></u-icon>
				</u-form-item>
				<u-picker :show="showHair" @cancel="showHair = false" :columns="hairColumns"
				@confirm="confirmHair"
				></u-picker>
				<u-form-item prop="userInfo.pet" label="宠物" borderBottom>
					<u-input v-model="model1.userInfo.pet" disabled disabledColor="transparent"
					border="none" color="#333"></u-input>
					<u-icon slot="right" label="选择" labelColor="#69BBDC" @click="showPet = true"></u-icon>
				</u-form-item>
				<u-picker :show="showPet" @cancel="showPet = false" :columns="petColumns"
				@confirm="confirmPet"
				></u-picker>
				<u-form-item prop="userInfo.house" label="房产" borderBottom>
					<u-input v-model="model1.userInfo.house" disabled disabledColor="transparent"
					border="none" color="#333"></u-input>
					<u-icon slot="right" label="选择" labelColor="#69BBDC" @click="showHouse = true"></u-icon>
				</u-form-item>
				<u-picker :show="showHouse" @cancel="showHouse = false" :columns="houseColumns"
				@confirm="confirmHouse"
				></u-picker>
				<u-form-item prop="userInfo.income" label="收入" borderBottom>
					<u-input v-model="model1.userInfo.income" disabled disabledColor="transparent"
					border="none" color="#333"></u-input>
					<u-icon slot="right" label="选择" labelColor="#69BBDC" @click="showIncome = true"></u-icon>
				</u-form-item>
				<u-picker :show="showIncome" @cancel="showIncome = false" :columns="incomeColumns"
				@confirm="confirmIncome"
				></u-picker>
				<u-form-item prop="userInfo.constellation" label="星座" borderBottom>
					<u-input v-model="model1.userInfo.constellation" disabled disabledColor="transparent"
					border="none" color="#333"></u-input>
					<u-icon slot="right" label="选择" labelColor="#69BBDC" @click="showConstellation = true"></u-icon>
				</u-form-item>
				<u-picker :show="showConstellation" @cancel="showConstellation = false" :columns="constellationColumns"
				@confirm="confirmConstellation"
				></u-picker>
				<u-form-item prop="userInfo.situation" label="出柜情况" borderBottom>
					<u-input v-model="model1.userInfo.situation" disabled disabledColor="transparent"
					border="none" color="#333"></u-input>
					<u-icon slot="right" label="选择" labelColor="#69BBDC" @click="showSituation = true"></u-icon>
				</u-form-item>
				<u-picker :show="showSituation" @cancel="showSituation = false" :columns="situationColumns"
				@confirm="confirmSituation"
				></u-picker>
				<u-form-item prop="userInfo.child" label="育儿计划" borderBottom>
					<u-input v-model="model1.userInfo.child" disabled disabledColor="transparent"
					border="none" color="#333"></u-input>
					<u-icon slot="right" label="选择" labelColor="#69BBDC" @click="showChild = true"></u-icon>
				</u-form-item>
				<u-picker :show="showChild" @cancel="showChild = false" :columns="childColumns"
				@confirm="confirmChild"
				></u-picker>
			</u-form>
		</view>
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
		situationOptions
	} from '@/constants/common.js'
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
				columns: [typeOptions],
				proColumns: provinceOptions,
				columnData: cityOptions,
				jobColumns: jobOptions,
				stateColumns: stateOptions,
				educationColumns: educationOptions,
				heightColumns: heightOptions,
				hairColumns: hairOptions,
				incomeColumns: incomeOptions,
				situationColumns: situationOptions,
				petColumns: [['有', '无']],
				houseColumns: [['有', '无']],
				childColumns: [['有', '无']],
				value1: Number(new Date()),
				imgList: [
					{
						url: 'https://img2.baidu.com/it/u=351231172,1476228708&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
					},
					{url: 'https://img2.baidu.com/it/u=873374196,739480524&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'},
					{url: 'https://img1.baidu.com/it/u=1767030698,911172892&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'}
				],
				model1: {
					userInfo: {
						attr: 'T',
						city: '上海',
						birth: '1999-11-26',
						job: '经商',
						education: '本科',
						height: '170-180',
						state: '单身',
						hair: '短发',
						pet: '有',
						house: '有',
						income: '10w',
						constellation: '摩羯座',
						situation: '仅朋友知道',
						child: '有'
					},
				},
				rules: {
					'userInfo.attr': {
						type: 'string',
						required: true,
						message: '请选择属性',
						trigger: ['blur', 'change']
					}
				}
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
						picker.setColumnValues(1, this.columnData[index])
					}
			},
			// 城市确认
			confirmCity(e) {
				this.showCity = false
				this.model1.userInfo.city = e.value
			},
			// 属性确认
			confirmType(e) {
				this.showType= false
				this.model1.userInfo.attr = e.value[0].label
			},
			// 出生日期确认
			confirmBirth(e) {
				this.showDate= false
				this.model1.userInfo.birth = this.timestampToTime(e.value)
			},
			// 职业确认
			confirmJob(e) {
				this.showJob= false
				this.model1.userInfo.job = e.value
			},
			// 学历确认
			confirmEducation(e) {
				this.showEducation= false
				this.model1.userInfo.education = e.value
			},
			// 学历确认
			confirmHeight(e) {
				this.showHeight= false
				this.model1.userInfo.height = e.value
			},
			// 感情状态确认
			confirmState(e) {
				this.showState= false
				this.model1.userInfo.state = e.value
			},
			// 发长确认
			confirmHair(e) {
				this.showHair= false
				this.model1.userInfo.hair = e.value
			},
			// 宠物确认
			confirmPet(e) {
				this.showPet= false
				this.model1.userInfo.pet = e.value
			},
			// 房产确认
			confirmHouse(e) {
				this.showHouse= false
				this.model1.userInfo.house = e.value
			},
			// 收入确认
			confirmIncome(e) {
				this.showIncome= false
				this.model1.userInfo.income = e.value
			},
			// 星座确认
			confirmConstellation(e) {
				this.showIncome= false
				this.model1.userInfo.constellation = e.value
			},
			// 出柜情况确认
			confirmSituation(e) {
				this.showSituation= false
				this.model1.userInfo.situation = e.value
			},
			// 育儿计划确认
			confirmChild(e) {
				this.showChild= false
				this.model1.userInfo.child = e.value
			},
			// 时间戳转换
			timestampToTime(timestamp) {
				let date = new Date(timestamp)
				let Y = date.getFullYear() + '-'
				let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'
				let D = date.getDate() + ' '
				return Y + M + D
			},
			// 删除照片
			deletePic(event) {
				this.imgList.splice(event.index, 1)
			},
			// 新增图片
			async afterRead(event) {
				// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this.imgList.length
				lists.map((item) => {
					this.imgList.push({
						...item,
						status: 'uploading',
						message: '上传中'
					})
				})
				for (let i = 0; i < lists.length; i++) {
					const result = await this.uploadFilePromise(lists[i].url)
					let item = this.imgList[fileListLen]
					this.imgList.splice(fileListLen, 1, Object.assign(item, {
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
			getAstro(m ,d) {
				return "白羊金牛双子巨蟹狮子处女天秤天蝎射手摩羯水瓶双鱼".substr(m*2-(d<"102223444433".charAt(m-1)- -19)*2,2)
			}
		},
		onReady() {
		    this.$refs.form1.setRules(this.rules)
		}
	}
</script>

<style lang="scss">
	.eidt-user-info {
		display: flex;
		flex-direction: column;
		&-header {
			right: 0px;
			width: 80px;
			padding: 10px;
			margin-left: auto;
		}
		.edit-user-info-form {
			padding: 0px 15px;
			.bg_image {
				background-color: #eee;
				padding-top: 10px;
			}
		}
	}
	
</style>
