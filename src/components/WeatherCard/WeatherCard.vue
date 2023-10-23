<script setup>
import WeatherInfo from './WeatherInfo';
import CardWrapper from '../common/CardWrapper';

const props = defineProps({
  cityWeather: Object,
  showForecast: Boolean,
  deleteCard: Function,
});
</script>

<template>
  <CardWrapper>
    <WeatherInfo :city-weather="cityWeather" :delete-card="deleteCard" :show-forecast="showForecast"/>
  </CardWrapper>
</template>
