<template>
  <div class="favorites-page">
    <div class="edit-bar">
      <div class="left-area">共10件商品</div>
      <div class="btn-edit">编辑</div>
    </div>
    <div class="favorites-list">
      <div class="card-item" v-for="i in 10">
        <goods-card />
      </div>
    </div>
    <div class="action-bar">全选</div>
  </div>
</template>

<script setup lang="ts">
import GoodsCard from '@/components/goods-card.vue';
</script>

<style scope lang="scss">
.favorites-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .edit-bar {
    height: 116px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 32px;
  }

  .favorites-list {
    flex: 1;
    overflow-y: auto;
    padding: 24px 32px;
  }

  .action-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 112px;
    padding: 0 32px 32px;
  }
}

.card-item {
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 0 20px 0 rgba(#000, 0.1);
  margin-bottom: 24px;
}
</style>
