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
                <image class="evaluate_img" src={{data.headerImg}} mode="aspectFill">
                </image>
                <view class="evaluate_price">
                    <view style="margin-bottom: 12px;">{{ data.title }}</view>
                    <view>总价：¥{{ data.price }}</view>
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
            <button class="btn-bottom" @click.stop="onButClick()">发布</button>
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
    padding: 16px;

    &_info {
        margin-bottom: 24px;
        border-radius: 4px;
    }

    &_house {
        height: 24px;
        width: 24px;
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
        padding-bottom: 58px;
        border-bottom: 1px solid rgba(237, 237, 237, 1);
    }

    &_evaluateText {
        color: #E54D42;
    }

    &_space {
        margin-top: 8px;
    }

    &_img {
        width: 70px;
        height: 74px;
    }

    &_price {
        position: absolute;
        margin-left: 82px;
    }

    &_text {
        color: rgba(118, 118, 118, 1);
        font-size: 12px;
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
            width: 16px;
            height: 16px;
            margin-right: 8px;
        }
    }

    &_doneText {
        font-size: 14px;
    }

    &_star {
        display: flex;
        align-items: center;
        margin-bottom: 24px;
    }

    &_goodText {
        color: #999999;
        margin-left: 16px;
    }

    &_footer {
        display: flex;
        justify-content: center;
        margin-top: 24px;
        .btn-bottom {
            height: 48px;
            width: 290px;
            color: #fff;
            background: #2295FF;
        }
    }

    &_border {
        border: 1px solid rgba(233, 233, 233, 1);
        border-radius: 4px;
        padding: 8px;
    }
}
</style>
