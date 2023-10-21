<script setup>
import { computed, toRefs } from 'vue';

import DeleteIcon from '@/components/icons/DeleteIcon';
import WindIcon from '@/components/icons/WindIcon';
import TempIcon from '@/components/icons/TempIcon';
import { getFormattedData } from '@/helpers/getFormattedData';
import WeatherChart from '../WeatherChart';

const props = defineProps({
  cityWeather: Object,
  deleteCard: Function,
});

const { city, list, uId } = toRefs(props.cityWeather);

const {
  dt, weather, main, wind,
} = list.value[0];

const formattedData = computed(() => getFormattedData(dt));
</script>

<template>
  <div class="weather-info">
    <div class="weather-info-header">
      <button class="weather-info-header-del-button" @click="deleteCard(uId)">
        <DeleteIcon class="weather-info-header-del-button-icon" />
      </button>
    </div>
    <div class="weather-info-body">
      <section class="weather-info-body-main">
        <img :src="`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`" alt="weather-icon"/>
        <div class="weather-info-body-main-text">
          <p class="weather-info-body-main-text-city">{{ `${city.name}, ${city.country}` }}</p>
          <span class="weather-info-body-main-text-day">{{formattedData}}</span>
        </div>
      </section>
      <section class="weather-info-body-temp">
        <p class="weather-info-body-temp-info">{{`${Math.round(main.temp)}\u00b0`}}</p>
        <span class="weather-info-body-temp-text">{{weather[0].description}}</span>
      </section>
      <section class="weather-info-body-info">
        <div class="weather-info-body-info-item">
          <WindIcon class="weather-info-body-info-item-icon"/>
          <span class="weather-info-body-info-item-text">Wind</span>
          <span class="weather-info-body-info-item-value">{{`${wind.speed} m/s`}}</span>
        </div>
        <div class="weather-info-body-info-item">
          <TempIcon class="weather-info-body-info-item-icon"/>
          <span class="weather-info-body-info-item-text">Feels like</span>
          <span class="weather-info-body-info-item-value">{{`${Math.round(main.feels_like)}\u00b0`}}</span>
        </div>
      </section>
    </div>
    <div class="weather-info-footer">
      <WeatherChart :weather-list="list" :id="uId"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.weather-info {
  padding: 10px;

  &-header {
    display: flex;
    justify-content: flex-end;

    &-del-button {
      width: 30px;
      height: 30px;
      background: lightgray;
      border: none;
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      &-icon {
        width: 20px;
        height: 20px;
      }
    }

    &-del-button:hover {
      background: darkgray;
    }
  }

  &-body {
    display: flex;
    flex-direction: column;

    &-main {
      display: flex;
      align-items: center;

      &-text {
        &-city {
          font-size: 18px;
          font-weight: bold;
          margin: 0;
          padding-bottom: 5px;
        }

        &-day {
          font-size: 14px;
        }
      }
    }

    &-temp {
      display: flex;
      flex-direction: column;
      align-items: center;

      &-info {
        font-size: 60px;
        font-weight: bold;
        margin: 0;
      }

      &-text {
        font-size: 14px;
      }
    }

    &-info {
      display: flex;
      justify-content: space-around;
      margin-top: 30px;

      &-item {
        display: flex;
        align-items: center;
        width: 50%;

        &-icon {
          width: 20px;
          height: 20px;
          margin-right: 5px;
        }

        &-text {
          font-size: 15px;
          margin-right: 12px;
        }

        &-value {
          font-size: 15px;
        }
      }
    }
  }

  &-footer{
    margin-top: 30px;
  }
}

</style>
