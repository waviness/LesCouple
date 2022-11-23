<template>
	<view class="pb-100">
		<u-sticky>
			<view class="bg-white">
				<u-tabs :list="tabOptions" :scrollable="false" @click="tabClick">
				</u-tabs>
			</view>
		</u-sticky>
		<view v-if="status === 'loading' || userList.length">
			<CustItem v-for="(item, index) in userList" :key="index" :data="item" :index="index"
				@click="toUserDetail(item)" @butClick="onButClick" />
			<u-loadmore :status="status" />
		</view>
		<app-empty v-else :marginTop="40" />
		<u-modal :show="modalShow" title="提示" confirmText="确认" content='是否确认已添加完客户微信' showCancelButton
			@confirm="onModalConfirm" @cancel="modalShow = false">
		</u-modal>
	</view>
</template>

<script>
	import CustItem from './components/CustItem.vue'
	export default {
		name: 'Customer',
		components: {
			CustItem
		},
		data() {
			return {
				tabOptions: [{
					name: '待匹配',
				}, {
					name: '已匹配'
				}],
				current: 0,
				page: 1,
				pageSize: 20,
				totalPage: 0,
				status: 'loading',
				userList: [],
				modalShow: false,
				curIndex: -1,
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
				this.list = []
				this.getList()
			},
			getList() {
				setTimeout(() => {
					this.userList = this.userList.concat([{
						id: 'LCP12342356',
						name: '小公子',
						isAuth: 1,
						height: 186,
						bornTime: '1998-10-09',
						day: 13,
						headerImg: 'https://i.keaimeitu.com/uploads/allimg/200504/110822693.jpg',
						type: 1,
						education: '本科',
						work: '程序员',
						city: '北京市',
						status: 1, // 1待加微信 2待匹配 3匹配成功 4匹配失败
					}, {
						id: 'LCP12342356',
						name: '小公子22',
						isAuth: 1,
						height: 186,
						bornTime: '1998-10-09',
						day: 15,
						headerImg: 'https://img2.baidu.com/it/u=3895119537,2684520677&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						type: 4,
						education: '本科',
						work: '程序员',
						city: '北京市',
						status: 1,
					}, {
						id: 'LCP12342356',
						name: '小公子33',
						height: 186,
						bornTime: '1998-10-09',
						day: 14,
						headerImg: 'https://img1.baidu.com/it/u=346755217,1159990253&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						type: 4,
						education: '本科',
						work: '程序员',
						city: '北京市',
						status: 2,
					}, {
						id: 'LCP12342356',
						name: '小公子22',
						height: 186,
						bornTime: '1998-10-09',
						day: 15,
						headerImg: 'https://img2.baidu.com/it/u=3895119537,2684520677&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						type: 2,
						education: '本科',
						work: '程序员',
						city: '北京市',
						status: 2,
					}, {
						id: 'LCP12342356',
						name: '小公子22',
						height: 186,
						bornTime: '1998-10-09',
						day: 15,
						headerImg: 'https://img2.baidu.com/it/u=3895119537,2684520677&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						type: 2,
						education: '本科',
						work: '程序员',
						city: '北京市',
						status: 3,
					}, {
						id: 'LCP12342356',
						name: '小公子33',
						height: 186,
						bornTime: '1998-10-09',
						day: 14,
						headerImg: 'https://img1.baidu.com/it/u=346755217,1159990253&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						type: 3,
						education: '本科',
						work: '程序员',
						city: '北京市',
						status: 4,
					}, {
						id: 'LCP12342356',
						name: '小公子33',
						height: 186,
						bornTime: '1998-10-09',
						day: 14,
						headerImg: 'https://img1.baidu.com/it/u=346755217,1159990253&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						type: 3,
						education: '本科',
						work: '程序员',
						city: '北京市',
						status: 3,
					}])
					this.totalPage = 2
					if (this.page > 2) {
						this.status = 'nomore'
					}
				}, 500)
			},
			toUserDetail(data) {
				uni.setStorageSync('searchType', 2)
				uni.navigateTo({
					url: '/pages/home/detail?id=' + data.id
				})
			},
			onButClick(index, type) {
				if (type === 1) {
					this.curIndex = index
					this.modalShow = true
				} else if (type === 2) {
					uni.navigateTo({
						url: '/pagesU/match/index'
					})
				}
			},
			onModalConfirm() {
				this.modalShow = false
				this.userList[this.curIndex].status = 2
			}
		}
	}
</script>

<style lang="scss"></style>
