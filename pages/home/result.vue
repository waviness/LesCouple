<template>
	<view class="pb-100">
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
			getList() {
				setTimeout(() => {
					this.userList = this.userList.concat([{
						id: '12342356',
						name: '小公子',
						isAuth: 1,
						height: 186,
						year: 98,
						level: 13,
						headerImg: 'https://i.keaimeitu.com/uploads/allimg/200504/110822693.jpg',
						type: 1,
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
						name: '小公子22',
						isAuth: 1,
						height: 186,
						year: 98,
						level: 15,
						headerImg: 'https://img2.baidu.com/it/u=3895119537,2684520677&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						type: 4,
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
						year: 98,
						level: 14,
						headerImg: 'https://img1.baidu.com/it/u=346755217,1159990253&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						type: 4,
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
						name: '小公子22',
						height: 186,
						year: 98,
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
						name: '小公子22',
						height: 186,
						year: 98,
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
						year: 98,
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
				uni.setStorageSync('userDetail', data)
				uni.navigateTo({
					url: '/pages/home/detail'
				})
			}
		}
	}
</script>

<style lang="scss"></style>
