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
				{{ data.name }}
				<view v-if="!avatarAuth"
					:class="['ml-3 font-11 color-white user-item__tag', data.isAuth ? 'bg-rank-1' : 'bg-gray']">
					{{ data.isAuth ? '已认证' : '未认证' }}
				</view>
			</view>
			<view v-if="showId" class="font-12 color-gray">ID：{{ data.id }}</view>
			<view class="font-12 color-gray-2 d-flex align-center">
				<u-icon name="map-fill" color="#72dcdc" size="14"></u-icon>
				<view class="color-gray mr-2">{{ data.city }}</view>
				{{ data.year }}年 {{ data.height }}cm {{ data.education }} {{ data.work }}
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
				return target.label
			}
		}
	}
</script>

<style lang="scss">
	.user-item {
		width: 100%;
		height: 50px;

		&__img {
			width: 50px;
			height: 50px;
			border-radius: 4px;
		}

		&__tag {
			padding: 0 8px;
			border-radius: 10px;

			&--absolute {
				position: absolute;
				bottom: 0;
			}
		}

		&__type {
			border-radius: 12px;
			padding: 2px 6px;
		}
	}
</style>
