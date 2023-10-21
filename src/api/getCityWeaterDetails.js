import axiosInstance from './axiosInstance';

export const getCityWeatherDetails = async (city) => {
  try {
    const { data } = await axiosInstance.get('/forecast', {
      params: {
        q: city,
        units: 'metric',
      },
    });

    return {
      ...data,
      list: data.list.slice(0, 5),
    };
  } catch (error) {
    throw new Error(error);
  }
};
