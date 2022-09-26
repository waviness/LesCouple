<template>
	<view>
		<u-swiper :list="bannerList" indicator indicatorMode="line" circular></u-swiper>
	</view>
</template>

<script>
	export default {
		name: 'Home',
		data() {
			return {
				bannerList: [
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
				],
			}
		},
		methods: {

		}
	}
</script>

<style></style>
