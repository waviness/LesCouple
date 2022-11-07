<template>
	<view>
		<view class="bg-white">
			<u-cell-group>
				<u-cell title="不上推荐" label="开启后,个人信息不会被推荐上主页">
					<u-switch slot="right-icon" v-model="recommend"></u-switch>
				</u-cell>
				<u-cell title="仅红娘查看个人信息" label="开启后,除红娘外其他用户无法查看个人信息">
					<u-switch slot="right-icon" v-model="onlyRed"></u-switch>
				</u-cell>
				<u-cell title="隐藏个人信息" label="开启后,所有人无法查看个人信息">
					<u-switch slot="right-icon" v-model="hideInfor"></u-switch>
				</u-cell>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Secrets',
		data() {
			return{
				recommend: true,
				onlyRed: true,
				hideInfor: false,
			}
		}
	}
</script>

<style>
</style>

