<template>
  <div class="concise-dom-page">
    <!-- <div class="goods-area">
      <div class="goods" :style="goodsBg" />
      <div class="goods-pseudo" />
    </div>
    <div class="close" />
    <div class="text-bg">超级大礼</div> -->
  </div>
</template>

<script setup lang="ts">
const goodsBg = 'background-image: url(https://fmcat-images.oss-cn-hangzhou.aliyuncs.com/goods/wine.png), var(--goods-background)';
</script>

<style scope lang="scss">
.concise-dom-page {
  // 主页面顶部 2 个圆形附属背景
  --main-round-background: rgba(33, 29, 255, 0.16);

  // 主页面、加载页主背景
  --main-background: linear-gradient(
    180deg,
    #a5bdff 0%,
    #a2e0ff 69.19%,
    #f9ffd3 100%
  );

  // 左侧文字图片
  --text-png: url("https://images.billionbottle.com/billionbottle/mini-app/mall/mystery-box/box_text_bg.png");

  // 右上角盲盒图片
  --detail-box: url("https://images.billionbottle.com/billionbottle/mini-app/mall/mystery-box/detail_box.png");

  // 中间盲盒主体
  --box-body: url("https://images.billionbottle.com/billionbottle/mini-app/mall/mystery-box/box_body.png");

  // 中间盲盒打开光芒
  --box-body-light: url("https://images.billionbottle.com/billionbottle/mini-app/mall/mystery-box/box_light.png");

  // 中间盲盒盖子
  --box-body-cover: url("https://images.billionbottle.com/billionbottle/mini-app/mall/mystery-box/box_lid.png");

  // 底部信封渐变
  --mall-bar: repeating-linear-gradient(
    -45deg,
    red 0,
    red 1em,
    #fff 0,
    #fff 2em,
    #58a 0,
    #58a 3em,
    #fff 0,
    #fff 4em
  );

  // 商品展示橱窗背景
  --goods-background: linear-gradient(
    180deg,
    rgba(206, 239, 255, 0.8) 0%,
    rgba(216, 255, 251, 0.8) 49.36%,
    rgba(253, 255, 141, 0.8) 100%
  );

  --demo-wine: url("https://fmcat-images.oss-cn-hangzhou.aliyuncs.com/goods/wine.png");

  --text-color: #09f;

  font-size: 12px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 50vh;
  background-color: #a5bdff;
  background-image: var(--mall-bar), var(--box-body-cover),
    var(--box-body-light), var(--box-body), var(--detail-box), var(--text-png),
    radial-gradient(var(--main-round-background), transparent 70%, transparent),
    radial-gradient(var(--main-round-background), transparent 70%, transparent),
    var(--main-background);
  background-size: 100vw 6px, 240px 240px, 240px 240px, 240px 240px, 180px 180px,
    90px 715px, 585px 585px, 570px 570px, 100% 100%;
  background-position: bottom 0 right 0, center 120px, center 120px,
    center 120px, 195px 0, 0 0, -205px -105px, 138px -200px, center;
  background-repeat: no-repeat;

  .goods-area {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
  }

  .goods {
    width: 100px;
    height: 100px;
    background-size: 100px 100px;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 8px;
    margin-bottom: 20px;
  }

  .goods-pseudo {
    width: 100px;
    height: 100px;
    background-size: 100px 100px;
    border-radius: 8px;
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
    margin-left: 10px;

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      width: 100%;
      height: 100%;
      content: "";
      display: block;
      background-image: var(--goods-background);
    }

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      content: "";
      display: block;
      background-image: var(--demo-wine);
      background-size: contain;
    }
  }

  .close {
    border: 4px solid currentColor;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    color: #f00;
    position: relative;
    margin-bottom: 20px;

    &::after,
    &::before {
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      content: "";
      width: 4px;
      height: 40px;
      background-color: currentColor;
      border-radius: 2px;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }

  .text-bg {
    font-size: 32px;
    font-weight: bold;
    position: relative;
    z-index: 0;
    color: #fff;
    text-shadow: 0 0 5px rgba(var(--text-color), 0.6);

    &::after {
      display: block;
      content: "";
      position: absolute;
      z-index: -1;
      bottom: 0;
      left: 10%;
      width: 80%;
      height: 40%;
      background-color: #09f;
    }
  }
}
</style>
