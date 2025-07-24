<script setup lang="ts">
// import XtxSwiper from '@/components/XtxSwiper.vue';
import { getHomeBannerAPI } from '@/services/home'
import HotPanel from './components/HotPanel.vue'
import CustomNavbar from './components/CustomNavbar.vue'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import CategoryPanel from './components/CategoryPanel.vue'
import XtxGuess from '@/components/XtxGuess.vue'
import type { XtxGuessInstance } from '@/types/component'
import { nextTick } from 'vue'

const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}

onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
  getHomeHotData()
})

const guessRef = ref<XtxGuessInstance>()
const onScrolltolower = () => {
  console.log('滚动到底部')
  nextTick(() => {
    guessRef.value?.getMore()
  })
}
const isTriggered = ref(false)

const onRefresherrefresh = async () => {
  // console.log('刷新')
  isTriggered.value = true
  guessRef.value?.reset()
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotData(),
    guessRef.value?.getMore(),
  ])
  // 刷新完成后，需要手动关闭刷新动画
  isTriggered.value = false
}
</script>

<template>
  <CustomNavbar />
  <scroll-view
    refresher-enabled
    @refresherrefresh="onRefresherrefresh"
    :refresher-triggered="isTriggered"
    @scrolltolower="onScrolltolower"
    class="scrollview"
    scroll-y
  >
    <XtxSwiper :list="bannerList" />
    <CategoryPanel :list="categoryList" />
    <HotPanel :list="hotList" />
    <XtxGuess ref="guessRef" />
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scrollview {
  flex: 1;
}
</style>
