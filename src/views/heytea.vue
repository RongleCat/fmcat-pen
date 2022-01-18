<template>
  <div class="heytea-page">
    <div class="content">
      <div class="banner-layer">
        <div class="banner-area" @click="bannerClick"></div>
      </div>
      <div class="main-layer">
        <div class="bottom-area" @click="mainAreaClick">
          <div class="user-enter">
            <div class="user-info">
              <div class="avatar" />
              <div class="details">
                <div class="name">花裤衩。</div>
                <div class="sub">
                  已解锁周一免配送费1项特权
                  <i class="iconfont arrow_right"></i>
                </div>
              </div>
            </div>
            <div class="line" />
            <div class="qr-area" title="会员码" />
          </div>
          <div class="order-area">
            <div class="channel-list">
              <div class="item scene" data-sub="下单免排队" data-main="门店自取" />
              <div class="line" />
              <div class="item take" data-sub="无接触配送，送喜到家" data-main="外卖" />
            </div>
            <div class="spell-bar" data-main="一起喝" data-sub="好友一起点，分账更方便" />
          </div>
          <div class="card-area">
            <div class="item" data-main="喜茶百货" data-sub="低糖好喝果汁茶" />
            <div class="item" data-main="阿喜团餐" data-sub="企业欢聚享福利" />
            <div class="item" data-main="送喜卡" data-sub="冬日好礼即刻送" />
          </div>
        </div>
      </div>
    </div>
    <div class="tabbar">
      <div class="item active" title="点单">
        <i class="iconfont drunk_default" />
      </div>
      <div class="item" title="消息">
        <i class="iconfont message" />
      </div>
      <div class="item" title="我的">
        <i class="iconfont setting" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
function bannerClick() {
  alert('我是banner');
}
function mainAreaClick() {
  alert('主要区域被点击');
}
</script>

<style scope lang="scss">
.heytea-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  position: relative;
  flex: 1;
  display: flex;
}

.tabbar {
  height: 100px;
  display: flex;
  border-top: 1px solid #dcdcdc;
  background-color: #f8f8f8;
  .item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #999;

    .iconfont {
      font-size: 40px;
    }

    &::after {
      content: attr(title);
      font-size: 18px;
      padding-top: 4px;
    }

    &.active {
      color: #333;
    }
  }
}

.banner-layer {
  flex: 1;
  display: flex;
  flex-direction: column;
  .banner-area {
    flex: 0.4;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("https://bb-test1.oss-cn-hangzhou.aliyuncs.com/public/508b47da419f19fc828b1a1a00ae8337_1080x960.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  &::after {
    content: "";
    display: block;
    flex: 0.6;
    background-image: linear-gradient(180deg, #ebebeb, #fff);
  }
}

.main-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  pointer-events: none;

  &::before {
    display: block;
    content: "";
    flex: 0.383;
  }

  .bottom-area {
    flex: 0.617;
    padding: 0 30px;
    pointer-events: auto;
    display: flex;
    flex-direction: column;
  }
}

.user-enter {
  flex: 0.178;
  border-radius: 16px;
  background-color: #fff;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  .user-info {
    flex: 1;
    display: flex;
    padding-left: 24px;
    .avatar {
      width: 80px;
      height: 80px;
      flex-shrink: 0;
      border-radius: 50%;
      background-image: url("https://fmcat-images.oss-cn-hangzhou.aliyuncs.com/head.png");
      background-size: cover;
      margin-right: 16px;
    }

    .name {
      font-size: 28px;
      font-weight: bold;
      display: inline-flex;
      align-items: center;
      &::after {
        content: "";
        display: inline-block;
        width: 66px;
        height: 28px;
        background-image: url("@/assets/images/heytea/vip.png");
        background-size: contain;
      }
    }

    .sub {
      font-size: 24px;
      .iconfont {
        font-size: 24px;
      }
    }
  }

  .line {
    width: 2px;
    height: 64px;
    background-color: #e9e9e9;
  }

  .qr-area {
    width: 130px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("@/assets/images/heytea/qr.png");
    background-repeat: no-repeat;
    background-size: 40px 40px;
    background-position: top 4px center;
    padding-top: 50px;

    &::after {
      content: attr(title);
      font-size: 24px;
    }
  }
}

.order-area {
  flex: 0.482;
  border-radius: 16px;
  background-color: #fff;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  .channel-list {
    flex: 0.75;
    display: flex;
    align-items: center;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 1;
      padding-top: 110px;
      background-size: 110px auto;
      background-repeat: no-repeat;
      background-position: center 0;

      &::before {
        content: attr(data-main);
        font-size: 36px;
        font-weight: bold;
        padding: 12px;
      }

      &::after {
        content: attr(data-sub);
        font-size: 24px;
        color: #666;
      }

      &.scene {
        background-image: url("@/assets/images/heytea/icon_scene.png");
      }
      &.take {
        background-image: url("@/assets/images/heytea/icon_take.png");
      }
    }
    .line {
      width: 2px;
      height: 83%;
      background-color: #f8f8f8;
    }
  }
  .spell-bar {
    flex: 0.25;
    border-top: 1px solid #f8f8f8;
    background-image: url("@/assets/images/heytea/spell.png");
    background-repeat: no-repeat;
    background-size: 56px;
    background-position: 48px center;
    padding-left: 116px;
    padding-right: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &::before {
      content: attr(data-main);
      font-weight: bold;
      font-size: 30px;
    }

    &::after {
      content: attr(data-sub);
      font-size: 24px;
      color: #666;
    }
  }
}

.card-area {
  flex: 0.34;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 20px;
  .item {
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    background-color: #eee6df;
    padding: 16px;
    background-size: auto 53%;
    background-position: bottom 0 center;
    background-repeat: no-repeat;

    &::before {
      content: attr(data-main);
      font-size: 30px;
      line-height: 50px;
      font-weight: bold;
    }

    &::after {
      content: attr(data-sub);
      font-size: 22px;
      line-height: 32px;
      color: #999;
    }

    &:nth-child(1) {
      background-image: url("@/assets/images/heytea/card_01.png");
    }
    &:nth-child(2) {
      background-image: url("@/assets/images/heytea/card_02.png");
      background-color: #eee9de;
    }
    &:nth-child(3) {
      background-image: url("@/assets/images/heytea/card_03.png");
    }
  }
}
</style>
