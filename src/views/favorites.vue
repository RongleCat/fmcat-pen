<template>
  <div class="favorites-page">
    <div class="edit-bar">
      <div class="left-area">共10件商品</div>
      <div class="btn-edit" @click="editing = !editing">{{ editing ? '完成' : '编辑' }}</div>
    </div>
    <div class="favorites-list">
      <div class="card-item" v-for="item in dataList">
        <div class="choose-area" v-if="editing">
          <i class="iconfont check_circle_blank"></i>
        </div>
        <goods-card :editing="editing" :info="item" />
      </div>
    </div>
    <div class="action-bar" v-if="editing">全选</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import GoodsCard from '@/components/goods-card.vue';

const editing = ref(false);

const dataList = [
  {
    title: '杰克丹尼（Jack Daniel\'s）洋酒 美国田纳西州 威士忌 进口洋酒年货送礼',
    sku: '700ml、无盒',
    cover: 'https://fmcat-images.oss-cn-hangzhou.aliyuncs.com/goods/wine.png',
    tag: '整瓶酒',
  },
  {
    title: '杰克丹尼（Jack Daniel\'s）洋酒 美国田纳西州 威士忌 进口洋酒年货送礼',
    sku: '700ml、无盒',
    cover: 'https://fmcat-images.oss-cn-hangzhou.aliyuncs.com/goods/wine.png',
    tag: '整瓶酒',
  },
  {
    title: '杰克丹尼（Jack Daniel\'s）洋酒 美国田纳西州 威士忌 进口洋酒年货送礼',
    sku: '700ml、无盒',
    cover: 'https://fmcat-images.oss-cn-hangzhou.aliyuncs.com/goods/wine.png',
    tag: '',
  },
  {
    title: '杰克丹尼（Jack Daniel\'s）洋酒 美国田纳西州 威士忌 进口洋酒年货送礼',
    sku: '700ml、无盒',
    cover: 'https://fmcat-images.oss-cn-hangzhou.aliyuncs.com/goods/wine.png',
    tag: '分享瓶',
  },
  {
    title: '杰克丹尼（Jack Daniel\'s）洋酒 美国田纳西州 威士忌 进口洋酒年货送礼',
    sku: '700ml、无盒',
    cover: 'https://fmcat-images.oss-cn-hangzhou.aliyuncs.com/goods/wine.png',
    tag: '整瓶酒',
  },
  {
    title: '杰克丹尼（Jack Daniel\'s）洋酒 美国田纳西州 威士忌 进口洋酒年货送礼',
    sku: '700ml、无盒',
    cover: 'https://fmcat-images.oss-cn-hangzhou.aliyuncs.com/goods/wine.png',
    tag: '整瓶酒',
  },
  {
    title: '杰克丹尼（Jack Daniel\'s）洋酒 美国田纳西州 威士忌 进口洋酒年货送礼',
    sku: '700ml、无盒',
    cover: 'https://fmcat-images.oss-cn-hangzhou.aliyuncs.com/goods/wine.png',
    tag: '整瓶酒',
  },
  {
    title: '杰克丹尼（Jack Daniel\'s）洋酒 美国田纳西州 威士忌 进口洋酒年货送礼',
    sku: '700ml、无盒',
    cover: 'https://fmcat-images.oss-cn-hangzhou.aliyuncs.com/goods/wine.png',
    tag: '整瓶酒',
  },
  {
    title: '杰克丹尼（Jack Daniel\'s）洋酒 美国田纳西州 威士忌 进口洋酒年货送礼',
    sku: '700ml、无盒',
    cover: 'https://fmcat-images.oss-cn-hangzhou.aliyuncs.com/goods/wine.png',
    tag: '整瓶酒',
  },
  {
    title: '杰克丹尼（Jack Daniel\'s）洋酒 美国田纳西州 威士忌 进口洋酒年货送礼',
    sku: '700ml、无盒',
    cover: 'https://fmcat-images.oss-cn-hangzhou.aliyuncs.com/goods/wine.png',
    tag: '整瓶酒',
  },
];

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

    .btn-edit {
      padding: 8px 16px;
      font-size: 24px;
      border: 1px solid #ccc;
      border-radius: 8px;
    }
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
  display: flex;

  .choose-area{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    flex-shrink: 0;
    padding-right: 24px;

    .iconfont{
      font-size: 48px;
      color: #999;
    }
  }
}
</style>
