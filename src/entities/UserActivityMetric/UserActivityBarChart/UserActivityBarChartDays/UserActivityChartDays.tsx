import classNames from "classnames";
import React from "react";
import Button from "../../../../shared/UI/Button/Button";
import EColors from "../../../../shared/UI/EColors/EColors";
import Text from "../../../../shared/UI/Text/Text";
import getBarMaxHeight from "../models/getBarMaxHeight";
import { DayOfWeek } from "../types/dayOfWeek";
import styles from "./useractivitychartdays.module.css";

interface IUserActivityBarChartDays {
  daysOfWeek: DayOfWeek[];
  selectedDate: string;
  changeSelectedDate: (selectedDate: string) => void;
  highestWorkingTime: number;
}

function UserActivityBarChartDays(props: IUserActivityBarChartDays) {
  const { daysOfWeek, highestWorkingTime, changeSelectedDate } = props;

  return (
    <ul className={styles.chartBarChartDaysOfWeek}>
      {daysOfWeek.map((item) => (
        <li key={item.date} className={styles.weekdayTransfer}>
          <Button
            As="button"
            onClick={() => {
              changeSelectedDate(item.date);
            }}
            className={styles.chartButton}
          >
            <div
              className={classNames(
                styles.chartBarKnobWithOutData,
                item.active
                  ? getBarMaxHeight(item.workingTime, highestWorkingTime) > 8 &&
                      styles.chartBarKnobWithDataCurrentDate
                  : getBarMaxHeight(item.workingTime, highestWorkingTime) > 8 &&
                      styles.chartBarKnobWithDataNonCurrentDate,
              )}
              style={{
                height: `${getBarMaxHeight(
                  item.workingTime,
                  highestWorkingTime,
                )}px`,
              }}
            />
            <Text
              As="span"
              color={EColors.black}
              size={16}
              className={classNames(
                styles.text,
                item.active && styles.chartBarButtonSekectedDate,
              )}
            >
              {item.name}
            </Text>
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default UserActivityBarChartDays;
