import React from "react";
import EColors from "../../../shared/UI/EColors/EColors";
import Text from "../../../shared/UI/Text/Text";
import UserActivityTile from "../UserActivityTile/UserActvityTile";
import IconFocusPercentage from "../components/IconFocusPercentage";
import styles from "./useractivityfocuspercentage.module.css";

interface IUserActivityFocusPercentage {
  workingTime: number;
  pauseTime: number;
}

function UserActivityFocusPercentage(props: IUserActivityFocusPercentage) {
  const { workingTime, pauseTime } = props;
  const totalTime = workingTime + pauseTime;
  const focusPercentage = Math.floor((workingTime * 100) / totalTime);

  return (
    <UserActivityTile>
      <div className={styles.activityHeadingContainer}>
        <Text
          As="span"
          size={16}
          color={EColors.black}
          className={styles.activityHeading}
        >
          Фокус
        </Text>
        <IconFocusPercentage />
      </div>
      <Text
        As="span"
        size={24}
        color={EColors.black}
        className={styles.statisticsText}
      >
        {focusPercentage >= 1 ? focusPercentage : "0"}
        {focusPercentage >= 1 ? "%" : ""}
      </Text>
    </UserActivityTile>
  );
}

export default UserActivityFocusPercentage;
