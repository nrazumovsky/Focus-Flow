import React, { ChangeEvent, FormEvent, useEffect } from "react";
import ErrorMessage from "../../../entities/ErrorMessage/ErrorMessage";
import FormInput from "../../../entities/FormInput/FormInput";
import Button from "../../../shared/UI/Button/Button";
import useClickOutside from "../../../shared/hooks/useClickOutside";
import useValidation from "../../../shared/hooks/useValidation";
import styles from "./taskeditform.module.css";

interface ITaskEditForm {
  onClose: () => void;
  formSubmit: (e: FormEvent) => void;
  taskInputValue: string;
  taskOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  roundsInputValue: string;
  roundsOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onCancel: () => void;
}

function TaskEditForm(props: ITaskEditForm) {
  const {
    onClose,
    formSubmit,
    taskInputValue,
    taskOnChange,
    roundsInputValue,
    roundsOnChange,
    onCancel,
  } = props;

  const taskEditFormRef = useClickOutside({ onClose });

  const taskNameValidation = useValidation(taskInputValue, {
    isEmpty: true,
  });
  const taskRoundsValidation = useValidation(roundsInputValue, {
    isEmpty: true,
    minRoundsNumber: 2,
    maxRoundsNumber: 15,
  });

  useEffect(() => {
    const taskEditFormElement = taskEditFormRef.current;

    taskEditFormElement?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [taskEditFormRef]);

  return (
    <form
      className={styles.taskEditFormContainer}
      onSubmit={formSubmit}
      ref={taskEditFormRef}
    >
      <div className={styles.taskEditFormInputContainer}>
        <FormInput
          className={styles.taskEditFormInput}
          labelValue="НАЗВАНИЕ ЗАДАЧИ"
          inputType="text"
          formInputRef={taskNameValidation.inputRef}
          inputValue={taskInputValue}
          onBlur={taskNameValidation.handleBlur}
          placeholder="Создать задачу"
          onChange={taskOnChange}
        />
        {taskNameValidation.isDirty && !taskNameValidation.isTouched && (
          <ErrorMessage>Поле обязательно для заполнения</ErrorMessage>
        )}
        {taskNameValidation.isEmpty && taskNameValidation.isTouched && (
          <ErrorMessage>Поле обязательно для заполнения</ErrorMessage>
        )}
      </div>
      <div className={styles.taskEditFormInputContainer}>
        <FormInput
          className={styles.taskEditFormInput}
          labelValue="КОЛИЧЕСТВО РАУНДОВ"
          inputType="number"
          formInputRef={taskRoundsValidation.inputRef}
          inputValue={roundsInputValue}
          onBlur={taskRoundsValidation.handleBlur}
          placeholder="от 2 до 15 раундов"
          onChange={roundsOnChange}
        />
        {taskRoundsValidation.isDirty && !taskRoundsValidation.isTouched && (
          <ErrorMessage>Поле обязательно для заполнения</ErrorMessage>
        )}
        {taskRoundsValidation.isEmpty && taskRoundsValidation.isTouched && (
          <ErrorMessage>Поле обязательно для заполнения</ErrorMessage>
        )}
        {!taskRoundsValidation.isEmpty &&
          (taskRoundsValidation.minRoundsNumber ||
            taskRoundsValidation.maxRoundsNumber) && (
            <ErrorMessage>Число должно быть от 2 до 15</ErrorMessage>
          )}
      </div>
      <div className={styles.buttonsBlock}>
        <Button
          As="button"
          type="button"
          onClick={onCancel}
          className={`${styles.button} ${styles.closeButton}`}
        >
          Отмена
        </Button>
        <Button
          As="button"
          type="submit"
          className={`${styles.button} ${styles.saveButton}`}
          disabled={
            !taskNameValidation.isValid || !taskRoundsValidation.isValid
          }
        >
          Сохранить
        </Button>
      </div>
    </form>
  );
}

export default TaskEditForm;
