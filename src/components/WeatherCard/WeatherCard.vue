<script setup>
import WeatherInfo from './WeatherInfo';
import CardWrapper from '../common/CardWrapper';

const props = defineProps({
  cityWeather: Object,
  deleteCard: Function,
});
</script>

<template>
  <CardWrapper>
    <WeatherInfo :city-weather="cityWeather" :delete-card="deleteCard"/>
  </CardWrapper>
</template>
