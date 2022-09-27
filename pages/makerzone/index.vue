<template>
	<view class="">
		<zone-item icon="sousuokehu" label="客户匹配" @click="toDetail('home/search')" />
		<zone-item icon="shangjia" label="店铺管理" @click="toDetail('makerzone/manage')" />
		<zone-item icon="zhucedianpu" label="注册店铺" @click="toDetail('makerzone/store')" />
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
			toDetail(name) {
				uni.navigateTo({
					url: '/pages/' + name
				})
			},
		}
	}
</script>

<style>
</style>
