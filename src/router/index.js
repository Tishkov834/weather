import { createRouter, createWebHistory } from 'vue-router';

import Layout from '@/components/Layout';
import { WEATHER_PAGE, FAVORITES_PAGE } from '@/constants/routes';

const routes = [
  {
    path: '/',
    redirect: WEATHER_PAGE,
    component: Layout,
    children: [
      {
        path: WEATHER_PAGE,
        component: () => import('../pages/WeatherCitiesPage.vue'),
      },
      {
        path: FAVORITES_PAGE,
        component: () => import('../pages/FavoritesPage.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../pages/NotFoundPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
