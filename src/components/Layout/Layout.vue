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
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #007bff, #00a8ff);

  .main-content {
    height: 100%;
    color: white;
    min-height: 100%;
  }
}

</style>
