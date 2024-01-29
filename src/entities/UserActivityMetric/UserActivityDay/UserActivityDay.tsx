import React from "react";
import EColors from "../../../shared/UI/EColors/EColors";
import Text from "../../../shared/UI/Text/Text";
import convertSecondsToMinutes from "../../helpers/convertSecondsToMinutes";
import getMinutesSuffix from "../../helpers/getMinutesSuffix";
import UserActivityTile from "../UserActivityTile/UserActvityTile";
import styles from "./statisticsmetricday.module.css";

interface IStatisticsMetricDay {
  currentDate: string;
  workingTime: number;
}

function UserActivityDay(props: IStatisticsMetricDay) {
  const { currentDate, workingTime } = props;
  const workingMinutes = convertSecondsToMinutes(workingTime);
  const workingTimeSuffix = getMinutesSuffix(workingTime);

  return (
    <UserActivityTile>
      <Text
        As="h3"
        size={20}
        color={EColors.black}
        className={styles.statisticsHeading}
      >
        {currentDate}
      </Text>
      <Text
        As="span"
        size={14}
        color={EColors.black}
        className={styles.statisticsText}
      >
        {workingMinutes >= 1
          ? `${`Вы работали ${workingMinutes} ${workingTimeSuffix}`}`
          : "Вы пока не работали"}
      </Text>
    </UserActivityTile>
  );
}

export default UserActivityDay;
