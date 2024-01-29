import { format, subDays } from "date-fns";
import { ru } from "date-fns/locale";
import React, { useEffect, useState } from "react";
import UserActivityBarChart from "../../entities/UserActivityMetric/UserActivityBarChart/UserActivityBarChart";
import UserActivityDay from "../../entities/UserActivityMetric/UserActivityDay/UserActivityDay";
import UserActivityPeriodSelect from "../../entities/UserActivityMetric/UserActivityDropdown/UserActivityPeriodSelect";
import UserActivityFocus from "../../entities/UserActivityMetric/UserActivityFocus/UserActivityFocus";
import UserActivityFocusPercentage from "../../entities/UserActivityMetric/UserActivityFocusPercentage/UserActivityFocusPercentage";
import UserActivityPause from "../../entities/UserActivityMetric/UserActivityPause/UserActivityPause";
import UserActivityReset from "../../entities/UserActivityMetric/UserActivityReset/UserActivityReset";
import {
  MetricsPeriod,
  MetricsPeriods,
} from "../../entities/consts/metricsPeriod";
import EColors from "../../shared/UI/EColors/EColors";
import Text from "../../shared/UI/Text/Text";
import { useAppSelector } from "../../shared/hooks/useRedux";
import { IStatisticsItem } from "../../widgets/Statistics/reducers/setStatisticsMetricsSlice";
import styles from "./statistics.module.css";

const emptyMetrics: IStatisticsItem = {
  date: format(new Date(), "yyyy-MM-dd"),
  numberOfFocuses: 0,
  numberOfResets: 0,
  workingTime: 0,
  pauseTime: 0,
};

function UserActivityMetric() {
  const statisticsItems = useAppSelector(
    (state) => state.setStatisticsMetricsReducer.statisticsItems,
  );
  const [emptyDate, setEmptyDate] = useState(emptyMetrics);
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), "yyyy-MM-dd"),
  );
  const [currentDate, setCurrentDate] = useState(format(new Date(), "EEEE"));
  const [selectedMetricPeriod, setSelectedMetricPeriod] =
    useState<MetricsPeriod>(MetricsPeriod.CurrentWeek);

  const capitalizedCurrentDay =
    currentDate[0].toUpperCase() + currentDate.slice(1);

  useEffect(() => {
    setCurrentDate(format(new Date(selectedDate), "EEEE", { locale: ru }));

    const getStatisticsItem = statisticsItems.find(
      (item) => item.date === selectedDate,
    );

    if (getStatisticsItem) {
      setEmptyDate(getStatisticsItem);
    } else {
      setEmptyDate({
        date: selectedDate,
        numberOfFocuses: 0,
        numberOfResets: 0,
        workingTime: 0,
        pauseTime: 0,
      });
    }
  }, [selectedDate, statisticsItems]);

  useEffect(() => {
    switch (selectedMetricPeriod) {
      case MetricsPeriod.CurrentWeek:
        setSelectedDate(format(new Date(), "yyyy-MM-dd"));
        break;
      case MetricsPeriod.LastWeek:
        setSelectedDate(format(subDays(new Date(), 7), "yyyy-MM-dd"));
        break;
      case MetricsPeriod.WeekBeforeLast:
        setSelectedDate(format(subDays(new Date(), 14), "yyyy-MM-dd"));
        break;
      default:
    }
  }, [selectedMetricPeriod]);

  const currentMetricName = MetricsPeriods.find(
    (period) => period.value === selectedMetricPeriod,
  )?.name;

  const handleSelectPeroid = (selectedPeriod: MetricsPeriod) => {
    setSelectedMetricPeriod(selectedPeriod);
  };

  const handleSelectedDate = (selectedDate: string) => {
    setSelectedDate(selectedDate);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Text As="h2" color={EColors.black} size={32} className={styles.title}>
          Ваша активность
        </Text>
        <UserActivityPeriodSelect
          onSelectPeriod={handleSelectPeroid}
          selectSelectedOption={currentMetricName || ""}
          selectOptions={MetricsPeriods}
        />
      </div>
      <div className={styles.statisticsContainer}>
        <div className={styles.statisticsMetricWidgetsContainer}>
          <UserActivityDay
            currentDate={capitalizedCurrentDay}
            workingTime={emptyDate.workingTime}
          />
          <UserActivityFocus numberOfFocuses={emptyDate.numberOfFocuses} />
          <UserActivityFocusPercentage
            workingTime={emptyDate.workingTime}
            pauseTime={emptyDate.pauseTime}
          />
          <UserActivityPause pauseTime={emptyDate.pauseTime} />
          <UserActivityReset numberOfResets={emptyDate.numberOfResets} />
        </div>
        <UserActivityBarChart
          selectedDate={selectedDate}
          selectedMetricPeriod={selectedMetricPeriod}
          changeSelectedDate={handleSelectedDate}
        />
      </div>
    </div>
  );
}

export default UserActivityMetric;
