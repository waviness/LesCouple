<template>
	<view>
		<u-swiper :list="bannerList" indicator indicatorMode="line" circular></u-swiper>
		<u-tabs :list="tabOptions" :scrollable="false" @click="tabClick"></u-tabs>
		<MakerItem v-for="(item, index) in makerList" :key="index" :index="index" :data="item" />
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
				makerList: []
			}
		},
		methods: {
			tabClick(item) {
				this.current = item.index
				console.log(this.current)
			},
			getMakerList() {
				this.makerList = [{
						name: '红娘小公子',
						successNum: 123,
						averageDay: 22,
						rate: 3.0,
						headerImg: 'https://i.keaimeitu.com/uploads/allimg/200504/110822693.jpg'
					},
					{
						name: '红娘小公子22',
						successNum: 123,
						averageDay: 22,
						rate: 5.0,
						headerImg: 'https://i.keaimeitu.com/uploads/allimg/200504/110822693.jpg'
					},
					{
						name: '红娘小公子33',
						successNum: 123,
						averageDay: 22,
						rate: 4.0,
						headerImg: 'https://i.keaimeitu.com/uploads/allimg/200504/110822693.jpg'
					}
				]
			}
		},
		mounted() {
			this.getMakerList()
		}
	}
</script>

<style></style>
