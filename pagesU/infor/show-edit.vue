<template>
	<view class="eidt-user-info pb-100">
		<view class="edit-user-info-form bg-white">
			<u-cell-group>
				<u-cell title="学历">
					<view slot="value">
						<u-switch v-model="userInfo.showEducation"></u-switch>
					</view>
				</u-cell>
				<u-cell title="职业">
					<view slot="value">
						<u-switch v-model="userInfo.showJob"></u-switch>
					</view>
				</u-cell>
				<u-cell title="身高">
					<view slot="value">
						<u-switch v-model="userInfo.showHeight"></u-switch>
					</view>
				</u-cell>
				<u-cell title="发长">
					<view slot="value">
						<u-switch v-model="userInfo.showHair"></u-switch>
					</view>
				</u-cell>
				<u-cell title="星座">
					<view slot="value">
						<u-switch v-model="userInfo.showConstellation"></u-switch>
					</view>
				</u-cell>
				<u-cell title="宠物">
					<view slot="value">
						<u-switch v-model="userInfo.showPet"></u-switch>
					</view>
				</u-cell>
				<u-cell title="出柜情况">
					<view slot="value">
						<u-switch v-model="userInfo.showSituation"></u-switch>
					</view>
				</u-cell>
				<u-cell title="育儿计划">
					<view slot="value">
						<u-switch v-model="userInfo.showChild"></u-switch>
					</view>
				</u-cell>
				<u-cell title="感情状态">
					<view slot="value">
						<u-switch v-model="userInfo.showState"></u-switch>
					</view>
				</u-cell>
				<u-cell title="性格标签">
					<view slot="value">
						<u-switch v-model="userInfo.showCharacters"></u-switch>
					</view>
				</u-cell>
				<u-cell title="爱好标签">
					<view slot="value">
						<u-switch v-model="userInfo.showHobby"></u-switch>
					</view>
				</u-cell>
				<u-cell title="娱乐标签">
					<view slot="value">
						<u-switch v-model="userInfo.showEntertainment"></u-switch>
					</view>
				</u-cell>
				<u-cell title="照片">
					<view slot="value">
						<u-switch v-model="userInfo.showPhoto"></u-switch>
					</view>
				</u-cell>
			</u-cell-group>
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
				userInfo: {
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
				},
			}
		},
		onLoad() {
			this.getDetail()
		},
		methods: {
			getDetail() {
				this.userInfo = {
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
				}
			},
			// 提交按钮
			save() {
				console.log(this.userInfo)
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
				} = this.userInfo
				const params = {
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
