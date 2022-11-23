<template>
	<view class="user-item bg-white mt-2 p-3" @click="onClick">
		<view class="d-flex align-center">
			<view class="position-relative text-center">
				<image class="user-item__img" :src="data.headerImg" />
				<view
					:class="['font-11 color-white user-item__tag user-item__tag--absolute', data.isAuth ? 'bg-rank-1' : 'bg-gray']">
					{{ data.isAuth ? '已认证' : '未认证' }}
				</view>
			</view>
			<view class="flex-1 d-flex u-flex-column justify-space-between full-height ml-2">
				<view class="font-14 d-flex align-center">
					<view>{{ data.name }}</view>
					<view class="color-gray font-12 ml-3">
						{{ data.status === 3 || data.status === 4 ? `已匹配${data.day}天` : `已等待${data.day}天` }}
					</view>
				</view>
				<view class="font-12 color-gray mt-3">订单号：{{ data.id }}</view>
			</view>
		</view>
		<view class="d-flex justify-flex-end mt-2">
			<view style="width: 80px">
				<u-button v-if="data.status === 1" type="warning" size="small" :plain="true" text="待加微信" shape="circle"
					@tap.stop="onButClick(index, 1)"></u-button>
				<u-button v-else-if="data.status === 2" type="warning" size="small" text="确认匹配" shape="circle"
					@tap.stop="onButClick(index, 2)"></u-button>
				<u-button v-else-if="data.status === 3" type="error" size="small" :plain="true" text="匹配成功"
					shape="circle"></u-button>
				<u-button v-else-if="data.status === 4" type="default" size="small" :plain="true" :hairline="false"
					text="匹配失败" shape="circle" disabled="true"></u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "CustItem",
		props: {
			data: Object,
			index: Number
		},
		methods: {
			onClick() {
				this.$emit('click')
			},
			onButClick(index, type) {
				this.$emit('butClick', index, type)
			}
		}
	}
</script>

<style lang="scss">
	.user-item {

		&__img {
			width: 100rpx;
			height: 100rpx;
			border-radius: 8rpx;
		}

		&__tag {
			padding: 0 16rpx;
			border-radius: 20rpx;

			&--absolute {
				position: absolute;
				bottom: 0;
			}
		}
	}
</style>
