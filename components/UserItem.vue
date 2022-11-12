<template>
	<view class="user-item d-flex align-center">
		<view class="position-relative text-center">
			<image class="user-item__img" :src="data.headerImg" />
			<view v-if="avatarAuth"
				:class="['font-11 color-white user-item__tag user-item__tag--absolute', data.isAuth ? 'bg-rank-1' : 'bg-gray']">
				{{ data.isAuth ? '已认证' : '未认证' }}
			</view>
		</view>
		<view class="flex-1 d-flex u-flex-column justify-space-between full-height ml-2">
			<view class="font-14 d-flex align-center">
				<view>{{ data.name }}</view>
				<view v-if="!avatarAuth"
					:class="['ml-3 font-11 color-white user-item__tag', data.isAuth ? 'bg-rank-1' : 'bg-gray']">
					{{ data.isAuth ? '已认证' : '未认证' }}
				</view>
				<view v-if="lookType" class="color-gray font-12 ml-3">
					{{ lookType === 2 ? `${data.time}前看过她` : `${data.time}前看过你` }}</view>
			</view>
			<view v-if="showId" class="font-12 color-gray">ID：{{ data.id }}</view>
			<view class="font-12 color-gray-2 d-flex align-center">
				<u-icon name="map-fill" color="#72dcdc" size="14"></u-icon>
				<view class="color-gray mr-2">{{ data.city }}</view>
				<text v-if="!otherShow">{{ data.bornTime ? data.bornTime.slice(2, 4) : '' }}年</text><text
					v-else>{{ bornTimeText }}</text> <text v-show="otherShow">{{ data.height }}cm
					{{ data.education }} {{ data.work }}</text>
			</view>
		</view>
		<view :class="['user-item__type d-flex align-center color-white', `d-flex bg-type-${data.type}`]">
			<view class="font-15 font-bold">{{ typeText }}</view>
			<view class="font-12">{{ data.level }}</view>
		</view>
	</view>
</template>

<script>
	import {
		typeOptions,
	} from '@/constants/common.js'
	import {
		formatDateText,
	} from '@/utils/common.js'
	export default {
		name: "UserItem",
		props: {
			data: Object,
			avatarAuth: {
				type: Boolean,
				default: false
			}, // 认证标识是否在头像上
			showId: {
				type: Boolean,
				default: false
			}, // 是否显示ID
			lookType: {
				type: Number,
				default: 0
			}, // 1看过我 2看过她
			otherShow: {
				type: Boolean,
				default: false
			}, // 是否显示其他信息
		},
		data() {
			return {
				typeOptions,
			}
		},
		computed: {
			typeText() {
				const target = this.typeOptions.find(item => {
					return item.value === +this.data.type
				})
				return target?.label
			},
			bornTimeText() {
				return formatDateText(this.data.bornTime || '')
			}
		}
	}
</script>

<style lang="scss">
	.user-item {
		width: 100%;
		height: 100rpx;

		&__img {
			width: 100rpx;
			height: 100rpx;
			border-radius: 8rpx;
		}

		&__tag {
			padding: 0 16rpx;
			border-radius: 20rpx;

			&--absolute {
				position: absolute;
				bottom: 0;
			}
		}

		&__type {
			border-radius: 24rpx;
			padding: 4rpx 12rpx;
		}
	}
</style>
