<script setup>
import AddCityButton from './AddCityButton';
import AddCityInput from './AddCityInput';
import CardWrapper from '../common/CardWrapper';

defineProps({
  isAddingCity: Boolean,
  startAddingCity: Function,
  fetchWeather: Function,
});
</script>

<template>
  <CardWrapper>
    <transition name="fade" mode="out-in">
      <AddCityButton v-if="!isAddingCity" :start-adding-city="startAddingCity"/>
      <AddCityInput v-else :fetch-weather="fetchWeather"/>
    </transition>
  </CardWrapper>
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
