<script setup>
import Header from '@/components/Header';
</script>

<template>
  <div class="layout-wrapper">
    <Header />
    <div class="main-content">
      <router-view/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout-wrapper {
  height: 100%;
}

.main-content {
  background: linear-gradient(135deg, #007bff, #00a8ff);
  padding: 20px;
  color: white;
  height: 100%;
}
</style>
