export enum MetricsPeriod {
  CurrentWeek,
  LastWeek,
  WeekBeforeLast,
}

export const MetricsPeriods = [
  {
    name: "Эта неделя",
    value: MetricsPeriod.CurrentWeek,
  },
  {
    name: "Прошедшая неделя",
    value: MetricsPeriod.LastWeek,
  },
  {
    name: "2 недели назад",
    value: MetricsPeriod.WeekBeforeLast,
  },
];
