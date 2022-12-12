<!-- 我看过的 -->
<template>
	<view>
		<view class="bg-white">
			<u-tabs :list="tabOptions" :scrollable="false" @click="tabClick">
			</u-tabs>
		</view>
		<view v-if="status === 'loading' || userList.length">
			<view class="bg-white p-3 mt-1" v-for="(item, index) in userList" :key="index" @click="toUserDetail(item)">
				<user-item :data="item" :avatarAuth="true" :lookType="current+1" />
			</view>
			<u-loadmore :status="status" />
		</view>
		<app-empty v-else :marginTop="40" />
	</view>
</template>

<script>
	import {
		UserItem
	} from '@/components/UserItem.vue'
	export default {
		name: 'UserLooked',
		components: {
			UserItem
		},
		data() {
			return {
				tabOptions: [{
					name: '谁看过我',
				}, {
					name: '我看过谁',
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
					pageSize: this.pageSize,
					userId: uni.getStorageSync('userInfo').userId,
				}
				const res = this.current === 1 ? await this.$api.getBrowsedUser(params) : await this.$api
					.getBrowseUser(params)
				this.userList = res.records
				this.totalPage = res.pages
				if (this.page >= this.totalPage) {
					this.status = 'nomore'
				}
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
