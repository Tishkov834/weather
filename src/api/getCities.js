import axiosInstance from './axiosInstance';

export const getCities = async (query) => {
  try {
    const { data } = await axiosInstance.get('/find', {
      params: {
        q: query,
        type: 'like',
        sort: 'population',
        cnt: 10,
      },
    });

    return data.list;
  } catch (error) {
    return [];
  }
};
