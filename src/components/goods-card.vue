<template>
  <div class="goods-card">
    <div class="cover">
      <img src="https://fmcat-images.oss-cn-hangzhou.aliyuncs.com/goods/wine.png" />
    </div>
    <div class="info-area">
      <div class="goods-name">杰克丹尼（Jack Daniel's）洋酒 美国田纳西州 威士忌 进口洋酒年货送礼</div>
      <div class="sku-info">700ml、无盒</div>
    </div>
  </div>
</template>

<script setup lang="ts">
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

.goods-card {
  display: flex;

  .cover {
    width: 200px;
    height: 200px;
    background-color: #f5f5f5;
    border-radius: 16px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
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
    }

    .sku-info {
      color: #999;
      @include ellipsis(1);
    }
  }
}
</style>
