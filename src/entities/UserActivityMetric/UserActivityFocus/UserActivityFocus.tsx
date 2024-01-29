import React from "react";
import EColors from "../../../shared/UI/EColors/EColors";
import Text from "../../../shared/UI/Text/Text";
import UserActivityTile from "../UserActivityTile/UserActvityTile";
import IconFocus from "../components/IconFocus";
import styles from "./useractivityfocus.module.css";

interface IUserActivityFocus {
  numberOfFocuses: number;
}

function UserActivityFocus(props: IUserActivityFocus) {
  const { numberOfFocuses } = props;
  return (
    <UserActivityTile>
      <div className={styles.activityHeadingContainer}>
        <Text
          As="span"
          size={16}
          color={EColors.black}
          className={styles.activityHeading}
        >
          Фокусировок
        </Text>
        <IconFocus />
      </div>
      <Text
        As="span"
        size={24}
        color={EColors.black}
        className={styles.statisticsText}
      >
        {numberOfFocuses}
      </Text>
    </UserActivityTile>
  );
}

export default UserActivityFocus;
