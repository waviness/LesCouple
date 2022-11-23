<template>
	<view class="pb-100">
		<view class="bg-white">
			<u-cell-group>
				<u-cell title="学历">
					<view slot="value">
						<u-switch v-model="userShowObj.showEducation"></u-switch>
					</view>
				</u-cell>
				<u-cell title="职业">
					<view slot="value">
						<u-switch v-model="userShowObj.showJob"></u-switch>
					</view>
				</u-cell>
				<u-cell title="身高">
					<view slot="value">
						<u-switch v-model="userShowObj.showHeight"></u-switch>
					</view>
				</u-cell>
				<u-cell title="发长">
					<view slot="value">
						<u-switch v-model="userShowObj.showHair"></u-switch>
					</view>
				</u-cell>
				<u-cell title="星座">
					<view slot="value">
						<u-switch v-model="userShowObj.showConstellation"></u-switch>
					</view>
				</u-cell>
				<u-cell title="宠物">
					<view slot="value">
						<u-switch v-model="userShowObj.showPet"></u-switch>
					</view>
				</u-cell>
				<u-cell title="出柜情况">
					<view slot="value">
						<u-switch v-model="userShowObj.showSituation"></u-switch>
					</view>
				</u-cell>
				<u-cell title="育儿计划">
					<view slot="value">
						<u-switch v-model="userShowObj.showChild"></u-switch>
					</view>
				</u-cell>
				<u-cell title="感情状态">
					<view slot="value">
						<u-switch v-model="userShowObj.showState"></u-switch>
					</view>
				</u-cell>
				<u-cell title="性格标签">
					<view slot="value">
						<u-switch v-model="userShowObj.showCharacters"></u-switch>
					</view>
				</u-cell>
				<u-cell title="爱好标签">
					<view slot="value">
						<u-switch v-model="userShowObj.showHobby"></u-switch>
					</view>
				</u-cell>
				<u-cell title="娱乐标签">
					<view slot="value">
						<u-switch v-model="userShowObj.showEntertainment"></u-switch>
					</view>
				</u-cell>
				<u-cell title="照片">
					<view slot="value">
						<u-switch v-model="userShowObj.showPhoto"></u-switch>
					</view>
				</u-cell>
			</u-cell-group>
		</view>
		<view class="mt-2 bg-white">
			<u-cell title="愿意上主页推荐" label="开启后，个人信息会被推荐上主页">
				<view slot="value">
					<u-switch v-model="userShowObj.showOnIndex"></u-switch>
				</view>
			</u-cell>
			<u-cell title="公开自己的基本资料" label="微信不公开">
				<view slot="value">
					<u-switch v-model="userShowObj.showInfo"></u-switch>
				</view>
			</u-cell>
			<u-cell title="隐藏个人信息" label="开启后，任何人无法查看您的主页，红娘将无法为您服务">
				<view slot="value">
					<u-switch v-model="userShowObj.hideInfo"></u-switch>
				</view>
			</u-cell>
		</view>
		<view class="m-8">
			<u-button type="primary" text="保存" shape="circle" @click="save"></u-button>
		</view>
	</view>
</template>

<script>
	import {
		formatDate,
		findNameInList
	} from '@/utils/common.js'
	export default {
		name: 'PersonalShowEdit',
		data() {
			return {
				userShowObj: {
					showEducation: true,
					showJob: true,
					showHeight: true,
					showHair: true,
					showConstellation: true,
					showPet: true,
					showSituation: false,
					showChild: false,
					showState: false,
					showCharacters: false,
					showHobby: true,
					showEntertainment: true,
					showPhoto: true,
					showOnIndex: true,
					showInfo: true,
					hideInfo: false,
				},
			}
		},
		onLoad() {
			this.getDetail()
		},
		methods: {
			getDetail() {
				this.userShowObj = {
					showEducation: true,
					showJob: true,
					showHeight: true,
					showHair: true,
					showConstellation: true,
					showPet: false,
					showSituation: false,
					showChild: true,
					showState: true,
					showCharacters: false,
					showHobby: true,
					showEntertainment: true,
					showPhoto: true,
					showOnIndex: true,
					showInfo: true,
					hideInfo: false,
				}
			},
			// 提交按钮
			save() {
				console.log(this.userShowObj)
				const {
					showEducation,
					showJob,
					showHeight,
					showHair,
					showConstellation,
					showPet,
					showSituation,
					showChild,
					showState,
					showCharacters,
					showHobby,
					showEntertainment,
					showPhoto,
					showOnIndex
				} = this.userShowObj
				uni.setStorageSync('userShowObj', this.userShowObj)
				this.$toast('保存成功')
			}
		},
	}
</script>

<style lang="scss"></style>
