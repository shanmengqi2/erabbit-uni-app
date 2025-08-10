// AddressPanel.vue
<script setup lang="ts">
import { useAddressStore } from '@/stores/modules/address'
import { useMemberStore } from '@/stores/modules/member'
import { getMemberAddressAPI } from '@/services/address'
import { ref } from 'vue'
import type { AddressItem } from '@/types/address.d'
import { onLoad, onShow } from '@dcloudio/uni-app'
// 子组件调用父组件方法
const emit = defineEmits<{
  (e: 'close'): void
  (e: 'refreshAddressList'): void
}>()

// const memberStore = useMemberStore()

// 获取地址列表
defineProps<{
  addressList: AddressItem[]
}>()

// const addressList = ref<AddressItem[]>([])
// const getAddressList = async () => {
//   const res = await getMemberAddressAPI()
//   addressList.value = res.result
// }
// onShow(() => {
//   getAddressList()
//   console.log('地址列表', addressList.value)
// })

// 选择地址
const selectAddress = (item: AddressItem) => {
  // 选择地址
  const addressStore = useAddressStore()
  addressStore.changeSelectedAddress(item)
  // 关闭地址选择器
  emit('close')
}

// 新建地址
const onAddAddress = async () => {
  await uni.navigateTo({
    url: '/pagesMember/address-form/address-form',
  })
  // 刷新地址列表
  uni.$emit('refreshAddressList')
}
</script>

<template>
  <view class="address-panel">
    <!-- 关闭按钮 -->
    <text class="close icon-close" @tap="emit('close')"></text>
    <!-- 标题 -->
    <view class="title">配送至</view>
    <!-- 内容 -->
    <view class="content">
      <view class="item" v-for="item in addressList" :key="item.id" @tap="selectAddress(item)">
        <view class="user"> {{ item.receiver }} {{ item.contact }}</view>
        <view class="address"> {{ item.fullLocation }} {{ item.address }}</view>
        <text class="icon" :class="{ 'icon-checked': item.isDefault }">
          <!-- <text v-if="item.isDefault">默认</text> -->
          <!-- {{ item.isDefault ? '默认' : '' }} -->
        </text>
      </view>
      <!-- <view class="item">
        <view class="user">王东 13824686868</view>
        <view class="address">北京市顺义区后沙峪地区安平北街6号院</view>
        <text class="icon icon-ring"></text>
      </view>
      <view class="item">
        <view class="user">张三 13824686868</view>
        <view class="address">北京市朝阳区孙河安平北街6号院</view>
        <text class="icon icon-ring"></text>
      </view> -->
    </view>
    <view class="footer">
      <view class="button primary" @tap="onAddAddress"> 新建地址 </view>
      <view v-if="false" class="button primary">确定</view>
    </view>
  </view>
</template>

<style lang="scss">
.address-panel {
  padding: 0 30rpx;
  border-radius: 10rpx 10rpx 0 0;
  position: relative;
  background-color: #fff;
}

.title {
  line-height: 1;
  padding: 40rpx 0;
  text-align: center;
  font-size: 32rpx;
  font-weight: normal;
  border-bottom: 1rpx solid #ddd;
  color: #444;
}

.close {
  position: absolute;
  right: 24rpx;
  top: 24rpx;
}

.content {
  min-height: 300rpx;
  max-height: 540rpx;
  overflow: auto;
  padding: 20rpx;
  .item {
    padding: 30rpx 50rpx 30rpx 60rpx;
    background-size: 40rpx;
    background-repeat: no-repeat;
    background-position: 0 center;
    background-image: url(https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/locate.png);
    position: relative;
  }
  .icon {
    color: #999;
    font-size: 40rpx;
    transform: translateY(-50%);
    position: absolute;
    top: 50%;
    right: 0;
  }
  .icon-checked {
    color: #27ba9b;
  }
  .icon-ring {
    color: #444;
  }
  .user {
    font-size: 28rpx;
    color: #444;
    font-weight: 500;
  }
  .address {
    font-size: 26rpx;
    color: #666;
  }
}

.footer {
  display: flex;
  justify-content: space-between;
  padding: 20rpx 0 40rpx;
  font-size: 28rpx;
  color: #444;

  .button {
    flex: 1;
    height: 72rpx;
    text-align: center;
    line-height: 72rpx;
    margin: 0 20rpx;
    color: #fff;
    border-radius: 72rpx;
  }

  .primary {
    color: #fff;
    background-color: #27ba9b;
  }

  .secondary {
    background-color: #ffa868;
  }
}
</style>
