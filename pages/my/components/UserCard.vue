<template>
	<view class="user-card">
		<image class="user-card__bg" src="../../../static/background.png" />
		<view class="user-card__header">
			<image class="user-card__img" :src="data.headerImg" />
			<view
				:class="['font-11 color-white user-card__tag', data.isAuth ? 'bg-rank-1' : 'bg-gray']">
				{{ data.isAuth ? '已认证' : '未认证' }}
			</view>
		</view>
		<view class="user-card__info">
			<view class="font-14 font-bold">{{ data.name }}</view>
			<view class="font-12 color-gray-2 mt-1">ID：{{ data.id }}</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "UserCard",
		props: {
			data: Object
		},
	}
</script>

<style lang="scss">
	.user-card {
		width: 100%;
		height: 180px;
		position: relative;
		
		&__bg {
			width: 100%;
			position: absolute;
			top: -120px;
			z-index: 1;
		}
		
		&__header {
			z-index: 999;
			position: absolute;
			left: 10px;
			bottom: 12px;
			background-color: white;
			border-radius: 50%;
			width: 88px;
			height: 88px;
		}
		
		&__img {
			width: 80px;
			height: 80px;
			border-radius: 50%;
			margin: 4px;
		}
		
		&__tag {
			position: absolute;
			right: -4px;
			bottom: 2px;
			padding: 0 8px;
			border-radius: 10px;
		}
		
		&__info {
			position: absolute;
			bottom: 12px;
			right: 10px;
			text-align: right;
		}
	}
</style>
