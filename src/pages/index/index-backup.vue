<script setup lang="ts">
// 备用方案：手动导入 uni-card 组件
import { UniCard } from '@dcloudio/uni-ui'
</script>

<template>
  <view class="index">
    <view>index</view>
    <!-- 使用手动导入的组件 -->
    <UniCard
      title="基础卡片"
      sub-title="副标题"
      extra="额外信息"
      thumbnail="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
    >
      <text>这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。</text>
    </UniCard>
  </view>
</template>

<style lang="scss"></style>