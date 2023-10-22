<script setup>
defineProps({
  message: String,
  onClose: Function,
});

</script>

<template>
  <div class="notification-wrapper">
    <p class="notification-wrapper-text">{{ message }}</p>
    <button class="notification-wrapper-button" @click="onClose">Close</button>
  </div>
</template>

<style scoped lang="scss">
.notification-wrapper {
  position: fixed;
  top: 5px;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  z-index: 50;
  padding: 5px 0;

  &-text {
    font-size: 18px;
    margin-right: 20px;
  }

  &-button {
    padding: 10px 20px;
    background: #0074E4;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
  }

  .notification-wrapper-button:hover {
    background: #0054a4;
  }
}

</style>
