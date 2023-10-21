<script setup>
import { RouterView } from 'vue-router';

</script>

<template>
  <RouterView />
</template>

<style lang="scss">
@import "normalize.css";

body {
  margin: 0;
  height: 100%;
  background: linear-gradient(135deg, #007bff, #00a8ff);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
