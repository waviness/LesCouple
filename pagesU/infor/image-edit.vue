<template>
	<view class="bg-white p-5">
		<view class="d-flex justify-center m-8">
			<view class="upload_avatar">
				<u-upload @afterRead="afterRead" uploadIcon="plus" :previewFullImage="true"></u-upload>
			</view>
			<view class="ml-5">
				<u-image :src="userInfo.imgId || headerImgUrl" width="80px" height="80px" radius="2px" :lazy-load="true"
					@click="preview">
					<view slot="error" style="font-size: 48rpx;">
						<u-icon name="photo"></u-icon>
					</view>
				</u-image>
			</view>
		</view>
		<view class="m-8">
			<u-button type="primary" text="保存" shape="circle" @click="saveImg"></u-button>
		</view>
	</view>
</template>

<script>
	import {
		headerImgUrl
	} from '@/constants/common.js'
	export default {
		name: 'PersonalInfoAvatarEdit',
		data() {
			return {
				userInfo: uni.getStorageSync('userInfo'),
				headerImgUrl,
			}
		},
		methods: {
			async afterRead(file, lists, name) {
				const res = await this.$api.uploadImage(file.file.thumb)
				this.headerImgUrl = res[0]
			},
			preview() {
				uni.previewImage({
					urls: [this.headerImgUrl]
				})
			},
			saveImg() {
				console.log(this.headerImgUrl)
				this.$toast('保存成功')
			}
		}

	}
</script>

<style lang="scss"></style>
