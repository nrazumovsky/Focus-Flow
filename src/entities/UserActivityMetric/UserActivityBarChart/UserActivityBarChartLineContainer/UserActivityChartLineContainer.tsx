import React from "react";
import getChartTime from "../models/getChartTime";
import UserActivityChartLine from "./UserActivityChartLine/UserActivityChartLine";
import UserActivityChartTimeStamp from "./UserActivityChartLineTimeStamp/UserActivityChartTimeStamp";
import styles from "./useractivitychartlinecontainer.module.css";

interface IUserActivityChartLineContainer {
  timeGraphStep: number;
}

function UserActivityChartLineContainer(
  props: IUserActivityChartLineContainer,
) {
  const { timeGraphStep } = props;

  return (
    <div className={styles.userActivityChartLineContainer}>
      <div className={styles.userActivityChartLineItem}>
        <UserActivityChartLine />
        <UserActivityChartTimeStamp
          timeGraphStep={getChartTime(timeGraphStep)}
        />
      </div>
      <div className={styles.userActivityChartLineItem}>
        <UserActivityChartLine />
        <UserActivityChartTimeStamp
          timeGraphStep={getChartTime((timeGraphStep / 6) * 5)}
        />
      </div>
      <div className={styles.userActivityChartLineItem}>
        <UserActivityChartLine />
        <UserActivityChartTimeStamp
          timeGraphStep={getChartTime((timeGraphStep / 6) * 4)}
        />
      </div>
      <div className={styles.userActivityChartLineItem}>
        <UserActivityChartLine />
        <UserActivityChartTimeStamp
          timeGraphStep={getChartTime((timeGraphStep / 6) * 3)}
        />
      </div>
      <div className={styles.userActivityChartLineItem}>
        <UserActivityChartLine />
        <UserActivityChartTimeStamp
          timeGraphStep={getChartTime((timeGraphStep / 6) * 2)}
        />
      </div>
      <div className={styles.userActivityChartLineItem}>
        <UserActivityChartLine />
        <UserActivityChartTimeStamp
          timeGraphStep={getChartTime(timeGraphStep / 6)}
        />
      </div>
    </div>
  );
}

export default UserActivityChartLineContainer;
