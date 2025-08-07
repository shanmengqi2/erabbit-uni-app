<script setup lang="ts">
import { ref } from 'vue'
import { postMemberAddressAPI } from '@/services/address'

// 表单数据
const form = ref({
  receiver: '', // 收货人
  contact: '', // 联系方式
  fullLocation: '', // 省市区(前端展示)
  provinceCode: '', // 省份编码(后端参数)
  cityCode: '', // 城市编码(后端参数)
  countyCode: '', // 区/县编码(后端参数)
  address: '', // 详细地址
  isDefault: 0, // 默认地址，1为是，0为否
})
// 获取页面参数
const query = defineProps<{
  id: string
}>()
// 动态设置标题
uni.setNavigationBarTitle({
  title: query.id ? '编辑地址' : '新增地址',
})

// 收集所在地区
const onRegionChange: UniHelper.RegionPickerOnChange = (e: UniHelper.RegionPickerOnChangeEvent) => {
  // console.log(e)
  // 收集省市区
  form.value.fullLocation = e.detail.value.join(' ')
  // 收集省市区编码
  form.value.provinceCode = e.detail.code![0]!
  form.value.cityCode = e.detail.code![1]!
  form.value.countyCode = e.detail.code![2]!
}
// 切换默认地址
const onSwitchChange: UniHelper.SwitchOnChange = (e: UniHelper.SwitchOnChangeEvent) => {
  form.value.isDefault = e.detail.value ? 1 : 0
}

// 提交表单
const onSubmit = async () => {
  // 校验表单
  if (!form.value.receiver) {
    uni.showToast({
      title: '请填写收货人姓名',
      icon: 'none',
    })
    return
  }
  if (!form.value.contact) {
    uni.showToast({
      title: '请填写收货人手机号码',
      icon: 'none',
    })
    return
  }
  if (!form.value.fullLocation) {
    uni.showToast({
      title: '请选择所在地区',
      icon: 'none',
    })
    return
  }
  if (!form.value.address) {
    uni.showToast({
      title: '请填写详细地址',
      icon: 'none',
    })
    return
  }
  // 提交表单
  if (query.id) {
    // 编辑地址 todo
  } else {
    // 新增地址
    await postMemberAddressAPI(form.value)
    uni.showToast({
      title: '新增成功',
      icon: 'success',
    })
  }
  // 返回上一页
  setTimeout(() => {
    uni.navigateBack()
  }, 500)
}
</script>

<template>
  <view class="content">
    <form>
      <!-- 表单内容 -->
      <view class="form-item">
        <text class="label">收货人</text>
        <input class="input" placeholder="请填写收货人姓名" v-model="form.receiver" />
      </view>
      <view class="form-item">
        <text class="label">手机号码</text>
        <input class="input" placeholder="请填写收货人手机号码" v-model="form.contact" />
      </view>
      <view class="form-item">
        <text class="label">所在地区</text>
        <picker @change="onRegionChange" class="picker" mode="region" value="">
          <view v-if="form.fullLocation">{{ form.fullLocation }}</view>
          <view v-else class="placeholder">请选择省/市/区(县)</view>
        </picker>
      </view>
      <view class="form-item">
        <text class="label">详细地址</text>
        <input class="input" placeholder="街道、楼牌号等信息" v-model="form.address" />
      </view>
      <view class="form-item">
        <label class="label">设为默认地址</label>
        <switch
          @change="onSwitchChange"
          class="switch"
          color="#27ba9b"
          :checked="form.isDefault === 1"
        />
      </view>
    </form>
  </view>
  <!-- 提交按钮 -->
  <button @tap="onSubmit" class="button">保存并使用</button>
</template>

<style lang="scss">
page {
  background-color: #f4f4f4;
}

.content {
  margin: 20rpx 20rpx 0;
  padding: 0 20rpx;
  border-radius: 10rpx;
  background-color: #fff;

  .form-item,
  .uni-forms-item {
    display: flex;
    align-items: center;
    min-height: 96rpx;
    padding: 25rpx 10rpx 40rpx;
    background-color: #fff;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ddd;
    position: relative;
    margin-bottom: 0;

    // 调整 uni-forms 样式
    .uni-forms-item__content {
      display: flex;
    }

    .uni-forms-item__error {
      margin-left: 200rpx;
    }

    &:last-child {
      border: none;
    }

    .label {
      width: 200rpx;
      color: #333;
    }

    .input {
      flex: 1;
      display: block;
      height: 46rpx;
    }

    .switch {
      position: absolute;
      right: -20rpx;
      transform: scale(0.8);
    }

    .picker {
      flex: 1;
    }

    .placeholder {
      color: #808080;
    }
  }
}

.button {
  height: 80rpx;
  margin: 30rpx 20rpx;
  color: #fff;
  border-radius: 80rpx;
  font-size: 30rpx;
  background-color: #27ba9b;
}
</style>
