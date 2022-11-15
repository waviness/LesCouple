<template>
	<view class="pb-100">
		<u-sticky>
			<view class="bg-white">
				<u-tabs :list="tabOptions" :scrollable="false" @click="tabClick">
				</u-tabs>
			</view>
		</u-sticky>
		<view v-if="status === 'loading' || list.length">
			<OrderItem v-for="(item, index) in list" :key="index" :index="index" :data="item"
				@click="toDetail(item)" />
			<u-loadmore :status="status" />
		</view>
		<app-empty v-else :marginTop="40" />
	</view>
</template>

<script>
	import {
		OrderItem
	} from './components/OrderItem.vue'
	export default {
		name: 'UserOrder',
		components: {
			OrderItem
		},
		data() {
			return {
				tabOptions: [{
					name: '全部',
				// }, {
				// 	name: '待付款',
    //                 badge: {
    //                     value: 5,
    //                 }
				}, {
					name: '待匹配',
                    badge: {
                        value: 5,
                    }
				}, {
					name: '已完成'
				}],
				current: 0,
				page: 1,
				pageSize: 20,
				totalPage: 0,
				status: 'loading',
				list: []
			}
		},
		onLoad(option) {
			this.current = +option.orderType
			console.log(option)
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
				this.list = []
				this.getList()
			},
			getList() {
				console.log(this.current)
				setTimeout(() => {
					this.list = this.list.concat([{
						name: '红娘小公子',
						title: '一对一匹配【标准版】',
						date: '2022-09-27 09:49',
						price: 22,
						rate: 3.0,
						status: 2, // 1待付款 2待匹配 3待评价 4已完成
						headerImg: 'https://i.keaimeitu.com/uploads/allimg/200504/110822693.jpg'
					}, {
						name: '红娘小公子22',
						title: '一对一匹配【标准版】',
						date: '2022-09-27 09:49',
						price: 22,
						rate: 5.0,
						status: 3,
						headerImg: 'https://img2.baidu.com/it/u=3895119537,2684520677&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
					}, {
						name: '红娘小公子33',
						title: '一对一匹配【标准版】',
						date: '2022-09-27 09:49',
						price: 22,
						rate: 4.0,
						status: 2,
						headerImg: 'https://img1.baidu.com/it/u=346755217,1159990253&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
					}, {
						name: '红娘小公子22',
						title: '一对一匹配【标准版】',
						date: '2022-09-27 09:49',
						price: 22,
						rate: 5.0,
						status: 4,
						headerImg: 'https://img2.baidu.com/it/u=3895119537,2684520677&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
					}, {
						name: '红娘小公子33',
						title: '一对一匹配【标准版】',
						date: '2022-09-27 09:49',
						price: 22,
						rate: 4.0,
						status: 3,
						headerImg: 'https://img1.baidu.com/it/u=346755217,1159990253&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
					}])
					this.totalPage = 2
					if (this.page > 2) {
						this.status = 'nomore'
					}
				}, 500)
			},
			toDetail(data) {
				uni.setStorageSync('orderDetail', data)
				uni.navigateTo({
					url: '/pagesU/order/detail'
				})
			}
		},
	}
</script>

<style></style>
