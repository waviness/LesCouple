<template>
	<view class="bg-white pb-100">
		<u-swiper :list="bannerList" :radius="0" indicator indicatorMode="dot" circular>
		</u-swiper>
		<view v-if="list.length" class="">
			<view class="d-flex flex-wrap p-5">
				<GoodsItem v-for="(item, index) in list" :key="index" class="mb-3 goods" :data="item"
					@click="toGoodsDetail(item)" />
			</view>
		</view>
		<app-empty v-else :marginTop="40" />
		<view class="px-3">
			<u-divider text="分割线" :dot="true"></u-divider>
		</view>
		<view class="d-flex justify-space-between p-3">
			<view>用户评价</view>
			<view @click="toMoreJudge">更多评价（{{ judgeTotal }}）</view>
		</view>
		<JudgeItem :data="judgeItem" />
		<u-loading-page :loading="loading"></u-loading-page>
	</view>
</template>

<script>
	import {
		GoodsItem
	} from './components/GoodsItem.vue'
	import {
		JudgeItem
	} from './components/JudgeItem.vue'
	export default {
		name: 'MatchMakerDetail',
		components: {
			GoodsItem,
			JudgeItem
		},
		data() {
			return {
				bannerList: [
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
				],
				list: [],
				judgeItem: {},
				judgeTotal: 0,
				loading: false,
			}
		},
		onLoad(option) {
			uni.setNavigationBarTitle({
				title: option.name
			})
			this.getMakerList()
			this.getJudgeList()
		},
		methods: {
			getMakerList() {
				this.loading = true
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
				}, 500)
				this.loading = false
			},
			getJudgeList() {
				this.loading = true
				this.judgeItem = {
					name: '要慢慢',
					time: '2022-11-09',
					content: '非常好',
					rate: 4.0,
					headerImg: 'https://img2.baidu.com/it/u=3895119537,2684520677&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
				}
				this.judgeTotal = 55
				this.loading = false
			},
			toGoodsDetail(data) {
				// console.log('goodsDetail--用户角度', JSON.parse(JSON.stringify(data)));
				uni.setStorageSync('goodDetail', JSON.parse(JSON.stringify(data)))
				uni.navigateTo({
					url: '/pages/matchmaker/goods?showMatch=true'
				})
			},
			toMoreJudge(data) {
				uni.navigateTo({
					url: '/pages/matchmaker/judges'
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
