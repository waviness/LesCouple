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
                    // badge: {
                    //     value: 5,
                    // }
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
			async getList() {
				console.log(this.current)
				const res = await this.$api.getOrderList({
					pageNo: this.page,
					pageSize: this.pageSize,
					data: {
						userId: uni.getStorageSync('userInfo').userId,
					}
				})
				this.list = res.orderInfo
				this.totalPage = 1 // res.pages
				if (this.page >= this.totalPage) {
					this.status = 'nomore'
				}
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
