<template>
	<view class="bg-white">
		<u-cell-group>
			<u-cell title="头像" url="/pagesU/infor/image-edit" isLink>
				<view slot="value">
					<u-avatar :src="userInfo.headerImg"></u-avatar>
				</view>
			</u-cell>
			<u-cell title="昵称" :value="userInfo.name"></u-cell>
			<u-cell title="编辑个人信息" url="/pagesU/infor/edit" isLink></u-cell>
			<u-cell title="编辑找对象需求" url="/pagesU/infor/needs-edit" isLink></u-cell>
		</u-cell-group>
	</view>
</template>

<script>
	export default {
		name: 'UserInfor',
		data() {
			return {
				userInfo: uni.getStorageSync('userInfo')
			}
		},
	}
</script>

<style>
</style>
