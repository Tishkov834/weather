export const getFormattedData = (date) => {
  const formatDate = new Date(date * 1000);

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const day = daysOfWeek[formatDate.getUTCDay()];

  return `${day}, ${formatDate.getUTCDate()}/${formatDate.getUTCMonth() + 1}/${formatDate.getUTCFullYear()}`;
};
