<template>
	<view class="bg-white">
		<u-cell-group>
			<u-cell title="头像" url="/pagesU/infor/image-edit" isLink>
				<view slot="value">
					<u-avatar :src="userInfo.imgId || headerImgUrl"></u-avatar>
				</view>
			</u-cell>
			<u-cell title="昵称" :value="userInfo.userName"></u-cell>
			<u-cell title="编辑个人信息" url="/pagesU/infor/edit" isLink></u-cell>
			<u-cell title="编辑找对象需求" url="/pagesU/infor/needs-edit" isLink></u-cell>
			<u-cell title="编辑公开项" url="/pagesU/infor/show-edit" isLink></u-cell>
		</u-cell-group>
	</view>
</template>

<script>
	import {
		headerImgUrl
	} from '@/constants/common.js'
	export default {
		name: 'UserInfor',
		data() {
			return {
				userInfo: uni.getStorageSync('userInfo'),
				headerImgUrl
			}
		},
	}
</script>

<style>
</style>
