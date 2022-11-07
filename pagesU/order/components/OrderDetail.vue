<!--
 * @Description: 
 * @Author: hannalai
 * @Date: 2022-10-29 21:35:59
 * @LastEditTime: 2022-11-05 20:59:19
 * @LastEditors: Please set LastEditors
 * @Reference: 
-->
<template>
    <view class="order-detail">
        <view class="order-detail_info order-detail_userInfo">
            <image class="order-detail__img" :src="data.headerImg" mode="aspectFill"></image>
            <view class="order-detail_price">
                <view>{{ data.title }}</view>
                <view>¥{{ data.price }}</view>
            </view>
        </view>
        <view class="order-detail_info order-detail_matchInfo">
            <view class="order-detail_bottom">红娘：{{ data.name }}</view>
            <view v-if="data.status === 1" class="order-detail_space" style="color: pink">支付后可查看微信号码</view>
            <view v-if="data.status !== 1" class="order-detail_space order-detail_text order-detail_copyWxCode">
                <span>联系微信：wyl8888love</span>
                <view class="order-detail_copyWxBox order-detail_border">
                    <img src="../../../static/weixin-logo.png">
                    <span class="order-detail_copyWxText" @click="onCopyWxCode">复制微信</span>
                </view>
            </view>
        </view>
        <view class="order-detail_info">
            <view class="order-detail_bottom">服务内容</view>
            <p class="order-detail_space">1. 主动牵线：推送已认证候选人，使用者选择满意候选人后，红娘将帮助牵线，最多牵线15位满意候选人，直至服务周期内匹配成功。
            </p>
            <p>
                2. 被动牵线：使用者将作为候选人被推送给感兴趣的其他用户。
            </p>
            <p>
                3. 终止规则：牵线满15位候选人后，主动牵线服务自动终止；在服务周期内匹配成功后，主动/被动牵线服务自动终止。
            </p>
        </view>
        <view class="order-detail_info order-detail_orderInfo">
            <view class="order-detail_bottom">订单信息</view>
            <view class="order-detail_space">
                <span>订单号：</span>
                <span class="order-detail_text">LCP1010101010</span>
            </view>
            <view class="order-detail_space">
                <span>下单时间：</span>
                <span class="order-detail_text">{{ data.date }}</span>
            </view>
            <view class="order-detail_space">
                <span>支付时间：</span>
                <span class="order-detail_text">{{ data.date }}</span>
            </view>
            <view class="order-detail_space">
                <span>完成时间：</span>
                <span class="order-detail_text">{{ data.date }}</span>
            </view>
        </view>
        <view class="order-detail_footer">
            <view v-if="data.status === 1" class="order-detail_footer_unPay">
                <view class="order-detail_border order-detail_cancelOrder">取消订单</view>
                <button class="btn-bottom" @click.stop="onButClick(1)">立即付款</button>
            </view>
            <view v-if="data.status === 2" class="order-detail_margin">
                <button class="btn-bottom" @click.stop="onButClick(2)">确认牵线</button>
            </view>
            <view v-if="data.status === 3" class="order-detail_footer_unPay">
                <view class="order-detail_border order-detail_cancelOrder">申诉</view>
                <button class="btn-bottom" @click.stop="onButClick(3)">立即评价</button>
            </view>
            <view v-if="data.status === 4" class="order-detail_margin">
                <button class="btn-bottom" @click.stop="onButClick(4)">查看评价</button>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: "OrderDetail",
    props: {
        data: Object,
    },
    methods: {
        onCopyWxCode() {
            wx.setClipboardData({
                data: '940801675',
                success() {
                    wx.hideToast();
                    wx.showToast({
                        icon: 'none',
                        title: '微信号码已复制',
                    });
                },
            });
        },
        onButClick(val) {
            console.log('status', val);
            if(val === 3) {
                uni.navigateTo({
                    url: '../../pagesU/evaluate/index',
                });
            }
        }
    }
}
</script>

<style lang="scss">
.order-detail {
    height: 100vh;
    padding: 32rpx;
    overflow-y: hidden;

    &_info {
        padding: 32rpx;
        background-color: #fff;
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
        position: absolute;
        margin-left: 164rpx;
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
        box-shadow: inset 0 2rpx 0 0 #ebebeb;
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
            background: rgba(255, 215, 87, 0.95);
            position: absolute;
            right: 32rpx;
        }
    }

    &_border {
        border: 2rpx solid rgba(233, 233, 233, 1);
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
