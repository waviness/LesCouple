<template>
	<view class="pb-100">
		<u-swiper :list="bannerList" :radius="0" indicator indicatorMode="line" circular></u-swiper>
		<view class="bg-white">
			<u-tabs :list="tabOptions" lineColor="#f9ae3d" :scrollable="false" @click="tabClick">
			</u-tabs>
		</view>
		<view v-if="status === 'loading' || makerList.length">
			<MakerItem v-for="(item, index) in makerList" :key="index" :index="index" :data="item"
				@click="toMakerDetail(item)" />
			<u-loadmore :status="status" />
		</view>
		<app-empty v-else :marginTop="40" />
	</view>
</template>

<script>
	import {
		MakerItem
	} from './components/MakerItem.vue'
	export default {
		name: 'MatchMaker',
		components: {
			MakerItem
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
					name: '评分排序',
				}, {
					name: '匹配量'
				}, {
					name: '匹配时间'
				}],
				current: 0,
				page: 1,
				pageSize: 20,
				totalPage: 0,
				status: 'loading',
				makerList: []
			}
		},
		onLoad() {
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
			tabClick(item) {
				this.current = item.index
				this.page = 1
				this.status = 'loading'
				this.makerList = []
				this.getMakerList()
			},
			getMakerList() {
				setTimeout(() => {
					this.makerList = this.makerList.concat([{
						name: '红娘小公子',
						successNum: 123,
						averageDay: 22,
						rate: 3.0,
						headerImg: 'https://i.keaimeitu.com/uploads/allimg/200504/110822693.jpg'
					}, {
						name: '红娘小公子22',
						successNum: 123,
						averageDay: 22,
						rate: 5.0,
						headerImg: 'https://img2.baidu.com/it/u=3895119537,2684520677&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
					}, {
						name: '红娘小公子33',
						successNum: 123,
						averageDay: 22,
						rate: 4.0,
						headerImg: 'https://img1.baidu.com/it/u=346755217,1159990253&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
					}, {
						name: '红娘小公子22',
						successNum: 123,
						averageDay: 22,
						rate: 5.0,
						headerImg: 'https://img2.baidu.com/it/u=3895119537,2684520677&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
					}, {
						name: '红娘小公子33',
						successNum: 123,
						averageDay: 22,
						rate: 4.0,
						headerImg: 'https://img1.baidu.com/it/u=346755217,1159990253&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
					}])
					this.totalPage = 2
					if (this.page > 2) {
						this.status = 'nomore'
					}
				}, 500)
			},
			toMakerDetail(data) {
				uni.navigateTo({
					url: `/pages/matchmaker/detail?name=${data.name}`
				})
			}
		},
	}
</script>

<style></style>
