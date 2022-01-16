<template>
  <div class="page-lottery">
    <div class="machine-container">
      <div class="title">
        <span>百瓶抽奖</span>
      </div>
      <div class="machine-main">
        <div
          v-for="(item,index) in contents"
          :key="index"
          class="item"
          :class="[`item-${index + 1}`, index === current ? 'active' : '']"
        >
          <div class="content">{{ item }}</div>
        </div>
        <div class="item lottery" :class="{ disabled: lock }" @click="startLottery" />
      </div>
      <div v-show="flashing" class="flash-layer" />
      <div v-show="!flashing" class="flash-layer flash-2" />

      <div class="plug-gold" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const contents = [
  '5个百瓶积分',
  '10个代币',
  '10个百瓶积分',
  '',
  '100个代币',
  '50个百瓶积分',
  '30个代币',
  '',
]

let flashTimer: NodeJS.Timer;
let loopTimer: NodeJS.Timer;
const current = ref(-1);
const flashing = ref(true);
const lock = ref(false)
const showGetPopup = ref(false)
const countCurrent = ref(0)

function startFlash() {
  flashTimer = setInterval(() => {
    flashing.value = !flashing.value;
  }, 200);
}
// 开始抽奖
async function startLottery() {
  if (lock.value) {
    return;
  }
  lock.value = true;

  let index = Math.floor(Math.random() * 10);
  countCurrent.value = 0;
  current.value = 0;
  startFlash();
  startLoop(16 + index);
}
// 控制循环播放
function startLoop(count: number) {
  if (countCurrent.value === count) {
    clearTimeout(loopTimer);
    setTimeout(() => {
      lotteryEnd();
    }, 500);
    return;
  }
  countCurrent.value += 1;
  const point1 = Math.ceil(count * 0.3);
  const point2 = Math.ceil(count * 0.65);
  let speed = 100;
  if (countCurrent.value <= point1) {
    speed += (point1 - countCurrent.value) * 30;
  }
  if (countCurrent.value > point2) {
    speed += (countCurrent.value - point2) * 30;
  }
  clearTimeout(loopTimer);
  loopTimer = setTimeout(() => {
    current.value += 1;
    if (current.value > 7) {
      current.value = 0;
    }
    startLoop(count);
  }, speed);
}
// 抽奖结束
function lotteryEnd() {
  showGetPopup.value = true;
  clearTimeout(loopTimer);
  const goods = contents[current.value];
  alert(goods?.length ? `恭喜您获得${goods}` : '谢谢惠顾');
  lock.value = false;
  clearInterval(flashTimer);
}

</script>

<style lang="scss" scoped>
.page-lottery {
  width: 100vw;
  min-height: 100vh;
  overflow-y: auto;
  background-image: url("@/assets/images/lottery/main_bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.machine-container {
  position: relative;
  width: 750px;
  height: 973px;
  background-image: url("@/assets/images/lottery/machine_bg.png");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  padding: 267px 97px 148px 97px;

  .title {
    height: 210px;
    line-height: 1;
    position: absolute;
    top: 0;
    width: 100%;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(#fff, 0.75);
    font-size: 30px;
    .crystal-num {
      background-image: url("@/assets/images/lottery/crystal.png");
      background-repeat: no-repeat;
      background-size: 48px;
      background-position: 24px center;
      padding-left: 76px;
      font-size: 48px;
      color: rgba(#fff, 0.9);
      font-weight: bold;
    }
  }

  .machine-main {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 8px;
    grid-template-areas:
      "a b c"
      "h i d"
      "g f e";
    .item {
      background-image: url("@/assets/images/lottery/item_bg.png");
      background-repeat: no-repeat;
      background-size: 100%;
      transition: all 0.2s;
      display: flex;
      border-radius: 32px;
      .content {
        flex: 1;
        background-size: 170px 88px;
        background-position: center 23px;
        background-repeat: no-repeat;
        padding-top: 123px;
        font-size: 24px;
        color: #914b23;
        text-align: center;
      }

      &.lottery {
        background-image: url("@/assets/images/lottery/lucky_draw_text.png"),
          url("@/assets/images/lottery/item_bg_start.png");
        background-size: 94px 101px, 100%;
        background-repeat: no-repeat;
        background-position: center;
      }

      $areas: (a, b, c, d, e, f, g, h, i);
      @for $i from 1 through length($areas) {
        &:nth-child(#{$i}) {
          grid-area: nth($areas, $i);
        }
      }

      $covers: (
        "@/assets/images/lottery/integral_5.png",
        "@/assets/images/lottery/crystal_10.png",
        "@/assets/images/lottery/integral_10.png",
        "@/assets/images/lottery/thank_text.png",
        "@/assets/images/lottery/crystal_100.png",
        "@/assets/images/lottery/integral_50.png",
        "@/assets/images/lottery/crystal_30.png",
        "@/assets/images/lottery/thank_text.png"
      );

      @for $i from 1 through length($covers) {
        &.item-#{$i} {
          .content {
            background-image: url(nth($covers, $i));
          }
        }
      }

      &.disabled {
        filter: brightness(0.7) grayscale(0.2);
        pointer-events: none;
      }

      &.active {
        background-image: url("@/assets/images/lottery/item_bg_active.png");
      }
    }
  }

  .flash-layer {
    width: 658px;
    height: 628px;
    position: absolute;
    left: 46px;
    bottom: 96px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    z-index: 0;
    pointer-events: none;

    background-image: url("@/assets/images/lottery/machine_flash_1.png");
    &.flash-2 {
      background-image: url("@/assets/images/lottery/machine_flash_2.png");
    }
  }
}

.plug-gold {
  width: 141px;
  height: 255px;
  background-image: url("@/assets/images/lottery/gold.png");
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;
  top: 83px;
  left: 0;
}
</style>
