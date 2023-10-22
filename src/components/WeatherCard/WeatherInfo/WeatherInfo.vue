<script setup>
import { computed, ref, toRefs } from 'vue';

import DeleteIcon from '@/components/icons/DeleteIcon';
import WindIcon from '@/components/icons/WindIcon';
import TempIcon from '@/components/icons/TempIcon';
import FavoriteIcon from '@/components/icons/FavoriteIcon';
import Notification from '@/components/Notification';
import { getFormattedData } from '@/helpers/getFormattedData';
import { useNotification } from '@/composables/useNotification';
import WeatherChart from '../WeatherChart';

const props = defineProps({
  cityWeather: Object,
  deleteCard: Function,
});

const { cityWeather } = toRefs(props);

const {
  city, list, uId, isFavorite,
} = toRefs(cityWeather.value);

const {
  dt, weather, main, wind,
} = list.value[0];

const {
  showNotification, message, onClose, openNotification, closeNotification,
} = useNotification();

const formattedData = computed(() => getFormattedData(dt));

const toggleFavorite = (cityData, storedCities) => {
  if (storedCities.value.map(({ id }) => id).includes(cityData.id)) {
    storedCities.value = storedCities.value.filter(({ id }) => id !== cityData.id);
  } else {
    storedCities.value.push({ ...cityData, isFavorite: true });
  }

  localStorage.setItem('favoriteCities', JSON.stringify(storedCities.value));
};

const setFavorite = (cityData) => {
  const storedCities = ref(JSON.parse(localStorage.getItem('favoriteCities') || '[]'));

  if (!cityData.isFavorite && storedCities.value.length > 4) {
    openNotification(
      'More than 5 cities in favorites, please remove some favorite cities to add new',
      () => closeNotification(),
    );
  } else {
    toggleFavorite(cityData, storedCities);

    isFavorite.value = !isFavorite.value;
  }
};
</script>

<template>
  <div class="weather-info">
    <div class="weather-info-header">
      <button class="weather-info-header-favorite-button" @click="setFavorite({city: `${city.name}, ${city.country}`, id: city.id, isFavorite})">
        <FavoriteIcon :class="['weather-info-header-favorite-button-icon', isFavorite && 'favorite']" />
      </button>
      <button v-if="deleteCard" class="weather-info-header-del-button" @click="deleteCard(uId)">
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
  <teleport to="#app">
    <transition name="fade">
      <Notification v-if="showNotification" :message="message" :on-close="onClose" />
    </transition>
  </teleport>
</template>

<style scoped lang="scss">
.weather-info {
  padding: 10px;

  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

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

    &-favorite-button {
      width: 40px;
      height: 40px;
      background: none;
      border: none;
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      &-icon {
        fill: #0074E4;
      }

      &-icon.favorite {
        fill: red;
      }

      &-icon:hover {
        fill: red;
      }
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
