<template>
  <div class="card-wrapper">
    <slot/>
  </div>
</template>

<style scoped lang="scss">
.card-wrapper {
  width: 300px;
  height: 500px;
  background: linear-gradient(180deg, #00a0ff, #00316c);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
}

</style>
