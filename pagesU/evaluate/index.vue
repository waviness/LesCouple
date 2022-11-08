<template>
    <view class="evaluate">
        <view class="evaluate_info evaluate_bottom">
            <view class="evaluate_userInfo">
                <view class="evaluate_userInfo_user">
                    <image class="evaluate_house" src="../../static/house.png" mode="aspectFill"></image>
                    <view>{{ data.name }}</view>
                </view>
                <view class="evaluate_evaluateText">待评价</view>
            </view>
            <view class="evaluate_space evaluate_text evaluate_doneCode">
                <image class="evaluate_img" :src="data.headerImg" mode="aspectFill">
                </image>
                <view class="evaluate_price">
                    <view style="margin-bottom: 24rpx;">{{ data.title }}</view>
                    <!-- <view>总价：¥{{ data.price }}</view> -->
                </view>
            </view>
            <view class="evaluate_doneBox evaluate_border">
                <span class="evaluate_doneText" @click="ondoneCode">已完成</span>
            </view>
        </view>
        <view class="evaluate_star">
            <view>评价：</view>
            <u-rate :count="count" v-model="activeColorvalue" size="40" @change="onChangeStar"></u-rate>
            <view class="evaluate_goodText">非常好</view>
        </view>
        <view class="evaluate_orderInfo">
            <u-textarea placeholder="请填写您的点评，请文明留言。" count></u-textarea>
        </view>
        <view class="evaluate_footer">
            <u-button type="primary" @click.stop="onButClick()">发布</u-button>
        </view>
    </view>
</template>

<script>
export default {
    name: "Evaluate",
    data() {
        console.log('orderDetail', uni.getStorageSync('orderDetail'));
        return {
            data: uni.getStorageSync('orderDetail'),
            count: 5,
            activeColorvalue: 5,
        }
    },
    methods: {
        onChangeStar(val) {
            console.log('star val', val);
        },
        onButClick() {
            console.log('发布');
        }
    }
}
</script>

<style lang="scss">
.evaluate {
    height: 100vh;
    overflow-y: hidden;
    background-color: #fff;
    padding: 32rpx;

    &_info {
        margin-bottom: 48rpx;
        border-radius: 8rpx;
    }

    &_house {
        height: 48rpx;
        width: 48rpx;
    }

    &_userInfo {
        display: flex;
        justify-content: space-between;

        &_user {
            display: flex;
            justify-content: flex-start;
        }
    }

    &_bottom {
        padding-bottom: 116rpx;
        border-bottom: 2rpx solid rgba(237, 237, 237, 1);
    }

    &_evaluateText {
        color: #E54D42;
    }

    &_space {
        margin-top: 16rpx;
    }

    &_img {
        width: 140rpx;
        height: 148rpx;
    }

    &_price {
        position: absolute;
        margin-left: 164rpx;
    }

    &_text {
        color: rgba(118, 118, 118, 1);
        font-size: 24rpx;
    }

    &_doneCode {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &_doneBox {
        display: flex;
        align-items: center;
        float: right;

        img {
            width: 32rpx;
            height: 32rpx;
            margin-right: 16rpx;
        }
    }

    &_doneText {
        font-size: 28rpx;
    }

    &_star {
        display: flex;
        align-items: center;
        margin-bottom: 48rpx;
    }

    &_goodText {
        color: #999999;
        margin-left: 32rpx;
    }

    &_footer {
        display: flex;
        justify-content: center;
        margin-top: 48rpx;
        .btn-bottom {
            height: 96rpx;
            width: 580rpx;
            color: #fff;
            background: #2295FF;
        }
    }

    &_border {
        border: 2rpx solid rgba(233, 233, 233, 1);
        border-radius: 8rpx;
        padding: 16rpx;
    }
}
</style>
