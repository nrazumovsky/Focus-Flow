import React from "react";
import EColors from "../../../shared/UI/EColors/EColors";
import Text from "../../../shared/UI/Text/Text";
import UserActivityTile from "../UserActivityTile/UserActvityTile";
import IconReset from "../components/IconReset";
import styles from "./useractivityreset.module.css";

interface IUserActivityReset {
  numberOfResets: number;
}

function UserActivityReset(props: IUserActivityReset) {
  const { numberOfResets } = props;

  return (
    <UserActivityTile>
      <div className={styles.activityHeadingContainer}>
        <Text
          As="span"
          size={16}
          color={EColors.black}
          className={styles.activityHeading}
        >
          Сбросы
        </Text>
        <IconReset />
      </div>
      <Text
        As="span"
        size={24}
        color={EColors.black}
        className={styles.statisticsText}
      >
        {numberOfResets}
      </Text>
    </UserActivityTile>
  );
}

export default UserActivityReset;
