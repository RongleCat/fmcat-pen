<template>
  <div class="theme-page" :style="variableStyle">
    <div class="icon-container">
      <div class="icon" />
    </div>

    <div class="btn-list">
      <div
        v-for="(item,index) in colors"
        class="btn-item"
        :class="{ active: currentIndex === index }"
        @click="currentIndex = index"
      >{{ item }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
const colors = ['#0099ff', '#ff6666', '#ffcc00', '#00cc99', '#663399', '#ff9900', '#ff00ff', '#00ff00', '#0066ff', '#cc00ff', '#ff6600', '#ff0000', '#666666', '#999999', '#cccccc',];
const currentIndex = ref(0);

const currentColor = computed(() => {
  return colors[currentIndex.value];
});

const variableStyle = computed(() => {
  const rgb = currentColor.value.replace('#', '');

  const r = parseInt(`0x${rgb.substring(0, 2)}`, 16);
  const g = parseInt(`0x${rgb.substring(2, 4)}`, 16);
  const b = parseInt(`0x${rgb.substring(4, 6)}`, 16);

  return `--r: ${r}; --g: ${g}; --b: ${b};`;
  // return;
});
</script>

<style scope lang="scss">
@function theme-rgba($a: 1) {
  @return rgba(var(--r), var(--g), var(--b), $a);
}

:root {
  --r: 0;
  --g: 0;
  --b: 0;
}

.theme-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  padding-top: 50px;
  align-items: center;
  flex-direction: column;
}

.icon-container {
  width: 100px;
  height: 100px;
  position: relative;
  overflow: hidden;
  margin-bottom: 50px;
}

.icon {
  position: absolute;
  top: -120px;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("http://s1.billionbottle.com/w-admin-clover-node/img/new-logo.24989203.png");
  background-size: contain;
  filter: drop-shadow(0 120px 0 theme-rgba());
}

.btn-list {
  width: 100%;
  display: grid;
  padding: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 50px;
  gap: 12px;

  .btn-item {
    height: 100%;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;

    &.active {
      color: theme-rgba();
      border-color: theme-rgba();
    }
  }
}
</style>
