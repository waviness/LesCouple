<!--
 * @Description: 
 * @Author: hannalai
 * @Date: 2022-11-12 16:50:32
 * @LastEditTime: 2022-11-12 21:28:38
 * @LastEditors: Please set LastEditors
 * @Reference: 
-->
<template>
    <view class="reply-evaluate reply-evaluate_info">
        <view class="reply-evaluate_userInfo reply-evaluate_bottom">
            <image class="reply-evaluate_img" :src="data.headerImg" mode="aspectFill"></image>
            <view class="reply-evaluate_price">
                <view>{{ data.title }}</view>
                <!-- <view>¥{{ data.price }}</view> -->
            </view>
        </view>
        <view class="reply-evaluate_rate">
            <view>评价内容</view>
            <view class="reply-evaluate_rate_box">
                <u-rate :value="data.rate" size="20" readonly></u-rate>
                <view class="reply-evaluate_rate_box_text">{{ data.rate }}.0 分</view>
            </view>
        </view>
        <view class="reply-evaluate_content">
            <span class="reply-evaluate_content_name">{{ data.name }}：</span>
            <span>{{ data.content }}</span>
        </view>
        <view class="reply-evaluate_date">
            <view class="reply-evaluate_date_reply">回复</view>
            <view class="reply-evaluate_date_text">{{ data.date }}</view>
        </view>
        <view class="reply-evaluate_reply">
            <!-- <u-textarea placeholder="回复：{{ data.name || '' }}" count v-model="replyValue" @input="onInput()" maxlength="100"></u-textarea> -->
            <u-textarea placeholder="回复：" count v-model="replyValue" @input="onInput()" maxlength="100"></u-textarea>
        </view>
        <u-button type="primary" class="match-button" @click.stop="onButClick()" :disabled="disabled">发送</u-button>
    </view>
</template>
<script>
export default {
    name: "ReplyEvaluate",
    data() {
        return {
            data: uni.getStorageSync('orderDetail'),
            replyValue: '',
            disabled: true
        }
    },
    methods: {
        onInput(val) {
            this.disabled = val === ''; 
        },
        onButClick() {
            this.$toast('发送成功');
            this.replyValue = '';
            setTimeout(() => {
                uni.navigateBack();
            }, 2000);
        }
    }
}
</script>

<style lang="scss">
.reply-evaluate {
    height: 100vh;
    background-color: #fff;

    &_info {
        padding: 32rpx;
        margin-bottom: 48rpx;
        border-radius: 8rpx;
    }

    &_bottom {
        padding-bottom: 32rpx;
        border-bottom: 2rpx solid rgba(237, 237, 237, 1);
    }

    &_space {
        margin-top: 16rpx;
    }

    &_userInfo {
        display: flex;
        justify-content: flex-start;
    }

    &_img {
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

    &_rate {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 32rpx;
        margin-bottom: 16rpx;
        &_box {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            &_text {
                font-size: 24rpx;
                color: #767676;
                margin-left: 16rpx;
            }
        }
    }

    &_content {
        margin-bottom: 16rpx;
        &_name {
            width: 100%;
        }
    }

    &_date {
        display: flex;
        align-items: center;
        font-size: 24rpx;
        margin-bottom: 32rpx;

        &_reply {
            border-radius: 40rpx;
            background-color: #767676;
            opacity: 0.7;
            padding: 8rpx;
            margin-right: 16rpx;
        }

        &_text {
            color: #767676;
        }
    }

    &_reply {
        margin-bottom: 32rpx;

    }
}
</style>