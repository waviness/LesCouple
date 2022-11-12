<template>
	<view class="pb-100" :style="{paddingTop: navHeight + statusBarHeight + 'px'}">
		<u-navbar>
			<view slot="left">
				<u-search placeholder="属性/年龄/城市" :showAction="false" disabled @click="toSearch"></u-search>
			</view>
		</u-navbar>
		<u-swiper :list="bannerList" :radius="0" indicator indicatorMode="line" circular></u-swiper>
		<u-tabs :list="tabOptions" lineColor="#f9ae3d" :scrollable="false" @click="tabClick">
		</u-tabs>
		<view v-if="status === 'loading' || userList.length">
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
			getList() {
				console.log(this.current)
				setTimeout(() => {
					this.userList = this.userList.concat([{
						id: '12342356',
						name: '小公子',
						isAuth: 1,
						height: 186,
						bornTime: '1998-10-09',
						level: 13,
						headerImg: 'https://i.keaimeitu.com/uploads/allimg/200504/110822693.jpg',
						type: 1,
						education: '本科',
						work: '程序员',
						city: '北京市',
						hobbys: [1, 3, 5, 6],
						toAgeRange: [20, 30],
						imgList: [
							'https://img2.baidu.com/it/u=351231172,1476228708&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
							'https://img2.baidu.com/it/u=873374196,739480524&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
							'https://img1.baidu.com/it/u=1767030698,911172892&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						],
					}, {
						id: '12342356',
						name: '小公子22',
						isAuth: 1,
						height: 186,
						bornTime: '1998-10-09',
						level: 15,
						headerImg: 'https://img2.baidu.com/it/u=3895119537,2684520677&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						type: 4,
						education: '本科',
						work: '程序员',
						city: '北京市',
						hobbys: [1, 3, 5, 6],
						toAgeRange: [20, 30],
						imgList: [
							'https://img2.baidu.com/it/u=351231172,1476228708&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
							'https://img2.baidu.com/it/u=873374196,739480524&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
							'https://img1.baidu.com/it/u=1767030698,911172892&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						],
					}, {
						id: '12342356',
						name: '小公子33',
						height: 186,
						bornTime: '1998-10-09',
						level: 14,
						headerImg: 'https://img1.baidu.com/it/u=346755217,1159990253&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						type: 4,
						education: '本科',
						work: '程序员',
						city: '北京市',
						hobbys: [1, 3, 5, 6],
						toAgeRange: [20, 30],
						imgList: [
							'https://img2.baidu.com/it/u=351231172,1476228708&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
							'https://img2.baidu.com/it/u=873374196,739480524&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
							'https://img1.baidu.com/it/u=1767030698,911172892&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						],
					}, {
						id: '12342356',
						name: '小公子22',
						height: 186,
						bornTime: '1998-10-09',
						level: 15,
						headerImg: 'https://img2.baidu.com/it/u=3895119537,2684520677&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						type: 2,
						education: '本科',
						work: '程序员',
						city: '北京市',
						hobbys: [1, 3, 5, 6],
						toAgeRange: [20, 30],
						imgList: [
							'https://img2.baidu.com/it/u=351231172,1476228708&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
							'https://img2.baidu.com/it/u=873374196,739480524&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
							'https://img1.baidu.com/it/u=1767030698,911172892&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						],
					}, {
						id: '12342356',
						name: '小公子22',
						height: 186,
						bornTime: '1998-10-09',
						level: 15,
						headerImg: 'https://img2.baidu.com/it/u=3895119537,2684520677&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						type: 2,
						education: '本科',
						work: '程序员',
						city: '北京市',
						imgList: [
							'https://img2.baidu.com/it/u=351231172,1476228708&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
							'https://img2.baidu.com/it/u=873374196,739480524&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
							'https://img1.baidu.com/it/u=1767030698,911172892&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						],
					}, {
						id: '12342356',
						name: '小公子33',
						height: 186,
						bornTime: '1998-10-09',
						level: 14,
						headerImg: 'https://img1.baidu.com/it/u=346755217,1159990253&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						type: 3,
						education: '本科',
						work: '程序员',
						city: '北京市',
						imgList: [
							'https://img2.baidu.com/it/u=351231172,1476228708&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
							'https://img2.baidu.com/it/u=873374196,739480524&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
							'https://img1.baidu.com/it/u=1767030698,911172892&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						],
					}])
					this.totalPage = 2
					if (this.page > 2) {
						this.status = 'nomore'
					}
				}, 500)
			},
			toUserDetail(data) {
				uni.setStorageSync('searchType', 1)
				uni.navigateTo({
					url: '/pages/home/detail?id=' + data.id
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
