<script setup>
defineProps({
  message: String,
  onConfirm: Function,
  onCancel: Function,
});

</script>

<template>
  <div class="modal">
    <div class="modal-content">
      <p class="modal-content-text">{{ message }}</p>
      <button class="modal-content-confirm-button" @click="onConfirm">Yes</button>
      <button class="modal-content-cancel-button" @click="onCancel">No</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;

  &-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    text-align: center;

    &-text {
      margin: 0 0 20px;
    }

    &-confirm-button {
      background-color: #4caf50;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;
      margin-right: 10px;
    }

    &-cancel-button {
      background-color: #f44336;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;
    }
  }
}

</style>
