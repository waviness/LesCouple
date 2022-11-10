<template>
	<view class="bg-white pb-100">
		<les-user :data="detail" :avatarAuth="true" :showId="true" :autoplay="true" :otherShow="true" />
		<view v-if="searchType === 1" class="mt-4 mx-4 d-flex">
			<view v-for="(item, idx) in detail.hobbys" :key="idx" class="mr-4">
				<u-tag :text="hobbyList[item]" :type="tagTypes[idx]"></u-tag>
			</view>
		</view>
		<view v-else class="px-4">
			<view class="mb-3">{{ detail.hasMaker ? `红娘微信：${detail.makerWechat}` : `她的微信：${detail.wechat}` }}</view>
			<AppTitle :title="'基本信息'" />
			<view class="mt-2 color-gray-2 font-14">学历：{{ detail.educationName }}</view>
			<view class="mt-1 color-gray-2 font-14">职业：{{ detail.job }}</view>
			<view class="mt-1 color-gray-2 font-14">身高：{{ detail.heightName }}</view>
			<view class="mt-1 color-gray-2 font-14">发长：{{ detail.hairName }}</view>
			<view class="mt-1 color-gray-2 font-14">星座：{{ detail.constellation }}</view>
			<view class="mt-1 color-gray-2 font-14">宠物：{{ detail.pet ? '有' : '无' }}</view>
			<view class="mt-1 color-gray-2 font-14">房产：{{ detail.house ? '有' : '无' }}</view>
			<view class="mt-1 color-gray-2 font-14">年收入：{{ detail.incomeName }}</view>
			<view class="mt-1 color-gray-2 font-14">出柜情况：{{ detail.situationName }}</view>
			<view class="mt-1 color-gray-2 font-14">育儿计划：{{ detail.child ? '有' : '无' }}</view>
			<view class="mt-1 color-gray-2 font-14">感情状态：{{ detail.stateName }}</view>
			<view class="mt-1 color-gray-2 font-14">性格标签：{{ detail.natureText }}</view>
			<view class="mt-1 color-gray-2 font-14">爱好标签：{{ detail.hobbyText }}</view>
			<view class="mt-1 color-gray-2 font-14">娱乐标签：{{ detail.funText }}</view>
		</view>
		<view class="p-4">
			<!-- <view class="font-18 font-bold text-center">找对象需求</view> -->
			<AppTitle title="找对象需求" />
			<view class="mt-2 color-gray-2 font-14">属性：{{ detail.typeText }}</view>
			<view class="mt-1 color-gray-2 font-14">年龄范围：{{ detail.toAgeRange[0] }} ~ {{ detail.toAgeRange[1] }}</view>
			<view class="mt-1 color-gray-2 font-14">恋爱距离：{{ detail.sameCityName }}</view>
			<view class="mt-1 color-gray-2 font-14">学历要求：{{ detail.toEducationText }}</view>
			<view class="mt-1 color-gray-2 font-14">其他要求：{{ detail.other }}</view>
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
		<u-loading-page :loading="loading"></u-loading-page>
	</view>
</template>

<script>
	import {
		typeOptions,
		hobbyOptions,
		lesWechatCode,
		natureOptions,
		educationOptions,
		heightOptions,
		hairOptions,
		incomeOptions,
		situationOptions,
		stateOptions,
		funOptions,
		sameCityOptions,
	} from '@/constants/common.js'
	import {
		LesUser
	} from './components/User.vue'
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
			AppTitle
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
			}
		},
		onLoad(option) {
			this.getDetail(option.id)
		},
		computed: {
			typeText() {
				const target = this.detail.toType ? this.typeOptions.filter(item => {
					return this.detail.toType?.includes(item.value)
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
						isAuth: 1,
						height: 3,
						birthday: '1998-10-09',
						level: 15,
						headerImg: 'https://img2.baidu.com/it/u=3895119537,2684520677&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						type: 4,
						hasfollow: 1,
						toType: [1, 4],
						toEducation: [2, 3],
						education: 3,
						job: '程序员',
						city: '北京市',
						hair: 2,
						constellation: '摩羯座',
						hobbys: [1, 3, 5, 6],
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
						child: 0,
						house: 1,
						income: 3,
						situation: 2,
						state: 1,
						nature: [1, 3],
						fun: [1, 3, 5, 6],
					}
					this.detail.educationName = findNameInList(this.detail.education, educationOptions)
					this.detail.hairName = findNameInList(this.detail.hair, hairOptions)
					this.detail.heightName = findNameInList(this.detail.height, heightOptions)
					this.detail.incomeName = findNameInList(this.detail.income, incomeOptions)
					this.detail.situationName = findNameInList(this.detail.situation, situationOptions)
					this.detail.stateName = findNameInList(this.detail.state, stateOptions)
					this.detail.sameCityName = findNameInList(this.detail.sameCity, sameCityOptions)
					this.detail.natureText = this.detail.nature.map(item => {
						return findNameInList(item, natureOptions)
					})
					this.detail.hobbyText = this.detail.hobbys.map(item => {
						return findNameInList(item, hobbyOptions)
					})
					this.detail.funText = this.detail.fun.map(item => {
						return findNameInList(item, funOptions)
					})
					const target = this.typeOptions.filter(item => {
						return this.detail.toType?.includes(item.value)
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

			}
		}
	}
</script>

<style>
</style>
