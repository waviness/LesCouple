<template>
	<view class="pb-100">
		<u-swiper :list="bannerList" :radius="0" indicator indicatorMode="dot" circular>
		</u-swiper>
		<view class="p-4 bg-white font-14 color-gray-2">
			店铺描述：{{ desc }}
		</view>
		<view v-if="list.length" class="">
			<view class="d-flex flex-wrap p-5">
				<GoodsItem v-for="(item, index) in list" :key="index" class="mb-3 goods" :data="item"
					@click="toGoodsDetail(item)" />
			</view>
		</view>
		<app-empty v-else :marginTop="40" />
		<view v-if="judgeTotal" class="judge">
			<view class="d-flex justify-space-between p-3">
				<view>用户评价</view>
				<view @click="toMoreJudge">更多评价（{{ judgeTotal }}）</view>
			</view>
			<JudgeItem :data="judgeItem" />
		</view>
		<u-loading-page :loading="loading"></u-loading-page>
	</view>
</template>

<script>
	import GoodsItem from './components/GoodsItem.vue'
	import JudgeItem from './components/JudgeItem.vue'
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
				desc: '这是一段描述',
				page: 1,
				pageSize: 20,
				totalPage: 0,
				status: 'loading',
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
			this.getGoodsList()
			this.getJudgeInfo()
		},
		onReachBottom() {
			if (this.page < this.totalPage) {
				this.status = 'loading'
				this.page++
				this.getGoodsList()
			} else {
				this.status = 'nomore'
			}
		},
		methods: {
			async getGoodsList() {
				const res = await this.$api.getProductList({
					pageNo: this.page,
					pageSize: this.pageSize,
					userId: uni.getStorageSync('userInfo').userId,
				})
				this.makerList = res.records
				this.totalPage = res.pages
				if (this.page >= this.totalPage) {
					this.status = 'nomore'
				}
			},
			async getJudgeInfo() {
				this.loading = true
				const res = await this.$api.getPettyEvaluation({
					userId: uni.getStorageSync('userInfo').userId
				})
				this.judgeItem = res.evaluation
				this.judgeItem = {
					name: '要慢慢',
					time: '2022-11-09',
					content: '非常好',
					rate: 4.0,
					headerImg: 'https://img2.baidu.com/it/u=3895119537,2684520677&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
				}
				this.judgeTotal = res.count
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

	.judge {
		width: 100%;
		position: fixed;
		bottom: 0;
		background-color: #fff;
		padding-bottom: 40rpx;
	}
</style>
