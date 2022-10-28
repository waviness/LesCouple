<template>
	<view class="upload_avatar_body">
		<view class="upload_avatar" >
			<u-upload
				:fileList="imgList"
				@afterRead="afterRead"
				@delete="deletePic"
				uploadIcon="plus"
				:previewFullImage="true"
			></u-upload>
		</view>
		<view class="upload_image">
			<u--image src="https://cdn.uviewui.com/uview/album/1.jpg111" width="80px" height="80px" radius="2px" :lazy-load="true">
				<view slot="error" style="font-size: 48rpx;"><u-icon name="photo"></u-icon></view>
			</u--image>
		</view>
	</view>
</template>

<script>
export default {
	name: 'PersonalInfoAvatarEdit',
	data() {
		return{
			imgList: []
		}
	}
	
}
</script>

<style lang="scss">
	.upload_avatar_body {
		display: flex;
	}
</style>
