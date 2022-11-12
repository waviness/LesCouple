<!--
 * @Description: 确认匹配
 * @Author: hannalai
 * @Date: 2022-11-09 11:35:39
 * @LastEditTime: 2022-11-12 20:43:20
 * @LastEditors: Please set LastEditors
 * @Reference: 
-->
<template>
    <view class="match">
        <view class="match-confirm-message">
            <view class="match-item-text">信息确认</view>
            <view class="match-text">订单号：{{ detail.orderId || '' }}</view>
            <view class="match-text">买家：{{ detail.name || ''}}</view>
            <view class="match-text">ID：{{ detail.userId || '' }}</view>
        </view>
        <view class="match-partner">
            <view class="match-item-text">绑定对象</view>
            <view class="match-search">请输入该买家匹配对象的ID</view>
            <u-search placeholder="输入ID进行搜索" shape="round" :show-action="false" @change="search" height="48"
                v-model="searchValue">
            </u-search>
            <view v-if="show" class="match-box">
                <image :src="makerInfo.headerImg" />
                <view class="match-user">
                    <view class="match-text">{{ makerInfo.name }}</view>
                    <view class="match-text">ID：{{ makerInfo.id }}</view>
                </view>
            </view>
        </view>
        <u-button type="primary" class="match-button" @click.stop="onButClick()" :disabled="disabled">绑定</u-button>
    </view>
</template>

<script>
export default {
    name: 'Match',
    data() {
        return {
            searchValue: '',
            makerInfo: {},
            show: false,
            disabled: true,
            detail: uni.getStorageSync('goodDetail')
        }
    },
    methods: {
        search(val) {
            console.log('searchID', val);
            // 接口返回userinfo
            if (val) {
                this.show = true;
                this.makerInfo = {
                    name: '红娘小公子',
                    id: 123456,
                    time: '2022-09-27',
                    headerImg: 'https://img1.baidu.com/it/u=346755217,1159990253&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
                }
                this.disabled = false;
            } else {
                this.show = false;
                this.disabled = true;
            }
        },
        onButClick() {
            
        }
    }
}
</script>

<style lang="scss">
.match {
    padding: 16px;
    background-color: #ffffff;

    &-confirm-message {
        margin-bottom: 64rpx;
    }

    &-item-text {
        font-size: 48rpx;
        font-weight: 600;
        margin-bottom: 32rpx;
    }

    &-text {
        font-size: 36rpx;
        margin-bottom: 16rpx;
    }

    &-search {
        margin-bottom: 16rpx;
    }

    &-partner {
        margin-bottom: 64rpx;
    }

    &-button {
        height: 96rpx;
        width: 580rpx;
        color: #fff;
        background: #2295FF;
    }

    &-box {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 32rpx;

        image {
            width: 140rpx;
            height: 140rpx;
            border-radius: 50%;
        }
    }

    &-user {
        display: flex;
        flex-direction: column;
        margin-left: 16rpx;
    }
}
</style>
