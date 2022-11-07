<template>
	<view class="pb-100">
		<u-swiper :list="bannerList" :radius="0" indicator indicatorMode="dot" circular>
		</u-swiper>
		<view v-if="status === 'loading' || list.length">
			<view class="d-flex flex-wrap p-5">
				<GoodsItem v-for="(item, index) in list" :key="index" class="mb-3 goods" :data="item" @click="toGoodsDetail(item)" />
			</view>
			<u-loadmore :status="status" />
		</view>
		<app-empty v-else :marginTop="40" />
	</view>
</template>

<script>
	import {
		GoodsItem
	} from './components/GoodsItem.vue'
	export default {
		name: 'MatchMakerDetail',
		components: {
			GoodsItem
		},
		data() {
			return {
				bannerList: [
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
				],
				page: 1,
				pageSize: 20,
				totalPage: 0,
				status: 'loading',
				list: []
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: uni.getStorageSync('makerDetail').name
			})
			this.getMakerList()
		},
		onReachBottom() {
			if (this.page < this.totalPage) {
				this.status = 'loading'
				this.page++
				this.getMakerList()
			} else {
				this.status = 'nomore'
			}
		},
		methods: {
			getMakerList() {
				setTimeout(() => {
					this.list = this.list.concat([{
						title: '一对一匹配【标准版】',
						saleNum: 123,
						price: 22,
						headerImg: 'https://img2.baidu.com/it/u=2060204670,276341810&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
					}, {
						title: '一对一匹配【标准版】',
						saleNum: 123,
						price: 22,
						headerImg: 'https://img2.baidu.com/it/u=390829681,3002818272&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
					}, {
						title: '一对一匹配【高级版】',
						saleNum: 123,
						price: 22,
						headerImg: 'https://img2.baidu.com/it/u=390829681,3002818272&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
					}, {
						title: '一对一匹配【标准版】',
						saleNum: 123,
						price: 22,
						headerImg: 'https://img2.baidu.com/it/u=2060204670,276341810&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
					}, {
						title: '一对一匹配【标准版】',
						saleNum: 123,
						price: 22,
						headerImg: 'https://img2.baidu.com/it/u=2060204670,276341810&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
					}])
					this.totalPage = 3
					if (this.page > 3) {
						this.status = 'nomore'
					}
				}, 500)
			},
			toGoodsDetail(data) {
				uni.setStorageSync('goodsDetail', data)
				uni.navigateTo({
					url: '/pages/matchmaker/goods'
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.goods {
		width: calc(50% - 20rpx);
		margin-right: 40rpx;
		
		&:nth-child(2n) {
			margin-right: 0;
		}
	}
</style>
