<template>
  <view class="dynamic-item" :class="{ active, last }">
    <view class="time">
      {{ timeInfo.dateText }}
      <br />
      {{ timeInfo.timeText }}
    </view>
    <view class="icon-text">{{ info.iconText }}</view>
    <view class="details">
      <view class="title">{{ info.title }}</view>
      <view class="sub-title">{{ info.stateDes }}</view>
    </view>
  </view>
</template>

<script setup lang="ts">
import day from 'dayjs';

import { computed } from 'vue';

const { active, info, last } = defineProps({
  active: {
    type: Boolean,
    required: true,
    default: false,
  },
  info: {
    type: Object,
    required: true,
    default: () => ({}),
  },
  last: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const timeInfo = computed(() => {
  const { time } = info;
  const date = day(time).format('YYYY-MM-DD');
  const timeText = day(time).format('HH:mm');
  const dateText = day(time).format('MM-DD');
  return {
    date,
    timeText,
    dateText,
  };
});
</script>

<style lang="scss" scoped>
.dynamic-item {
  padding-bottom: 64px;
  display: flex;
  position: relative;

  .time {
    width: 92px;
    font-size: 24px;
    line-height: 28px;
    color: #989ba4;
    flex-shrink: 0;
  }

  .icon-text {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: #dbdbdb;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    font-size: 30px;
    line-height: 1;
    color: #fff;
    margin-right: 24px;
    position: relative;
    z-index: 5;
  }

  .details {
    display: flex;
    flex-direction: column;
    .title {
      font-size: 28px;
      line-height: 1;
      margin-bottom: 12px;
      color: #333;
    }
    .sub-title {
      font-size: 24px;
      line-height: 36px;
      color: #666;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 28px;
    left: 119px;
    bottom: 0;
    z-index: 2;
    width: 2px;
    background-color: #dbdbdb;
  }

  &.active {
    .icon-text {
      background-color: #1a1a1a;
    }
  }

  &.last {
    &::after {
      display: none;
    }
  }
}
</style>
