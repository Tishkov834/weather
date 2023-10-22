<template>
  <div class="not-found-wrapper">
    <div class="not-found-wrapper-image">
      <img src="../assets/images/not-found.png" alt="Not found" class="not-found-wrapper-image-png"/>
    </div>
    <div class="not-found-wrapper-content">
      <h1>404</h1>
      <p >Page Not Found</p>
      <router-link to="/">
        <span>Go Home</span>
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.not-found-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

</style>
