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
import PageSkeleton from './components/PageSkeleton.vue'
import { useGuessList } from '@/composables'

const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
  bannerList.value = bannerList.value.map((item) => ({
    ...item,
    imgUrl: item.imgUrl.replace(/^http:/, 'https:'),
  }))
}

const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
  // console.log(categoryList.value)
  categoryList.value = categoryList.value.map((item) => ({
    ...item,
    icon: item.icon.replace(/^http:/, 'https:'),
  }))
}

const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
  hotList.value = hotList.value.map((item) => ({
    ...item,
    pictures: item.pictures.map((pic) => pic.replace(/^http:/, 'https:')),
  }))
  // console.log(hotList.value)
}

const isLoading = ref(false)

onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  isLoading.value = false
})

// const guessRef = ref<XtxGuessInstance>()
// const onScrolltolower = () => {
//   console.log('滚动到底部')
//   nextTick(() => {
//     guessRef.value?.getMore()
//   })
// }
const { guessRef, onScrolltolower } = useGuessList()
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
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <XtxSwiper :list="bannerList" />
      <CategoryPanel :list="categoryList" />
      <HotPanel :list="hotList" />
      <XtxGuess ref="guessRef" />
    </template>
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
