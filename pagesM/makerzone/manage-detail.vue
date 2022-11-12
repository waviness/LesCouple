<!--
 * @Description: 
 * @Author: hannalai
 * @Date: 2022-10-29 21:35:59
 * @LastEditTime: 2022-11-12 21:01:48
 * @LastEditors: Please set LastEditors
 * @Reference: 
-->
<template>
    <view class="manage-detail">
        <view class="manage-detail_title">{{ data.title }}</view>
        <view class="manage-detail_swiper">
            <u-swiper :list="bannerList" :radius="0" indicator indicatorMode="dot" circular>
            </u-swiper>
        </view>
        <view class="manage-detail_info">
            <view class="manage-detail_price manage-detail_bottom">
                <span class="manage-detail_text">销量：{{ data.saleNum }}</span>
                <!-- <span>¥{{ data.price }}</span> -->
            </view>
            <view>服务内容</view>
            <p class="manage-detail_space">1. 主动匹配：推送已认证候选人，使用者选择满意候选人后，红娘将帮助匹配，最多匹配15位满意候选人，直至服务周期内匹配成功。
            </p>
            <p>
                2. 被动匹配：使用者将作为候选人被推送给感兴趣的其他用户。
            </p>
            <p>
                3. 终止规则：匹配满15位候选人后，主动匹配服务自动终止；在服务周期内匹配成功后，主动/被动匹配服务自动终止。
            </p>
        </view>
        
    </view>
</template>

<script>
export default {
    name: 'MakerDetail',
    data() {
        return {
            bannerList: [
                'https://cdn.uviewui.com/uview/swiper/swiper3.png',
                'https://cdn.uviewui.com/uview/swiper/swiper2.png',
                'https://cdn.uviewui.com/uview/swiper/swiper1.png',
            ],
            data: uni.getStorageSync('makerDetail')
        }
    },
    methods: {
        onButClick(val) {
            console.log('val', val);
        }
    }
}
</script>

<style lang="scss">
.manage-detail {
    height: 100vh;
    padding: 32rpx;
    overflow-y: hidden;
    background-color: #fff;

    &_title {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 16px;
    }

    &_swiper {
        height: 260rpx;
    }

    &_info {
        padding: 32rpx;
        margin-bottom: 48rpx;
        border-radius: 8rpx;
    }

    &_bottom {
        padding-bottom: 16rpx;
        border-bottom: 2rpx solid rgba(237, 237, 237, 1);
    }

    &_space {
        margin-top: 16rpx;
    }

    &_userInfo {
        display: flex;
        justify-content: flex-start;
    }

    &__img {
        width: 100rpx;
        height: 100rpx;
    }

    &_price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 32rpx;
    }

    &_text {
        color: rgba(118, 118, 118, 1);
        font-size: 24rpx;
    }

    &_copyWxCode {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &_copyWxBox {
        display: flex;
        align-items: center;
        cursor: pointer;

        img {
            width: 32rpx;
            height: 32rpx;
            margin-right: 16rpx;
        }
    }

    &_copyWxText {
        font-size: 28rpx;
        color: #006FFF;
    }

    &_footer {
        position: fixed;
        background: #ffffff;
        box-shadow: inset 0 1px 0 0 #ebebeb;
        height: 168rpx;
        width: 100%;
        bottom: 0;
        left: 0;
        display: flex;

        &_unPay {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &_margin {
            margin-top: 32rpx;
        }

        .btn-bottom {
            height: 96rpx;
            color: #ffffff;
            background: #f9ae3d;
            position: absolute;
            right: 32rpx;
            display: flex;
            align-items: center;
        }
    }

    &_border {
        border: 1px solid rgba(233, 233, 233, 1);
        border-radius: 8rpx;
        padding: 16rpx;
    }

    &_cancelOrder {
        margin-left: 32rpx;
        display: flex;
        justify-content: center;
        min-width: 120rpx;
    }
}
</style>
