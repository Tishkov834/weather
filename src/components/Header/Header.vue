<script setup>
import Menu from '@/components/Menu';
</script>

<template>
  <div class="header-wrapper">
    <div class="header-wrapper-logo">
      <img src="../../assets/images/logo.png" alt="logo" class="header-wrapper-logo-img">
    </div>
    <Menu/>
  </div>
</template>

<style scoped lang="scss">
.header-wrapper {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333;

  &-logo {
    width: 50px;
    height: 50px;
    padding: 10px;

    &-img {
      height: 100%;
    }
  }
}
</style>
