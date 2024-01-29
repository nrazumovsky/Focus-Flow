import React from "react";
import EColors from "../../../shared/UI/EColors/EColors";
import Text from "../../../shared/UI/Text/Text";
import convertSecondsToMinutes from "../../helpers/convertSecondsToMinutes";
import getMinutesSuffix from "../../helpers/getMinutesSuffix";
import UserActivityTile from "../UserActivityTile/UserActvityTile";
import IconPause from "../components/IconPause";
import styles from "./useractivitypause.module.css";

interface IUserActivityPause {
  pauseTime: number;
}

function UserActivityPause(props: IUserActivityPause) {
  const { pauseTime } = props;
  const pauseWord = getMinutesSuffix(pauseTime);
  const pauseSeconds = convertSecondsToMinutes(pauseTime);

  return (
    <UserActivityTile>
      <div className={styles.activityHeadingContainer}>
        <Text
          As="span"
          size={16}
          color={EColors.black}
          className={styles.activityHeading}
        >
          Пауза
        </Text>
        <IconPause />
      </div>
      <Text
        As="span"
        size={24}
        color={EColors.black}
        className={styles.statisticsText}
      >
        {pauseSeconds} {pauseWord}
      </Text>
    </UserActivityTile>
  );
}

export default UserActivityPause;
