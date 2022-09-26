<template>
	<view>
		<u-swiper :list="bannerList" :radius="0" indicator indicatorStyle="right" circular></u-swiper>
	</view>
</template>

<script>
	export default {
		name: 'MatchMaker',
		data() {
			return {
				bannerList: [
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
				],
			}
		}
	}
</script>

<style>
</style>
