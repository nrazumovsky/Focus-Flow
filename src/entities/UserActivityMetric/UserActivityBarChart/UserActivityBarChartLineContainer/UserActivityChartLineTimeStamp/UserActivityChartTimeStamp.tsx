import React from "react";
import EColors from "../../../../../shared/UI/EColors/EColors";
import Text from "../../../../../shared/UI/Text/Text";
import styles from "./useractivitycharttimestamp.module.css";

interface IUserActivityChartTimeGraph {
  timeGraphStep: string;
}

function UserActivityChartTimeStamp(props: IUserActivityChartTimeGraph) {
  const { timeGraphStep } = props;

  return (
    <Text
      As="span"
      size={14}
      color={EColors.black}
      className={styles.timeGraphStepOffset}
    >
      {timeGraphStep}
    </Text>
  );
}

export default UserActivityChartTimeStamp;
