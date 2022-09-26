<template>
	<view>
		<u-swiper :list="bannerList" :radius="0" indicator indicatorMode="line" circular></u-swiper>
		<u-tabs class="bg-white" :list="tabOptions" lineColor="#f9ae3d" :scrollable="false" @click="tabClick">
		</u-tabs>
		<view v-if="status === 'loading' || userList.length">
			<les-user v-for="(item, index) in userList" :key="index" :index="index" :data="item"
				@click="toUserDetail" />
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
						name: '小公子',
						height: 186,
						year: 98,
						level: 13,
						headerImg: 'https://i.keaimeitu.com/uploads/allimg/200504/110822693.jpg',
						type: 1,
						education: '本科',
						work: '程序员',
						city: '北京市',
					}, {
						name: '小公子22',
						height: 186,
						year: 98,
						level: 15,
						headerImg: 'https://img2.baidu.com/it/u=3895119537,2684520677&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						type: 4,
						education: '本科',
						work: '程序员',
						city: '北京市',
					}, {
						name: '小公子33',
						height: 186,
						year: 98,
						level: 14,
						headerImg: 'https://img1.baidu.com/it/u=346755217,1159990253&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						type: 4,
						education: '本科',
						work: '程序员',
						city: '北京市',
					}, {
						name: '小公子22',
						height: 186,
						year: 98,
						level: 15,
						headerImg: 'https://img2.baidu.com/it/u=3895119537,2684520677&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						type: 2,
						education: '本科',
						work: '程序员',
						city: '北京市',
					}, {
						name: '小公子33',
						height: 186,
						year: 98,
						level: 14,
						headerImg: 'https://img1.baidu.com/it/u=346755217,1159990253&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						type: 3,
						education: '本科',
						work: '程序员',
						city: '北京市',
					}])
					this.totalPage = 2
					if (this.page > 2) {
						this.status = 'nomore'
					}
				}, 500)
			},
			toUserDetail() {
				uni.navigateTo({
					url: '/pages/home/detail'
				})
			}
		}
	}
</script>

<style></style>
