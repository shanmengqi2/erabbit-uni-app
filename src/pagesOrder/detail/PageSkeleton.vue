<template name="skeleton">
  <view class="sk-container">
    <view class="navbar navbar" style="padding-top: 47px">
      <view class="wrap wrap">
        <navigator
          class="back icon-left sk-pseudo sk-pseudo-circle"
          open-type="navigateBack"
        ></navigator>
        <view class="title sk-transparent sk-text-14-2857-192 sk-text">订单详情</view>
      </view>
    </view>
    <scroll-view
      :scroll-y="true"
      class="viewport viewport"
      id="scroller"
      :enable-back-to-top="true"
    >
      <view class="overview sk-image" style="padding-top: 67px">
        <view
          class="status icon-clock sk-transparent sk-text-0-0000-336 sk-text sk-pseudo sk-pseudo-circle"
          >等待付款</view
        >
        <view class="tips sk-transparent">
          <text class="money sk-transparent sk-text-0-0000-305 sk-text">应付金额: ¥ 99.00</text>
          <text class="time sk-transparent sk-text-0-0000-613 sk-text">支付剩余</text> 00 时 29 分
          59 秒
        </view>
        <view
          class="button sk-transparent sk-text-28-7879-934 sk-text"
          style="background-position-x: 50%"
          >去支付</view
        >
      </view>
      <view class="shipment shipment">
        <view class="item sk-image">
          <view class="message sk-transparent sk-text-14-2857-396 sk-text">
            您已在广州市天河区黑马程序员完成取件，感谢使用菜鸟驿站，期待再次为您服务。
          </view>
          <view class="date sk-transparent sk-text-14-2857-678 sk-text"> 2023-04-14 13:14:20 </view>
        </view>
        <view class="locate sk-image">
          <view class="user sk-transparent sk-text-14-2857-28 sk-text"> 张三 13333333333 </view>
          <view class="address sk-transparent sk-text-14-2857-946 sk-text">
            广东省 广州市 天河区 黑马程序员
          </view>
        </view>
      </view>
      <view class="goods goods">
        <view class="item item">
          <navigator class="navigator navigator" hover-class="none">
            <image class="cover sk-image"></image>
            <view class="meta meta">
              <view class="name ellipsis sk-transparent sk-text-14-2857-683 sk-text"
                >ins风小碎花泡泡袖衬110-160cm</view
              >
              <view class="type sk-transparent sk-text-22-2222-964 sk-text">藏青小花， 130</view>
              <view class="price price">
                <view class="actual actual">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="sk-transparent sk-text-14-2857-819 sk-text">99.00</text>
                </view>
              </view>
              <view class="quantity sk-transparent sk-opacity">x1</view>
            </view>
          </navigator>
          <navigator class="navigator navigator" hover-class="none">
            <image class="cover sk-image"></image>
            <view class="meta meta">
              <view class="name ellipsis sk-transparent sk-text-14-2857-783 sk-text"
                >ins风小碎花泡泡袖衬110-160cm</view
              >
              <view class="type sk-transparent sk-text-22-2222-81 sk-text">藏青小花， 130</view>
              <view class="price price">
                <view class="actual actual">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="sk-transparent sk-text-14-2857-509 sk-text">99.00</text>
                </view>
              </view>
              <view class="quantity sk-transparent sk-opacity">x1</view>
            </view>
          </navigator>
          <view class="action action">
            <view
              class="button primary sk-transparent sk-text-29-0323-997 sk-text"
              style="background-position-x: 50%"
              >申请售后</view
            >
            <navigator
              class="button sk-transparent sk-text-29-0323-851 sk-text"
              style="background-position-x: 50%"
            >
              去评价
            </navigator>
          </view>
        </view>
        <view class="total total">
          <view class="row row">
            <view class="text sk-transparent sk-text-0-0000-765 sk-text">商品总价: </view>
            <view
              class="symbol sk-transparent sk-text-0-0000-942 sk-text sk-pseudo sk-pseudo-circle"
              >99.00</view
            >
          </view>
          <view class="row row">
            <view class="text sk-transparent sk-text-0-0000-823 sk-text">运费: </view>
            <view
              class="symbol sk-transparent sk-text-0-0000-722 sk-text sk-pseudo sk-pseudo-circle"
              >10.00</view
            >
          </view>
          <view class="row row">
            <view class="text sk-transparent sk-text-0-0000-472 sk-text">应付金额: </view>
            <view
              class="symbol primary sk-transparent sk-text-0-0000-311 sk-text sk-pseudo sk-pseudo-circle"
              >109.00</view
            >
          </view>
        </view>
      </view>
      <view class="detail detail">
        <view class="title sk-transparent sk-text-0-0000-339 sk-text">订单信息</view>
        <view class="row row">
          <view class="item sk-transparent">
            订单编号: 1954773372822884353
            <text class="copy sk-transparent sk-text-0-0000-349 sk-text">复制</text>
          </view>
          <view class="item sk-transparent sk-text-0-0000-194 sk-text"
            >下单时间: 2023-04-14 13:14:20</view
          >
        </view>
      </view>
      <view is="components/XtxGuess" class="r r">
        <view class="caption XtxGuess--caption"></view>
      </view>
      <view class="toolbar toolbar" style="padding-bottom: 34px">
        <view class="button primary sk-transparent sk-text-14-2857-345 sk-text"> 去支付 </view>
        <view class="button sk-transparent sk-text-14-2857-938 sk-text"> 取消订单 </view>
      </view>
    </scroll-view>
  </view>
