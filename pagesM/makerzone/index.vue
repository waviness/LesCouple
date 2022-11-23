<!--
 * @Description: 
 * @Author: hannalai
 * @Date: 2022-09-28 12:55:07
 * @LastEditTime: 2022-11-09 11:16:17
 * @LastEditors: 
 * @Reference: 
-->
<template>
	<view class="">
		<zone-item icon="sousuokehu" label="客户匹配" @click="toSearch" />
		<zone-item icon="shangjia" label="店铺管理" @click="toDetail('/pagesM/makerzone/manage')" />
		<zone-item icon="zhucedianpu" label="注册店铺" @click="toDetail('/pagesM/registerStore/store')" />
		<zone-item icon="customer" label="客户管理" @click="toDetail('/pagesM/customer/index')" />
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
