<script setup>
import { onMounted, ref, watch } from 'vue';

import { getCityWeatherDetails } from '@/api/getCityWeaterDetails';
import CardsList from '@/components/CardsList';
import { useConfirmModal } from '@/composables/useConfirmModal';
import ConfirmModal from '@/components/ConfirmModal';

const weatherCards = ref([]);

const isAddingCity = ref(false);

const fetchWeatherByCity = async (city) => {
  await getCityWeatherDetails(city)
    .then((cityWeather) => {
      const uId = Date.now();

      weatherCards.value.push({ ...cityWeather, uId });
    })
    .catch(() => {
      alert(`Can't find ${city}, please check city name`);
    })
    .finally(() => {
      isAddingCity.value = false;
    });
};

const startAddingCity = () => {
  isAddingCity.value = true;
};

const {
  showModal, message, onConfirm, onCancel, openModal, closeModal,
} = useConfirmModal();

const deleteCard = (cityId) => {
  openModal(
    'Do you want to delete this city?',
    () => {
      weatherCards.value = weatherCards.value.filter(({ uId }) => {
        console.log(cityId);
        return uId !== cityId;
      });

      closeModal();
    },
    () => {
      closeModal();
    },
  );
};

onMounted(async () => {
  await fetchWeatherByCity('London');
});
</script>

<template>
  <div class="weather-page-wrapper">
    <CardsList
      :weather-cards="weatherCards"
      :is-adding-city="isAddingCity"
      :fetch-weather="fetchWeatherByCity"
      :start-adding-city="startAddingCity"
      :delete-card="deleteCard"
    />
  </div>
  <teleport to="#app">
    <transition name="fade">
    <ConfirmModal v-if="showModal" :message="message" :on-confirm="onConfirm" :on-cancel="onCancel" />
    </transition>
  </teleport>
</template>

<style scoped lang="scss">
.weather-page-wrapper {
  height: 100%;
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