</template>

<style>
.sk-transparent {
  color: transparent !important;
}
.sk-text-14-2857-192 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-0-0000-336 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 34.6154rpx;
  position: relative !important;
}
.sk-text-0-0000-305 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26.9231rpx;
  position: relative !important;
}
.sk-text-0-0000-613 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26.9231rpx;
  position: relative !important;
}
.sk-text-28-7879-934 {
  background-image: linear-gradient(
    transparent 28.7879%,
    #eeeeee 0%,
    #eeeeee 71.2121%,
    transparent 0%
  ) !important;
  background-size: 100% 63.4615rpx;
  position: relative !important;
}
.sk-text-14-2857-396 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-678 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-14-2857-28 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-946 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-14-2857-683 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-22-2222-964 {
  background-image: linear-gradient(
    transparent 22.2222%,
    #eeeeee 0%,
    #eeeeee 77.7778%,
    transparent 0%
  ) !important;
  background-size: 100% 41.5385rpx;
  position: relative !important;
}
.sk-opacity {
  opacity: 0 !important;
}
.sk-text-14-2857-819 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-14-2857-783 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-22-2222-81 {
  background-image: linear-gradient(
    transparent 22.2222%,
    #eeeeee 0%,
    #eeeeee 77.7778%,
    transparent 0%
  ) !important;
  background-size: 100% 41.5385rpx;
  position: relative !important;
}
.sk-text-14-2857-509 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-29-0323-997 {
  background-image: linear-gradient(
    transparent 29.0323%,
    #eeeeee 0%,
    #eeeeee 70.9677%,
    transparent 0%
  ) !important;
  background-size: 100% 59.6154rpx;
  position: relative !important;
}
.sk-text-29-0323-851 {
  background-image: linear-gradient(
    transparent 29.0323%,
    #eeeeee 0%,
    #eeeeee 70.9677%,
    transparent 0%
  ) !important;
  background-size: 100% 59.6154rpx;
  position: relative !important;
}
.sk-text-0-0000-765 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 25rpx;
  position: relative !important;
}
.sk-text-0-0000-942 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 25rpx;
  position: relative !important;
}
.sk-text-0-0000-823 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 25rpx;
  position: relative !important;
}
.sk-text-0-0000-722 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 25rpx;
  position: relative !important;
}
.sk-text-0-0000-472 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 25rpx;
  position: relative !important;
}
.sk-text-0-0000-311 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 34.6154rpx;
  position: relative !important;
}
.sk-text-0-0000-339 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 28.8462rpx;
  position: relative !important;
}
.sk-text-0-0000-349 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 19.2308rpx;
  position: relative !important;
}
.sk-text-0-0000-194 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 25rpx;
  position: relative !important;
}
.sk-text-14-2857-345 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-938 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
