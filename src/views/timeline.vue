<template>
  <div class="timeline-page">
    <view class="dynamic-panel">
      <dynamic-item
        v-for="(item, index) in trackList"
        :active="index === 0"
        :info="item"
        :last="index === trackList.length - 1"
      />
    </view>
  </div>
</template>

<script setup lang="ts">
import DynamicItem from '@/components/dynamic-item.vue';
const trackList = [
  {
    iconText: "收",
    title: "收货地址",
    time: "2019-06-01",
    stateDes: "杭州市滨江区长河街道研祥科技大厦A座1901室杭州市滨江区长河街道研祥科技大厦A座1901室杭州市滨江区长河街道研祥科技大厦A座1901室杭州市滨江区长河街道研祥科技大厦A座1901室杭州市滨江区长河街道研祥科技大厦A座1901室杭州市滨江区长河街道研祥科技大厦A座1901室杭州市滨江区长河街道研祥科技大厦A座1901室杭州市滨江区长河街道研祥科技大厦A座1901室",
  },
  {
    iconText: "收",
    title: "收货地址",
    time: "2019-06-01",
    stateDes: "杭州市滨江区长河街道研祥科技大厦A座1901室杭州市滨江区长河街道研祥科技大厦A座1901室杭州市滨江区长河街道研祥科技大厦A座1901室",
  },
  {
    iconText: "收",
    title: "收货地址",
    time: "2019-06-01",
    stateDes: "杭州市滨江区长河街道研祥科技大厦A座1901室杭州市滨江区长河街道研祥科技大厦A座1901室杭州市滨江区长河街道研祥科技大厦A座1901室杭州市滨江区长河街道研祥科技大厦A座1901室",
  },
  {
    iconText: "收",
    title: "收货地址",
    time: "2019-06-01",
    stateDes: "杭州市滨江区长河街道研祥科技大厦A座1901室杭州市滨江区长河街道研祥科技大厦A座1901室",
  },
  {
    iconText: "收",
    title: "收货地址",
    time: "2019-06-01",
    stateDes: "杭州市滨江区长河街道研祥科技大厦A座1901室杭州市滨江区长河街道研祥科技大厦A座1901室杭州市滨江区长河街道研祥科技大厦A座1901室杭州市滨江区长河街道研祥科技大厦A座1901室杭州市滨江区长河街道研祥科技大厦A座1901室杭州市滨江区长河街道研祥科技大厦A座1901室",
  },
]
</script>

<style scope lang="scss">
.timeline-page{
  width: 100vw;
  height: 100vh;
  padding: 32px;
}
</style>
