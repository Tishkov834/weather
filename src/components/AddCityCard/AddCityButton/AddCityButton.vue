<script setup>
import AddIcon from '@/components/icons/AddIcon';

defineProps({
  startAddingCity: Function,
});

</script>

<template>
  <div class="add-button-wrapper">
    <button @click="startAddingCity" class="add-button-wrapper-button">
      <AddIcon class="add-button-wrapper-button-icon"/>
    </button>
    <span class="add-button-wrapper-text">Add new location</span>
  </div>
</template>

<style scoped lang="scss">
.add-button-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &-button {
    width: 80px;
    height: 80px;
    background: #00a8ff;
    border: none;
    border-radius: 50px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &-icon {
      width: 50px;
      height: 50px;
    }
  }

  &-button:hover {
    background: #00316c;
  }

  &-text {
    color: white;
    font-weight: bold;
  }
}

</style>
