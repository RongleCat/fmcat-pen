<template>
  <div class="fixed-page">
    <div class="container">
      <div class="fixed-tag">标签</div>
    </div>
    <div class="fixed-tag">标签</div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scope lang="scss">
.fixed-page {
  width: 100vw;
  height: 100vh;
}

.container {
  width: 50vw;
  height: 50vw;
  background-color: #f0f0f0;
  transform: translate(50%, 50%);
}

.fixed-tag {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
</style>
