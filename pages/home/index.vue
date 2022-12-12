<template>
	<view class="pb-100" :style="{paddingTop: navHeight + statusBarHeight + 'px'}">
		<u-navbar>
			<view slot="left">
				<u-search placeholder="属性/年龄/城市" :showAction="false" disabled @click="toSearch"></u-search>
			</view>
		</u-navbar>
		<u-swiper :list="bannerList" :radius="0" indicator indicatorMode="line" circular></u-swiper>
		<!-- <u-tabs :list="tabOptions" lineColor="#f9ae3d" :scrollable="false" @click="tabClick">
		</u-tabs> -->
		<view v-if="status === 'loading' || userList.length" class="mt-2">
			<les-user v-for="(item, index) in userList" :key="index" :data="item" @click="toUserDetail(item)" />
			<u-loadmore :status="status" />
		</view>
		<app-empty v-else :marginTop="40" />
	</view>
</template>

<script>
	import {
		LesUser
	} from './components/User.vue'
	export default {
		name: 'Home',
		components: {
			LesUser
		},
		data() {
			return {
				navHeight: 44,
				statusBarHeight: 0,
				bannerList: [
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
				],
				tabOptions: [{
					name: '全部',
				}, {
					name: '同城',
				}, {
					name: '已认证'
				}],
				current: 0,
				page: 1,
				pageSize: 20,
				totalPage: 0,
				status: 'loading',
				userList: []
			}
		},
		onLoad() {
			const {
				statusBarHeight
			} = uni.getSystemInfoSync()
			this.statusBarHeight = statusBarHeight
			this.getList()
		},
		onReachBottom() {
			if (this.page < this.totalPage) {
				this.status = 'loading'
				this.page++
				this.getList()
			} else {
				this.status = 'nomore'
			}
		},
		methods: {
			tabClick(item) {
				this.current = item.index
				this.page = 1
				this.status = 'loading'
				this.userList = []
				this.getList()
			},
			async getList() {
				const params = {
					pageNo: this.page,
					pageSize: this.pageSize
				}
				const res = await this.$api.getHomeList(params)
				this.userList = res.records
				this.totalPage = res.pages
				if (this.page >= this.totalPage) {
					this.status = 'nomore'
				}
			},
			toUserDetail(data) {
				uni.setStorageSync('searchType', 1)
				uni.navigateTo({
					url: '/pages/home/detail?userId=' + data.userId
				})
			},
			toSearch() {
				uni.setStorageSync('searchType', 1)
				uni.navigateTo({
					url: '/pages/home/search'
				})
			}
		}
	}
</script>

<style lang="scss"></style>
