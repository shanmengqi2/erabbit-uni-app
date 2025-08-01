// /src/pages/hot/hot.vue
<script setup lang="ts">
import { getHotRecommendAPI } from '@/services/hot'
import type { SubTypeItem } from '@/types/hot'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
// 热门推荐页 标题和url
const hotMap = [
  { type: '1', title: '特惠推荐', url: '/hot/preference' },
  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '3', title: '一站买全', url: '/hot/oneStop' },
  { type: '4', title: '新鲜好物', url: '/hot/new' },
]

// 当前热门推荐信息
const hotItem = ref<typeof hotMap[0] | null>(null)
const bannerPicture = ref('')
const subTypes = ref<SubTypeItem[]>([])
const activeIndex = ref(0)

const getHotRecommendData = async () => {
  if (!hotItem.value) {
    console.error('hotItem is null, cannot load data')
    return
  }
  const res = await getHotRecommendAPI(hotItem.value.url, {
    page: import.meta.env.DEV ? 30 : 1,
    pageSize: 10,
  })
  bannerPicture.value = res.result.bannerPicture
  subTypes.value = res.result.subTypes
}

onLoad((query) => {
  // 从页面参数中获取 type
  const type = query?.type
  if (!type) {
    console.error('Missing type parameter')
    return
  }

  // 查找对应的热门推荐信息
  const foundItem = hotMap.find((item) => item.type === type)
  if (!foundItem) {
    console.error('Invalid type parameter:', type)
    return
  }

  hotItem.value = foundItem
  uni.setNavigationBarTitle({
    title: foundItem.title,
  })

  getHotRecommendData()
})

const onScrolltolower = async () => {
  // console.log('滚动到底部')
  if (!hotItem.value) {
    console.error('hotItem is undefined, cannot load more data')
    return
  }
  const currentSubType = subTypes.value[activeIndex.value]
  if (currentSubType.goodsItems.page >= currentSubType.goodsItems.pages) {
    uni.showToast({ icon: 'none', title: '没有更多数据了' })
    return
  }
  currentSubType.goodsItems.page++
  const res = await getHotRecommendAPI(hotItem.value.url, {
    page: currentSubType.goodsItems.page,
    pageSize: currentSubType.goodsItems.pageSize,
    subtype: currentSubType.id,
  })
  currentSubType.goodsItems.items = [
    ...currentSubType.goodsItems.items,
    ...res.result.subTypes[activeIndex.value].goodsItems.items,
  ]
}
</script>

<template>
  <view class="viewport">
    <!-- 推荐封面图 -->
    <view class="cover">
      <image :src="bannerPicture"></image>
    </view>
    <!-- 推荐选项 -->
    <view class="tabs">
      <text
        v-for="(item, index) in subTypes"
        :key="item.id"
        class="text"
        :class="{ active: index === activeIndex }"
        @tap="activeIndex = index"
      >
        {{ item.title }}
      </text>
    </view>
    <!-- 推荐列表 -->
    <scroll-view
      v-for="(item, index) in subTypes"
      :key="item.id"
      v-show="index === activeIndex"
      scroll-y
      class="scroll-view"
      @scrolltolower="onScrolltolower"
    >
      <view class="goods">
        <navigator
          hover-class="none"
          class="navigator"
          v-for="goods in item.goodsItems.items"
          :key="goods.id"
          :url="`/pages/goods/goods?id=${goods.id}`"
        >
          <image class="thumb" :src="goods.picture"></image>
          <view class="name ellipsis">{{ goods.name }}</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">{{ goods.price }}</text>
          </view>
        </navigator>
      </view>
      <view class="loading-text">{{
        item.goodsItems.page >= item.goodsItems.pages ? '没有更多了' : '正在加载...'
      }}</view>
    </scroll-view>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  background-color: #f4f4f4;
}
.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 180rpx 0 0;
  position: relative;
}
.cover {
  width: 750rpx;
  height: 225rpx;
  border-radius: 0 0 40rpx 40rpx;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
}
.scroll-view {
  flex: 1;
}
.tabs {
  display: flex;
  justify-content: space-evenly;
  height: 100rpx;
  line-height: 90rpx;
  margin: 0 20rpx;
  font-size: 28rpx;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 5rpx rgba(200, 200, 200, 0.3);
  color: #333;
  background-color: #fff;
  position: relative;
  z-index: 9;
  .text {
    margin: 0 20rpx;
    position: relative;
  }
  .active {
    &::after {
      content: '';
      width: 40rpx;
      height: 4rpx;
      transform: translate(-50%);
      background-color: #27ba9b;
      position: absolute;
      left: 50%;
      bottom: 24rpx;
    }
  }
}
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx 20rpx;
  .navigator {
    width: 345rpx;
    padding: 20rpx;
    margin-top: 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }
  .thumb {
    width: 305rpx;
    height: 305rpx;
  }
  .name {
    height: 88rpx;
    font-size: 26rpx;
  }
  .price {
    line-height: 1;
    color: #cf4444;
    font-size: 30rpx;
  }
  .symbol {
    font-size: 70%;
  }
  .decimal {
    font-size: 70%;
  }
}

.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0 50rpx;
}
</style>
