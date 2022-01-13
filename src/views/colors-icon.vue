<template>
  <div class="colors-icon">
    <div class="icon-container">
      <div class="icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scope lang="scss">
.colors-icon {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-container {
  width: 100px;
  height: 100px;
  position: relative;
  // overflow: hidden;
}

.icon {
  position: absolute;
  // top: -120px;
  // left: 120px;
  width: 100%;
  height: 100%;
  background-image: url("http://s1.billionbottle.com/w-admin-clover-node/img/new-logo.24989203.png");
  background-size: contain;
  filter: drop-shadow(0 120px 0 #09f)  drop-shadow(0 -120px 0 #f00) drop-shadow(-120px 0 0 #f66) drop-shadow(120px 0 0 #F9D269);
}
</style>
