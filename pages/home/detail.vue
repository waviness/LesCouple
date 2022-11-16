<template>
	<view class="bg-white pb-100">
		<les-user :data="detail" :avatarAuth="true" :showId="true" :autoplay="true" :otherShow="true" />
		<view v-if="searchType === 1" class="mt-4 mx-4">
			<!-- <view v-for="(item, idx) in detail.hobby" :key="idx" class="mr-4">
				<u-tag :text="hobbyList[item]" :type="tagTypes[idx]"></u-tag>
			</view> -->
			<AppTitle :title="'基本信息'" />
			<view v-if="detail.showEducation && detail.education" class="mt-2 color-gray-2 font-15">
				学历：{{ detail.educationName }}</view>
			<view v-if="detail.showJob && detail.job" class="mt-1 color-gray-2 font-15">职业：{{ detail.job }}</view>
			<view v-if="detail.showHeight && detail.height" class="mt-1 color-gray-2 font-15">身高：{{ detail.heightName }}
			</view>
			<view v-if="detail.showHair && detail.hair" class="mt-1 color-gray-2 font-15">发长：{{ detail.hairName }}
			</view>
			<view v-if="detail.showConstellation && detail.constellation" class="mt-1 color-gray-2 font-15">
				星座：{{ detail.constellation }}</view>
			<view v-if="detail.showPet && (detail.pet === 1 || detail.pet === 0)" class="mt-1 color-gray-2 font-15">宠物：{{ detail.pet === 1 ? '有' : detail.pet === 0 ? '无' : '' }}
			</view>
			<view v-if="detail.showSituation && detail.situation" class="mt-1 color-gray-2 font-15">
				出柜情况：{{ detail.situationName }}</view>
			<view v-if="detail.showChild && (detail.child === 1 || detail.child === 0)" class="mt-1 color-gray-2 font-15">
				育儿计划：{{ detail.child === 1 ? '有' : detail.child === 0 ? '无' : '' }}</view>
			<view v-if="detail.showState && detail.state" class="mt-1 color-gray-2 font-15">感情状态：{{ detail.stateName }}
			</view>
			<view v-if="detail.showCharacters && detail.characters" class="mt-1 color-gray-2 font-15">
				性格标签：{{ detail.charactersText }}</view>
			<view v-if="detail.showHobby && detail.hobby" class="mt-1 color-gray-2 font-15">爱好标签：{{ detail.hobbyText }}
			</view>
			<view v-if="detail.showEntertainment && detail.entertainment" class="mt-1 color-gray-2 font-15">
				娱乐标签：{{ detail.entertainmentText }}</view>
		</view>
		<view v-else class="px-4">
			<view class="mb-3">{{ detail.hasMaker ? `红娘微信：${detail.makerWechat}` : `她的微信：${detail.wechat}` }}</view>
			<AppTitle :title="'基本信息'" />
			<u-checkbox-group v-model="checkeds" placement="column">
				<view v-if="detail.education" class="pt-3">
					<u-checkbox name="education" shape="circle" size="20" labelSize="16"
						:label="`学历：${detail.educationName}`">
					</u-checkbox>
				</view>
				<view v-if="detail.job" class="pt-3">
					<u-checkbox name="job" shape="circle" size="20" labelSize="16" :label="`职业：${detail.job}`">
					</u-checkbox>
				</view>
				<view v-if="detail.height" class="pt-3">
					<u-checkbox name="height" shape="circle" size="20" labelSize="16"
						:label="`身高：${detail.heightName}`">
					</u-checkbox>
				</view>
				<view v-if="detail.hair" class="pt-3">
					<u-checkbox name="hair" shape="circle" size="20" labelSize="16" :label="`发长：${detail.hairName}`">
					</u-checkbox>
				</view>
				<view v-if="detail.constellation" class="pt-3">
					<u-checkbox name="constellation" shape="circle" size="20" labelSize="16"
						:label="`星座：${detail.constellation}`">
					</u-checkbox>
				</view>
				<view v-if="detail.pet === 0 || detail.pet === 1" class="pt-3">
					<u-checkbox name="pet" shape="circle" size="20" labelSize="16"
						:label="`宠物：${detail.pet === 1 ? '有' : detail.pet === 0 ? '无' : ''}`">
					</u-checkbox>
				</view>
				<view class="d-flex mt-2 ml-6 color-gray-2 font-16">房产：{{ detail.house === 1 ? '有' : detail.house === 0 ? '无' : '' }}</view>
				<view class="d-flex mt-1 ml-6 color-gray-2 font-16">年收入：{{ detail.incomeName }}</view>
				<view v-if="detail.situation" class="pt-3">
					<u-checkbox name="situation" shape="circle" size="20" labelSize="16"
						:label="`出柜情况：${detail.situationName}`">
					</u-checkbox>
				</view>
				<view v-if="detail.child === 0 || detail.child === 1" class="pt-3">
					<u-checkbox name="child" shape="circle" size="20" labelSize="16"
						:label="`育儿计划：${detail.child === 1 ? '有' : detail.child === 0 ? '无' : ''}`">
					</u-checkbox>
				</view>
				<view v-if="detail.state" class="pt-3 d-flex align-center">
					<u-checkbox name="state" shape="circle" size="20" labelSize="16" disabled>
					</u-checkbox>
					感情状态：{{ detail.stateName }}
				</view>
				<view v-if="detail.characters.length" class="pt-3 d-flex align-center">
					<u-checkbox name="characters" shape="circle" size="20" labelSize="16" disabled>
					</u-checkbox>
					性格标签：{{ detail.charactersText }}
				</view>
				<view v-if="detail.hobby.length" class="pt-3 d-flex align-center">
					<u-checkbox name="hobby" shape="circle" size="20" labelSize="16" disabled>
					</u-checkbox>
					爱好标签：{{ detail.hobbyText }}
				</view>
				<view v-if="detail.entertainment.length" class="pt-3 d-flex align-center">
					<u-checkbox name="entertainment" shape="circle" size="20" labelSize="16" disabled>
					</u-checkbox>
					娱乐标签：{{ detail.entertainmentText }}
				</view>
				<!-- <view class="d-flex mt-1 ml-6 color-gray-2 font-15">感情状态：{{ detail.stateName }}</view>
				<view class="d-flex mt-1 ml-6 color-gray-2 font-15">性格标签：{{ detail.charactersText }}</view>
				<view class="d-flex mt-1 ml-6 color-gray-2 font-15">爱好标签：{{ detail.hobbyText }}</view>
				<view class="d-flex mt-1 ml-6 color-gray-2 font-15">娱乐标签：{{ detail.entertainmentText }}</view> -->
				<view v-if="detail.imgList.length" class="pt-3">
					<u-checkbox name="photo" shape="circle" size="20" labelSize="16" label="照片">
					</u-checkbox>
				</view>
			</u-checkbox-group>
		</view>
		<view class="p-4">
			<!-- <view class="font-18 font-bold text-center">找对象需求</view> -->
			<AppTitle title="找对象需求" />
			<view v-if="detail.intentAttribute.length" class="mt-2 color-gray-2 font-15">属性：{{ detail.typeText }}</view>
			<view v-if="detail.toAgeRange.length" class="mt-1 color-gray-2 font-15">年龄范围：{{ detail.toAgeRange[0] }} ~ {{ detail.toAgeRange[1] }}</view>
			<view v-if="detail.sameCity" class="mt-1 color-gray-2 font-15">恋爱距离：{{ detail.sameCityName }}</view>
			<view v-if="detail.toEducation.length" class="mt-1 color-gray-2 font-15">学历要求：{{ detail.toEducationText }}</view>
			<view v-if="detail.other" class="mt-1 color-gray-2 font-15">其他要求：{{ detail.other }}</view>
		</view>
		<view class="mx-3">
			<u-line></u-line>
		</view>
		<view class="mt-3 px-2 d-flex justify-space-between align-center">
			<view v-if="searchType === 1" style="width: 150px">
				<u-button text="进一步了解" type="error" @click="add"></u-button>
			</view>
			<view v-else class="d-flex" style="width: 200px">
				<u-button text="生成海报" type="error" @click="createPoster"></u-button>
				<u-button text="复制微信" customStyle="marginLeft: 10px" @click="copyWechat"></u-button>
			</view>
			<view class="d-flex align-center" @click="onFollow">
				<u-icon :name="detail.hasfollow ? 'heart-fill' : 'heart'" size="40"
					:color="detail.hasfollow ? '#f56c6c' : '#999'"></u-icon>
				<view class="color-gray-2">{{ detail.hasfollow ? '已关注' : '关注'}}</view>
			</view>
		</view>
		<u-modal :show="modalShow" title="提示" :confirmText="confirmText" :content='modalContent'
			@confirm="onModalConfirm"></u-modal>
		<Poster v-if="showPoster" :show="showPoster" :detail="detail" :checkedObj="checkedObj"
			@close="showPoster = false" />
		<u-loading-page :loading="loading"></u-loading-page>
	</view>
