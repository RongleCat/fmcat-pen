<template>
  <div class="goods-card">
    <div class="cover" :style="coverStyle" />
    <div class="info-area">
      <div class="goods-name" :class="{ 'has-tag': info.tag }" :data-tag="info.tag">{{ info.title }}</div>
      <div class="sku-info">{{ info.sku }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const { info } = defineProps({
  info: {
    default: () => ({}),
    type: Object,
    required: true,
  }
});

const coverStyle = computed(() => {
  const { cover } = info;
  if (cover) {
    return `background-image: url(${cover}), var(--goods-background)`;
  }
  return 'var(--goods-background)';
});


</script>

<style scope lang="scss">
@mixin ellipsis($lineCount: 1) {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: $lineCount;
  -webkit-box-orient: vertical;
  word-break: break-all;
}

:root {
  // 商品展示橱窗背景
  --goods-background: linear-gradient(
    180deg,
    rgba(206, 239, 255, 0.8) 0%,
    rgba(216, 255, 251, 0.8) 49.36%,
    rgba(253, 255, 141, 0.8) 100%
  );
}

.goods-card {
  display: flex;

  .cover {
    width: 200px;
    height: 200px;
    background-image: var(--goods-background);
    border-radius: 16px;
    overflow: hidden;
    flex-shrink: 0;
    background-size: cover;
  }

  .info-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 16px;
    font-size: 28px;

    .goods-name {
      color: #333;
      font-weight: bold;
      @include ellipsis(2);

      &.has-tag::before {
        content: attr(data-tag);
        display: inline-block;
        border-radius: 4px;
        font-size: 18px;
        line-height: 32px;
        margin-right: 8px;
        vertical-align: 5px;
        padding: 0 6px;
        background: linear-gradient(244.15deg, #e4e3ff 34.53%, #c8c5ff 98.99%);
        color: #443574;
      }
    }

    .sku-info {
      color: #999;
      @include ellipsis(1);
    }
  }
}
</style>
