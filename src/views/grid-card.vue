<template>
  <div class="grid-card-demo">
    <div class="grid-area" :class="['count-' + cardList.length]">
      <div
        v-for="(item) in cardList"
        :key="item"
        class="item"
        :class="['area-' + item]"
        @click="add"
      >{{ item }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const cardList = ref([1]);

function add() {
  if (cardList.value.length === 8) {
    cardList.value = [1];
    return;
  }
  cardList.value.push(cardList.value.length + 1);
}
</script>

<style scope lang="scss">
.grid-card-demo {
  padding: 12px;
}

.grid-area {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 86px;
  gap: 8px;

  &.count-1 {
    grid-template-areas: "a a";
  }
  &.count-2 {
    grid-template-areas: "a b";
  }
  &.count-3 {
    grid-template-areas:
      "a b"
      "a c";
  }
  &.count-4 {
    grid-template-areas:
      "a b"
      "c d";
  }
  &.count-5 {
    grid-template-areas:
      "a b"
      "a c"
      "d e";
  }
  &.count-6 {
    grid-template-areas:
      "a b"
      "c d"
      "e f";
  }
  &.count-7 {
    grid-template-areas:
      "a b"
      "c d"
      "e e"
      "f g";
  }
  &.count-8 {
    grid-template-areas:
      "a b"
      "c h"
      "d h"
      "e h"
      "f g";
  }

  .item {
    background-color: #e0e0e0;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  $areas: a, b, c, d, e, f, g, h;

  @each $item in $areas {
    $index: index($areas, $item);
    .area-#{$index} {
      grid-area: $item;
    }
  }
}
</style>
