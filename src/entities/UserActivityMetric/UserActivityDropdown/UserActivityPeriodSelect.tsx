import React, { useState } from "react";
import Button from "../../../shared/UI/Button/Button";
import EColors from "../../../shared/UI/EColors/EColors";
import EIcons from "../../../shared/UI/Icon/EIcons";
import Icon from "../../../shared/UI/Icon/Icon";
import Text from "../../../shared/UI/Text/Text";
import useClickOutside from "../../../shared/hooks/useClickOutside";
import { MetricsPeriod } from "../../consts/metricsPeriod";
import styles from "./useractivityselect.module.css";

interface IUserActivityPeriodSelect {
  onSelectPeriod: (selectedPeriod: MetricsPeriod) => void;
  selectSelectedOption: string;
  selectOptions: { name: string; value: MetricsPeriod }[];
}

function UserActivityPeriodSelect(props: IUserActivityPeriodSelect) {
  const { selectSelectedOption, selectOptions, onSelectPeriod } = props;
  const [isActive, setActive] = useState(false);

  const handleActive = () => {
    setActive(!isActive);
  };

  const handleClose = () => {
    setActive(false);
  };

  const selectRef = useClickOutside({ onClose: handleClose });

  return (
    <div className={styles.selectContainer} ref={selectRef}>
      <Button
        As="button"
        onClick={handleActive}
        className={styles.selectTrigger}
      >
        <Text
          As="span"
          size={16}
          color={EColors.black}
          className={styles.selectTriggerTitle}
        >
          {selectSelectedOption}
        </Text>
        <Icon
          name={EIcons.arrow}
          color={EColors.black}
          size={24}
          className={styles.selectTriggerIcon}
        />
      </Button>
      {isActive && (
        <ul className={styles.selectList}>
          {selectOptions.map((option) => (
            <li key={option.value}>
              <Button
                As="button"
                onClick={() => {
                  setActive(false);
                  onSelectPeriod(option.value);
                }}
                className={styles.selectItem}
              >
                <Text As="span" size={16} color={EColors.black}>
                  {option.name}
                </Text>
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserActivityPeriodSelect;
