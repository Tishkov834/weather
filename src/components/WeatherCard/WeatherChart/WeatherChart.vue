<script setup>
import { onMounted, toRefs } from 'vue';
import Chart from 'chart.js/auto';

const props = defineProps({
  weatherList: Array,
  id: Number,
  isForecast: Boolean,
});

const { weatherList, id, isForecast } = toRefs(props);

const updateChart = () => {
  const canvas = document.getElementById(id.value.toString());

  if (canvas) {
    const ctx = canvas.getContext('2d');
    const data = weatherList.value.map(({ main }) => Math.round(main.temp));
    const labels = weatherList.value.map(({ dt_txt: dtTxt }) => (isForecast.value ? `${new Date(dtTxt).getDate()}/${new Date(dtTxt).getMonth() + 1}` : `${new Date(dtTxt).getHours()}:00`));

    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            data,
            borderColor: 'blue',
            fill: false,
            pointRadius: 5,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: 'red',
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: false,
            display: false,
          },
          x: {
            ticks: {
              color: '#fff',
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }
};

onMounted(() => {
  updateChart();
});
</script>

<template>
  <canvas :id="id" />
</template>
