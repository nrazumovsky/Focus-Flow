import React, { FormEvent } from "react";
import { createPortal } from "react-dom";
import ErrorMessage from "../../../../entities/ErrorMessage/ErrorMessage";
import FormInput from "../../../../entities/FormInput/FormInput";
import Button from "../../../../shared/UI/Button/Button";
import CloseButton from "../../../../shared/UI/CloseButton/CloseButton";
import EColors from "../../../../shared/UI/EColors/EColors";
import Text from "../../../../shared/UI/Text/Text";
import useClickOutside from "../../../../shared/hooks/useClickOutside";
import useInput from "../../../../shared/hooks/useInput";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../shared/hooks/useRedux";
import { setOpenPanel } from "../../../../shared/store/reducers/setOpenSettingsPanelSlice";
import {
  setTimerFocusDuration,
  setTimerLongBreakDuration,
  setTimerShortBreakDuration,
} from "../../../../shared/store/reducers/setTimerDuration";
import styles from "./settingspanel.module.css";

interface ISettingsPanel {
  onClose: () => void;
}

function SettingsPanel(props: ISettingsPanel) {
  const { onClose } = props;

  const dispatch = useAppDispatch();
  const panelOpen = useAppSelector(
    (state) => state.setOpenSettingsPanelReducer.isOpen,
  );

  const timerFocusDurationCurrentValue = useAppSelector(
    (state) => state.setTimerDurationReducer.timerFocusDuration,
  );
  const timerShortBreakDurationCurrentValue = useAppSelector(
    (state) => state.setTimerDurationReducer.timerShortBreakDuration,
  );
  const timerLongBreakDurationCurrentValue = useAppSelector(
    (state) => state.setTimerDurationReducer.timerLongBreakDuration,
  );

  const timerFocusDuration = useInput(timerFocusDurationCurrentValue, {
    isEmpty: true,
    minRoundsNumber: 15,
    maxRoundsNumber: 45,
  });
  const timerShortBreakDuration = useInput(
    timerShortBreakDurationCurrentValue,
    { isEmpty: true, minRoundsNumber: 5, maxRoundsNumber: 10 },
  );
  const timerLongBreakDuration = useInput(timerLongBreakDurationCurrentValue, {
    isEmpty: true,
    minRoundsNumber: 10,
    maxRoundsNumber: 30,
  });

  const handleCloseClick = () => {
    dispatch(setOpenPanel(false));
  };

  const formSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setOpenPanel(false));
    dispatch(setTimerFocusDuration(timerFocusDuration.value));
    dispatch(setTimerShortBreakDuration(timerShortBreakDuration.value));
    dispatch(setTimerLongBreakDuration(timerLongBreakDuration.value));
  };

  const settingsPanelRef = useClickOutside({ onClose });
  const node = document.getElementById("panel_root");

  if (!node) return null;

  return createPortal(
    <div
      className={`${styles.settingsPanelContainer} ${
        panelOpen ? styles.settingsPanelContainerActive : ""
      }`}
      ref={settingsPanelRef}
    >
      <CloseButton
        className={styles.settingsPanelCloseButton}
        onClick={handleCloseClick}
      />
      <Text
        As="span"
        size={24}
        color={EColors.black}
        className={styles.settingsPanelTitle}
      >
        Настройки таймера
      </Text>
      <form className={styles.settingsPanel} onSubmit={formSubmit}>
        <div className={styles.settingsPanelRowContainer}>
          <FormInput
            className={styles.settingsPanelRow}
            labelValue="ПРОДОЛЖИТЕЛЬНОСТЬ ЗАДАЧИ"
            inputType="number"
            formInputRef={timerFocusDuration.inputRef}
            inputValue={timerFocusDuration.value}
            placeholder="От 15 до 45 минут"
            onChange={timerFocusDuration.onChange}
          />
          {timerFocusDuration.isDirty && !timerFocusDuration.isTouched && (
            <ErrorMessage>Поле обязательно для заполнения</ErrorMessage>
          )}
          {timerFocusDuration.isEmpty && timerFocusDuration.isTouched && (
            <ErrorMessage>Поле обязательно для заполнения</ErrorMessage>
          )}
          {!timerFocusDuration.isEmpty &&
            (timerFocusDuration.minRoundsNumber ||
              timerFocusDuration.maxRoundsNumber) && (
              <ErrorMessage>Число должно быть от 15 до 45</ErrorMessage>
            )}
        </div>
        <div className={styles.settingsPanelRowContainer}>
          <FormInput
            className={styles.settingsPanelRow}
            labelValue="ПРОДОЛЖИТЕЛЬНОСТЬ КОРОТКОГО ПЕРЕРЫВА"
            inputType="number"
            formInputRef={timerShortBreakDuration.inputRef}
            inputValue={timerShortBreakDuration.value}
            placeholder="От 5 до 10 минут"
            onChange={timerShortBreakDuration.onChange}
          />
          {timerShortBreakDuration.isDirty &&
            !timerShortBreakDuration.isTouched && (
              <ErrorMessage>Поле обязательно для заполнения</ErrorMessage>
            )}
          {timerShortBreakDuration.isEmpty &&
            timerShortBreakDuration.isTouched && (
              <ErrorMessage>Поле обязательно для заполнения</ErrorMessage>
            )}
          {!timerShortBreakDuration.isEmpty &&
            (timerShortBreakDuration.minRoundsNumber ||
              timerShortBreakDuration.maxRoundsNumber) && (
              <ErrorMessage>Число должно быть от 5 до 10</ErrorMessage>
            )}
        </div>
        <div className={styles.settingsPanelRowContainer}>
          <FormInput
            className={styles.settingsPanelRow}
            labelValue="ПРОДОЛЖИТЕЛЬНОСТЬ ДЛИННОГО ПЕРЕРЫВА"
            inputType="number"
            formInputRef={timerLongBreakDuration.inputRef}
            inputValue={timerLongBreakDuration.value}
            placeholder="От 10 до 30 минут"
            onChange={timerLongBreakDuration.onChange}
          />
          {timerLongBreakDuration.isDirty &&
            !timerLongBreakDuration.isTouched && (
              <ErrorMessage>Поле обязательно для заполнения</ErrorMessage>
            )}
          {timerLongBreakDuration.isEmpty &&
            timerLongBreakDuration.isTouched && (
              <ErrorMessage>Поле обязательно для заполнения</ErrorMessage>
            )}
          {!timerLongBreakDuration.isEmpty &&
            (timerLongBreakDuration.minRoundsNumber ||
              timerLongBreakDuration.maxRoundsNumber) && (
              <ErrorMessage>Число должно быть от 5 до 10</ErrorMessage>
            )}
        </div>
        <Button
          As="button"
          type="submit"
          className={styles.settingsPanelSubmitButton}
          disabled={
            !timerFocusDuration.isValid ||
            !timerShortBreakDuration.isValid ||
            !timerShortBreakDuration.isValid
          }
        >
          <Text
            As="span"
            size={14}
            color={EColors.white}
            className={styles.settingsPanelSubmitButtonLabel}
          >
            Принять
          </Text>
        </Button>
      </form>
    </div>,
    node,
  );
}

export default SettingsPanel;
