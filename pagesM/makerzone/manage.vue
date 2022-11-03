<!--
 * @Description: 
 * @Author: hannalai
 * @Date: 2022-09-28 12:55:07
 * @LastEditTime: 2022-11-03 11:03:59
 * @LastEditors: 
 * @Reference: 
-->
<template>
	<view class="bg-white">
		<maker-card :data="makerInfor" />
		<view class="">
			<u-cell-group>
				<u-cell title="订单管理" url="/pagesM/makerzone/manage-order" isLink></u-cell>
				<u-cell title="商品管理" url="/pagesM/makerzone/manage-goods" isLink></u-cell>
				<u-cell title="修改店铺信息" url="/pagesM/registerStore/store" isLink></u-cell>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	import MakerCard from './components/MakerCard.vue'
	export default {
		name: 'MakerManage',
		components: {
			MakerCard,
		},
		data() {
			return {
				makerInfor: {
					name: '红娘小公子',
					time: '2022-09-27',
					headerImg: 'https://img1.baidu.com/it/u=346755217,1159990253&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
				}
			}
		}
	}
</script>

<style>
</style>
