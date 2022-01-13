<script setup lang="ts">
import { RouteRecordRaw } from 'vue-router';
import { routes } from '@/router';
const filteredRoutes = routes.filter((route: RouteRecordRaw) => route.path !== '/');
</script>

<template>
  <div class="routes">
    <div class="item" v-for="item in filteredRoutes">
      <router-link :to="item.path">{{ item?.meta?.title ?? '' }}</router-link>
    </div>
  </div>
</template>

<style scope lang="scss">
.routes {
  padding: 12px;
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px;
    height: 48px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;

    > a {
      color: #09f;
      text-decoration: none;
      display: block;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
