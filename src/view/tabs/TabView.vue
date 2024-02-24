<script setup lang="ts">
import { Tabbar, TabbarItem } from 'vant'
import { ref } from 'vue'
import { useRoute, useRouter, RouterView } from 'vue-router'

const curRoute = useRoute()
const router = useRouter()
const active = ref(curRoute.name as string)
</script>
<template>
  <!-- <div>{{ active }}</div> -->
  <RouterView />
  <Tabbar v-model="active">
    <TabbarItem
      name="home"
      icon="home-o"
      >首页</TabbarItem
    >
    <Tabbar-item
      name="order"
      icon="home-o"
      >订单</Tabbar-item
    >
    <Tabbar-item
      name="me"
      icon="home-o"
      >我</Tabbar-item
    >
  </Tabbar>
</template>
<style scoped>
.div {
  text-align: center;
}
</style>
