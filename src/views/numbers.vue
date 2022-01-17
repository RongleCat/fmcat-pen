<template>
  <div class="numbers-keyboard">
    <div class="keyboard-container">
      <div
        v-for="(number,index) in numbers"
        :key="number"
        class="item"
        :class="['num-nth-' + index]"
        @click="$emit('onInput', number)"
      >{{ number }}</div>
      <div v-if="hasDot" class="item dot gray" @click="$emit('onInput', '.')">.</div>
      <div v-else class="item empty gray" />
      <div class="item delete gray" @click="$emit('onDelete')" />
    </div>
  </div>
</template>

<script setup lang="ts">
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const hasDot = false;
</script>

<style scope lang="scss">
.numbers-keyboard {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.keyboard-container {
  display: grid;
  width: 100%;
  gap: 1px;
  background-color: #e6e6e6;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 120px);
  grid-template-areas:
    "a b c"
    "d e f"
    "g h i"
    "j k l";

  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    font-family: "DINPro-Bold";
    font-size: 36px;
    color: #666;
    &.gray {
      background-color: #f7f7f7;
    }

    &.num-nth-9 {
      grid-area: k;
    }

    &.delete {
      background-image: url("@/assets/images/icon_backspace.png");
      background-repeat: no-repeat;
      background-size: 60px 60px;
      background-position: center;
    }

    &.empty {
      pointer-events: none;
    }

    &:active {
      background-color: #e6e6e6;
    }
  }
}
</style>
