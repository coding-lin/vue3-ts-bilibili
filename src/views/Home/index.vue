<template>
  <!-- 头部组件 -->
  <AppHeader />
  <!-- 频道组件 -->
  <HomeChannel />
  <!-- 轮播图组件 -->
  <HomeSwipe />
</template>

<script setup lang="ts">
import AppHeader from '@/components/app-header.vue'
import HomeChannel from './components/home-channel.vue'
import HomeSwipe from './components/home-swipe.vue'
</script>
