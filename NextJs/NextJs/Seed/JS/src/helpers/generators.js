export const generateRandomEChartData = dataName => {
  const randomData = dataName.map(name => ({
    name: name,
    value: Math.floor(Math.random() * 100) + 1
  }));
  const total = randomData.reduce((sum, item) => sum + item.value, 0);
  randomData.forEach(item => {
    item.value = item.value / total * 100;
  });
  return randomData;
};
export const getCurrentMonthRange = () => {
  const start = new Date();
  start.setDate(1);
  start.setHours(0, 0, 0, 0);
  const end = new Date();
  end.setMonth(end.getMonth() + 1);
  end.setDate(0);
  end.setHours(23, 59, 59, 999);
  return [start, end];
};