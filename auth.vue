<template>
	<view class="certification">
		<view class="cerificationTitle">信息填写</view>
		<view class="personalInfo">
			<u-form labelPosition="left" :model="model" :rules="rules" ref="form1">
				<u-form-item prop="userInfo.realName" label="真实姓名" labelWidth="70px" borderBottom required>
					<u-input v-model="model.userInfo.realName"
					border="none" color="#333" placeholder="请填写真实姓名"></u-input>
				</u-form-item>
				<u-form-item prop="userInfo.idNumber" type="idcard" label="身份证号" labelWidth="70px" borderBottom required>
					<u-input v-model="model.userInfo.idNumber"
					border="none" color="#333" placeholder="请填写身份证号"></u-input>
				</u-form-item>
				<u-form-item prop="userInfo.phone" type="number" maxlength="11" label="手机号码" labelWidth="70px" borderBottom required>
					<u-input v-model="model.userInfo.phone"
					border="none" color="#333" placeholder="请填写手机号码"></u-input>
				</u-form-item>
				<view class="uploadImage">上传身份证照片</view>
				<u-form-item prop="userInfo.photo">
					<u-row
					     justify="space-around"
					    >
						<u-upload
							width="160"
							height="120"
							@afterRead="afterRead"
							name="1"
							uploadText="上传人像页"
								>
						</u-upload>
						<u-upload
								width="160"
								height="120"
								@afterRead="afterRead"
								name="2"
								uploadText="上传国徽页"
							></u-upload>
						 </u-row>
						<u-row
							justify="space-around"
							>
							<u-upload
							width="160"
							height="120"
								:fileList="fileList1"
								@afterRead="afterRead"
								name="4"
								uploadText="上传手持身份证照"
								></u-upload>
						</u-row>
						<view class="cerificationTitle">请确保照片中身份证信息清晰，露出手臂</view>
				</u-form-item>
				<view class="subimtBtn">
					<u-button type="primary" @click="submitClick">
						提交审核
					</u-button>
				</view>
			</u-form>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Certification',
		data() {
			return {
				model: {
					userInfo: {
						realName: '',
						idNumber: '',
						phone: '',
						photo: ''
					},
				},
				fileList1: [{
					url: "https://img1.baidu.com/it/u=346755217,1159990253&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
					}
				]
			}
		}
	}
</script>

<style lang="scss">
	.certification {
		padding: 10px;
		.cerificationTitle {
			font-size: 12px;
			color: #acb5b7;
		}
		.uploadImage {
			font-size: 12px;
			color: #acb5b7;
			padding: 10px 0;
		}
		.subimtBtn {
			padding: 20px 0;
		}
	}
</style>
