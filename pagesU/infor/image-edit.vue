<template>
	<view class="bg-white p-5">
		<view class="d-flex justify-center m-8">
			<view class="upload_avatar" >
				<u-upload
					:fileList="imgList"
					@afterRead="afterRead"
					@delete="deletePic"
					uploadIcon="plus"
					:previewFullImage="true"
				></u-upload>
			</view>
			<view class="ml-5">
				<u-image :src="headerImg" width="80px" height="80px" radius="2px" :lazy-load="true">
					<view slot="error" style="font-size: 48rpx;"><u-icon name="photo"></u-icon></view>
				</u-image>
			</view>
		</view>
		<view class="m-8">
			<u-button type="primary" text="保存" shape="circle" @click="saveImg"></u-button>
		</view>
	</view>
</template>

<script>
export default {
	name: 'PersonalInfoAvatarEdit',
	data() {
		return{
			headerImg: uni.getStorageSync('userInfo').headerImg,
		}
	},
	methods: {
		saveImg() {
			console.log(this.headerImg)
			this.$toast('保存成功')
		}
	}
	
}
</script>

<style lang="scss"></style>
