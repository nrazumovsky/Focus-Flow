import { MetricsPeriod } from "../consts/metricsPeriod";

export type UserActivityChart = {
  selectedDate: string;
  selectedMetricPeriod: MetricsPeriod;
  changeSelectedDate: (selectedDate: string) => void;
};