</template>

<script>
	import {
		typeOptions,
		hobbyOptions,
		lesWechatCode,
		charactersOptions,
		educationOptions,
		heightOptions,
		hairOptions,
		incomeOptions,
		situationOptions,
		stateOptions,
		entertainmentOptions,
		sameCityOptions,
	} from '@/constants/common.js'
	import {
		LesUser
	} from './components/User.vue'
	import {
		Poster
	} from './components/Poster.vue'
	import {
		AppTitle
	} from '@/components/AppTitle.vue'
	import {
		findNameInList
	} from '@/utils/common.js'
	export default {
		name: 'UserDetail',
		components: {
			LesUser,
			AppTitle,
			Poster
		},
		data() {
			return {
				searchType: uni.getStorageSync('searchType') || 1, // 1用户搜索 2红娘搜索
				loading: false,
				detail: {},
				typeOptions,
				hobbyOptions,
				lesWechatCode,
				tagTypes: ['primary', 'warning', 'success', 'error'],
				modalShow: false,
				modalContent: '',
				confirmText: '确认',
				modalType: 1,
				showPoster: false,
				checkeds: ['education', 'job', 'height', 'hair', 'constellation', 'pet', 'situation',
					'child', 'photo', 'state', 'characters', 'hobby', 'entertainment'
				]
			}
		},
		onLoad(option) {
			this.getDetail(option.id)
		},
		computed: {
			typeText() {
				const target = this.detail.intentAttribute ? this.typeOptions.filter(item => {
					return this.detail.intentAttribute?.includes(item.value)
				}) : ''
				if (target.length) {
					const result = target.map(ele => {
						return ele.label
					})
					return result
				} else {
					return ''
				}
			},
			hobbyList() {
				const list = this.hobbyOptions.map(item => {
					return item.label
				})
				return ['', ...list]
			},
			checkedObj() {
				return this.checkeds.reduce((obj, item) => ({
					...obj,
					[item]: true
				}), {})
			}
		},
		methods: {
			getDetail() {
				this.loading = true
				setTimeout(() => {
					this.detail = {
						id: '12342356',
						name: '小公子22',
						hasMaker: 0,
						isAuth: 0,
						height: 3,
						bornTime: '1998-10-09',
						level: 15,
						headerImg: 'https://img2.baidu.com/it/u=3895119537,2684520677&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						type: 4,
						hasfollow: 1,
						intentAttribute: [1, 4],
						toEducation: [2, 3],
						education: 3,
						job: '程序员',
						city: '北京市',
						hair: 2,
						constellation: '摩羯座',
						hobby: [1, 3, 5, 6],
						toAgeRange: [20, 30],
						other: '不抽烟，不喝酒',
						sameCity: 1,
						imgList: [
							'https://img2.baidu.com/it/u=351231172,1476228708&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
							'https://img2.baidu.com/it/u=873374196,739480524&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
							'https://img1.baidu.com/it/u=1767030698,911172892&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						],
						makerName: '红娘小公子',
						makerWechat: 'SGHCCC',
						wechat: 'asdffz',
						pet: 1,
						child: '',
						house: 1,
						income: 3,
						situation: 2,
						state: 1,
						characters: [1, 3],
						entertainment: [1, 3, 5, 6],
						showEducation: true,
						showJob: true,
						showHeight: true,
						showHair: true,
						showConstellation: true,
						showPet: true,
						showSituation: true,
						showChild: true,
						showState: true,
						showCharacters: true,
						showHobby: true,
						showEntertainment: true,
						showPhoto: true,
						showOnIndex: true,
					}
					this.detail.educationName = this.detail.education ? findNameInList(this.detail.education,
						educationOptions) : ''
					this.detail.hairName = findNameInList(this.detail.hair, hairOptions)
					this.detail.heightName = findNameInList(this.detail.height, heightOptions)
					this.detail.incomeName = findNameInList(this.detail.income, incomeOptions)
					this.detail.situationName = findNameInList(this.detail.situation, situationOptions)
					this.detail.stateName = findNameInList(this.detail.state, stateOptions)
					this.detail.sameCityName = findNameInList(this.detail.sameCity, sameCityOptions)
					this.detail.charactersText = this.detail.characters.map(item => {
						return findNameInList(item, charactersOptions)
					})
					this.detail.hobbyText = this.detail.hobby.map(item => {
						return findNameInList(item, hobbyOptions)
					})
					this.detail.entertainmentText = this.detail.entertainment.map(item => {
						return findNameInList(item, entertainmentOptions)
					})
					const target = this.typeOptions.filter(item => {
						return this.detail.intentAttribute?.includes(item.value)
					})
					this.detail.typeText = target.length ? target.map(ele => {
						return ele.label
					}) : ''
					this.detail.toEducationText = this.detail.toEducation.map(item => {
						return findNameInList(item, educationOptions)
					})
					this.loading = false
					this.$forceUpdate()
				}, 1500)
			},
			idsToText(target, list) {

			},
			// 关注/取消关注
			onFollow() {
				this.detail.hasfollow = !this.detail.hasfollow
				const content = this.detail.hasfollow ? '已添加关注' : '已取消关注'
				this.$toast(content)
			},
			add() {
				const hasMaker = uni.getStorageSync('detail')?.hasMaker
				if (hasMaker) { // 我有红娘
					this.modalContent = '请右下角关注她后, 请您的红娘匹配'
					this.confirmText = '确认'
					this.modalType = 1
					this.modalShow = true
				} else if (this.detail.hasMaker) { // 我没有，她有红娘
					this.modalContent = '请绑定她的红娘后, 开始您的匹配'
					this.confirmText = '跳转到该红娘的主页'
					this.modalType = 2
					this.modalShow = true
				} else { // 我没有，她没有红娘
					this.modalContent = `请右下角关注她后, 咨询红娘小公子：${this.lesWechatCode}`
					this.confirmText = '复制微信'
					this.modalType = 3
					this.modalShow = true
				}
			},
			onModalConfirm() {
				this.modalShow = false
				if (this.modalType === 2) {
					uni.navigateTo({
						url: `/pages/matchmaker/detail?name=${this.detail.makerName}`
					})
				} else if (this.modalType === 3) {
					uni.setClipboardData({
						data: this.lesWechatCode,
						success: () => {
							this.$toast('复制成功')
						}
					})
				}
			},
			copyWechat() {
				uni.setClipboardData({
					data: this.detail.hasMaker ? this.detail.makerWechat : this.detail.wechat,
					success: () => {
						this.$toast('复制成功')
					}
				})
			},
			createPoster() {
				console.log('brfore', this.checkedObj)
				this.showPoster = true
			}
		}
	}
</script>

<style>
</style>
