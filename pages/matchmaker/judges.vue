<template>
	<view class="pb-100">
		<view v-if="status === 'loading' || judgeList.length">
			<view v-for="(item, index) in judgeList" :key="index" :index="index">
				<JudgeItem :data="item" />
				<view class="mx-2">
					<u-line></u-line>
				</view>
			</view>
			<u-loadmore :status="status" />
		</view>
		<app-empty v-else :marginTop="40" />
	</view>
</template>

<script>
	import {
		JudgeItem
	} from './components/JudgeItem.vue'
	export default {
		name: 'JudgesDetail',
		components: {
			JudgeItem
		},
		data() {
			return {
				page: 1,
				pageSize: 20,
				totalPage: 0,
				status: 'loading',
				judgeList: []
			}
		},
		onLoad() {
			this.getJudgeList()
		},
		onReachBottom() {
			if (this.page < this.totalPage) {
				this.status = 'loading'
				this.page++
				this.getJudgeList()
			} else {
				this.status = 'nomore'
			}
		},
		methods: {
			getJudgeList() {
				setTimeout(() => {
					this.judgeList = this.judgeList.concat([{
						name: '要慢慢',
						time: '2022-11-09',
						content: '非常好',
						rate: 4.0,
						headerImg: 'https://img2.baidu.com/it/u=3895119537,2684520677&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
					}, {
						name: '要慢慢',
						time: '2022-11-09',
						content: '非常好',
						rate: 4.0,
						headerImg: 'https://img2.baidu.com/it/u=3895119537,2684520677&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
					}, {
						name: '要慢慢',
						time: '2022-11-09',
						content: '非常好',
						rate: 4.0,
						headerImg: 'https://img2.baidu.com/it/u=3895119537,2684520677&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
					}, {
						name: '要慢慢',
						time: '2022-11-09',
						content: '非常好',
						rate: 4.0,
						headerImg: 'https://img2.baidu.com/it/u=3895119537,2684520677&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
					}, {
						name: '要慢慢',
						time: '2022-11-09',
						content: '非常好',
						rate: 4.0,
						headerImg: 'https://img2.baidu.com/it/u=3895119537,2684520677&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
					}, {
						name: '要慢慢',
						time: '2022-11-09',
						content: '非常好',
						rate: 4.0,
						headerImg: 'https://img2.baidu.com/it/u=3895119537,2684520677&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
					}, {
						name: '要慢慢',
						time: '2022-11-09',
						content: '非常好',
						rate: 4.0,
						headerImg: 'https://img2.baidu.com/it/u=3895119537,2684520677&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
					}, {
						name: '要慢慢',
						time: '2022-11-09',
						content: '非常好',
						rate: 4.0,
						headerImg: 'https://img2.baidu.com/it/u=3895119537,2684520677&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
					}, {
						name: '要慢慢',
						time: '2022-11-09',
						content: '非常好',
						rate: 4.0,
						headerImg: 'https://img2.baidu.com/it/u=3895119537,2684520677&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
					}])
					this.totalPage = 3
					if (this.page > 3) {
						this.status = 'nomore'
					}
				}, 500)
			},
		}
	}
</script>

<style>
</style>
