<script setup>
import { onMounted, ref } from 'vue';

import { getCityWeatherDetails } from '@/api/getCityWeaterDetails';
import WeatherCard from '@/components/WeatherCard';

const favoritesCities = ref([]);

const isLoading = ref(true);

const fetchFavoriteCities = async (cities) => {
  await cities.map(({ city }) => getCityWeatherDetails(city)
    .then((cityWeather) => {
      const uId = Date.now();

      favoritesCities.value.push({ ...cityWeather, uId, isFavorite: true });
    }));
};

onMounted(async () => {
  const storedCities = JSON.parse(localStorage.getItem('favoriteCities') || '[]');

  await fetchFavoriteCities(storedCities).finally(() => {
    isLoading.value = false;
  });
});
</script>

<template>
  <div v-if="isLoading" class="loading">
    <p class="loading-text">Loading...</p>
  </div>
  <div v-else class="favorites-page-wrapper">
    <ul v-if="favoritesCities.length" class="favorites-page-wrapper-list">
      <li class="favorites-page-wrapper-list-item" v-for="weather in favoritesCities" :key="weather.city.id">
        <WeatherCard v-if="favoritesCities.length" :city-weather="weather" :show-forecast="true"/>
        <p v-else class="favorites-page-wrapper-empty-text">Favorite cities are not added</p>
      </li>
    </ul>
    <p v-else class="favorites-page-wrapper-empty-text">Favorite cities are not added</p>
  </div>
</template>

<style scoped lang="scss">
.favorites-page-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  &-list {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    &-item {
      margin: 0 25px 25px 0;
      list-style: none;
    }
  }

  &-empty-text {
    font-size: 35px;
    font-weight: bold;
    margin-top: 100px;
  }
}

.loading {
  display: flex;
  justify-content: center;

  &-text {
    font-size: 24px;
  }
}

</style>
