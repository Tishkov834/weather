<script setup>
import { computed, toRefs } from 'vue';

import WeatherCard from '../WeatherCard';
import AddCityCard from '../AddCityCard';

const props = defineProps({
  weatherCards: Array,
  isAddingCity: Boolean,
  startAddingCity: Function,
  fetchWeather: Function,
  deleteCard: Function,
});

const { weatherCards } = toRefs(props);

const isAddCardShow = computed(() => weatherCards.value.length < 5);
</script>

<template>
  <div class="cards-wrapper">
    <ul class="cards-wrapper-list">
      <li class="cards-wrapper-list-card" v-for="weather in weatherCards" :key="weather.city.id">
        <WeatherCard :city-weather="weather" :delete-card="deleteCard" :show-forecast="false" />
      </li>
      <li class="cards-wrapper-list-card">
        <AddCityCard v-if="isAddCardShow" :is-adding-city="isAddingCity" :start-adding-city="startAddingCity" :fetch-weather="fetchWeather" />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.cards-wrapper {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  margin: 30px;
  padding: 0;

  &-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row;
    padding: 0;
    margin: 0;

    &-card {
      margin: 0 25px 25px 0;
      list-style: none;
    }
  }
}

</style>
