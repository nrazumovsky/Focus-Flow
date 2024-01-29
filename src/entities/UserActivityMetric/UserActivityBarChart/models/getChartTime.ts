function getChartTime(seconds: number) {
  const hour = Math.floor(seconds / 60);
  const min = Math.round(seconds % 60);

  return `${hour} ч ${min} мин`;
}

export default getChartTime;
