<script setup>
import { onMounted, ref } from 'vue';

import { getCities } from '@/api/getCities';

defineProps({
  fetchWeather: Function,
});

const query = ref('');

const cities = ref([]);

const inputRef = ref(null);

const handleInput = async () => {
  if (query.value.length >= 2) {
    setTimeout(async () => {
      cities.value = await getCities(query.value);
    }, 500);
  } else {
    cities.value = [];
  }
};

onMounted(() => {
  inputRef.value.focus();
});
</script>

<template>
  <div class="add-city-wrapper">
    <input v-model="query" @input="handleInput" placeholder="Enter city..." @keyup.enter="fetchWeather(query)" ref="inputRef" class="add-city-wrapper-input" />
    <ul v-if="cities.length" class="add-city-wrapper-list">
      <li v-for="city in cities" :key="city.id" @click="fetchWeather(city.name)" @keyup.enter="fetchWeather(city.name)" class="add-city-wrapper-list-item">
        {{ city.name + ', ' + city.sys.country }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.add-city-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &-input {
    width: 250px;
    height: 30px;
    border-radius: 20px;
    padding: 5px 8px;
    margin-top: 100px;
  }

  &-list {
    background: white;
    width: 250px;
    max-height: 150px;
    overflow: auto;
    color: black;
    list-style: none;
    padding: 10px 0;
    margin: 0;

    &-item {
      padding: 10px;
      cursor: pointer;
    }

    &-item:hover {
      background: #66ccff;
      color: white;
    }
  }
}

</style>
