<!--
 * @Description: 
 * @Author: hannalai
 * @Date: 2022-09-28 12:55:07
 * @LastEditTime: 2022-10-29 22:31:09
 * @LastEditors: Please set LastEditors
 * @Reference: 
-->
<template>
	<!-- <view class="">订单详情</view> -->
	<OrderDetail :data=detail />
</template>

<script>
import {
	OrderDetail
} from './components/OrderDetail.vue'
export default {
	name: 'OrderDetail',
	components: {
		OrderDetail
	},
	data() {
		console.log('orderDetail', uni.getStorageSync('orderDetail'));
		return {
			detail: uni.getStorageSync('orderDetail')
		}
	},
}
</script>

<style>

</style>
