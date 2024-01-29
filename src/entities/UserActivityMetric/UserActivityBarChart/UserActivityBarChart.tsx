import { addDays, format, isSameDay, parseISO, startOfWeek } from "date-fns";
import { ru } from "date-fns/locale";
import React, { useEffect } from "react";
import { SECONDS } from "../../../shared/consts/consts";
import { useAppSelector } from "../../../shared/hooks/useRedux";
import { MetricsPeriod } from "../../consts/metricsPeriod";
import { UserActivityChart } from "../../types/types";
import UserActivityBarChartDays from "./UserActivityBarChartDays/UserActivityChartDays";
import UserActivityChartLineContainer from "./UserActivityBarChartLineContainer/UserActivityChartLineContainer";
import { DayOfWeek } from "./types/dayOfWeek";
import styles from "./useractivitybarchart.module.css";

let daysOfWeek: DayOfWeek[] = [];
let highestWorkingTime = 0;

function UserActivityBarChart(props: UserActivityChart) {
  const { selectedDate, selectedMetricPeriod, changeSelectedDate } = props;

  const UserActivityItems = useAppSelector(
    (state) => state.setStatisticsMetricsReducer.statisticsItems,
  );

  useEffect(() => {
    daysOfWeek = [];
    let subtractDays = 0;

    switch (selectedMetricPeriod) {
      case MetricsPeriod.CurrentWeek:
        subtractDays = 0;
        break;
      case MetricsPeriod.LastWeek:
        subtractDays = -7;
        break;
      case MetricsPeriod.WeekBeforeLast:
        subtractDays = -14;
        break;
      default:
    }

    for (let dayNumber = 0; dayNumber < 7; dayNumber++) {
      const weekDayDate = format(
        addDays(
          startOfWeek(new Date(), { weekStartsOn: 1 }),
          dayNumber - subtractDays,
        ),
        "yyyy-MM-dd",
        { locale: ru },
      );
      const weekDayName = format(
        addDays(
          startOfWeek(new Date(), { weekStartsOn: 1 }),
          dayNumber - subtractDays,
        ),
        "EEEEEE",
        { locale: ru },
      );

      const capitalizedWeekDayName =
        weekDayName[0].toUpperCase() + weekDayName.slice(1);

      let workingTime = 0;

      const foundUserActivityItem = UserActivityItems.find((item) =>
        isSameDay(parseISO(item.date), weekDayDate),
      );

      if (foundUserActivityItem) {
        workingTime = foundUserActivityItem.workingTime;
      }

      daysOfWeek.push({
        date: weekDayDate,
        name: capitalizedWeekDayName,
        active: selectedDate === weekDayDate,
        workingTime,
      });
    }

    highestWorkingTime = daysOfWeek.reduce(
      (prev, current) =>
        prev > current.workingTime ? prev : current.workingTime,
      0,
    );
  }, [UserActivityItems, selectedDate, selectedMetricPeriod]);

  return (
    <div className={styles.chartBarContainer}>
      <UserActivityChartLineContainer
        timeGraphStep={highestWorkingTime / SECONDS}
      />
      <UserActivityBarChartDays
        daysOfWeek={daysOfWeek}
        selectedDate={selectedDate}
        changeSelectedDate={changeSelectedDate}
        highestWorkingTime={highestWorkingTime}
      />
    </div>
  );
}

export default UserActivityBarChart;
