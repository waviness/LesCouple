<template>
	<view class="bg-white pb-4">
		<user-card :data="userInfo" />
		<view class="d-flex justify-space-around mt-4 mb-5">
			<tab-item icon="quanbudingdan" label="全部订单" @click="toOrderList(0)" />
			<tab-item icon="daifukuan" label="待付款" @click="toOrderList(1)" />
			<tab-item icon="daichulihetong" label="待匹配" @click="toOrderList(2)" />
			<tab-item icon="yiwancheng" label="已完成" @click="toOrderList(3)" />
		</view>
		<u-cell-group>
			<u-cell icon="fingerprint" title="实名认证" url="/pages/my/auth" isLink></u-cell>
			<u-cell icon="account" title="我的信息" url="/pagesU/infor/index" isLink></u-cell>
			<u-cell icon="eye" title="看过" url="/pages/my/looked" isLink></u-cell>
			<u-cell icon="heart" title="关注" url="/pages/my/follow" isLink></u-cell>
			<u-cell icon="setting" title="设置" url="/pagesU/settings/index" isLink></u-cell>
		</u-cell-group>
		<view class="footer">
			<u-button type="error" text="红娘地带" shape="circle" icon="plus-people-fill" @click="toMakerZone"></u-button>
		</view>
	</view>
</template>

<script>
	import UserCard from './components/UserCard.vue'
	import TabItem from './components/TabItem.vue'
	export default {
		name: 'UserCenter',
		components: {
			UserCard,
			TabItem
		},
		data() {
			return {
				userInfo: uni.getStorageSync('userInfo')
			}
		},
		methods: {
			toOrderList(type) {
				uni.navigateTo({
					url: '/pagesU/order/index?orderType=' + type
				})
			},
			toMakerZone() {
				uni.navigateTo({
					url: '/pagesM/makerzone/index'
				})
			}
		}
	}
</script>

<style lang="scss">
	.footer {
		margin: 64rpx 200rpx;
	}
</style>
