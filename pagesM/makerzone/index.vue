<template>
	<view class="">
		<zone-item icon="sousuokehu" label="客户匹配" @click="toSearch" />
		<zone-item icon="shangjia" label="店铺管理" @click="toDetail('/pagesM/makerzone/manage')" />
		<zone-item icon="zhucedianpu" label="注册店铺" @click="toDetail('/pagesM/makerzone/store')" />
	</view>
</template>

<script>
	import ZoneItem from './components/ZoneItem.vue'
	export default {
		name: 'MakerZone',
		components: {
			ZoneItem
		},
		data() {
			return {}
		},
		methods: {
			toSearch() {
				uni.setStorageSync('searchType', 2)
				uni.navigateTo({
					url: '/pages/home/search'
				})
			},
			toDetail(url) {
				uni.navigateTo({
					url
				})
			},
		}
	}
</script>

<style>
</style>
