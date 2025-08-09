<script setup lang="ts">
import CartMain from './components/CartMain.vue'
const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<template>
  <CartMain :paddingBottom="safeAreaInsets!.bottom" />
</template>
