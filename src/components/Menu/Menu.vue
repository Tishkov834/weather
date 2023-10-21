<script setup>
import { FAVORITES_PAGE, WEATHER_PAGE } from '@/constants/routes';
</script>

<template>
  <nav class="menu-wrapper">
    <ul class="menu-wrapper-list">
      <li class="menu-wrapper-list-item">
        <router-link class="menu-wrapper-list-item-link" :to="WEATHER_PAGE">Weather</router-link>
      </li>
      <li class="menu-wrapper-list-item">
        <router-link class="menu-wrapper-list-item-link" :to="FAVORITES_PAGE">Favorites</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.menu-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  &-list {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;

    &-item {
      margin-right: 20px;

      &-link {
        padding: 5px 10px;
        border-radius: 5px;
        color: white;
        text-decoration: none;
      }

      &-link:hover {
        background-color: #808080;
      }

      .router-link-active {
        background-color: #00a8ff;
      }
    }
  }
}
</style>
