import React, { FormEvent } from "react";
import Button from "../../../shared/UI/Button/Button";
import EColors from "../../../shared/UI/EColors/EColors";
import Text from "../../../shared/UI/Text/Text";
import useInput from "../../../shared/hooks/useInput";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks/useRedux";
import { setOpenTaskEditForm } from "../../../shared/store/reducers/setOpenTaskSlice";
import { addTaskToList } from "../../../shared/store/reducers/setTaskSlice";
import generateUid from "../../../shared/utils/generateUid";
import TaskEditForm from "../TaskEditForm/TaskEditForm";
import styles from "./createtaskform.module.css";

function CreateTaskForm() {
  const dispatch = useAppDispatch();
  const openTaskEditForm = useAppSelector(
    (state) => state.setOpenTaskEditFormReducer.isOpen,
  );

  const taskName = useInput("", {});
  const taskRounds = useInput("", {});

  const handleClick = () => {
    dispatch(setOpenTaskEditForm(true));
  };

  const handleClose = () => {
    dispatch(setOpenTaskEditForm(false));
  };

  const handleSubmit = (e: FormEvent) => {
    dispatch(setOpenTaskEditForm(false));
    e.preventDefault();
    dispatch(
      addTaskToList({
        taskId: generateUid(),
        taskName: taskName.value,
        numberOfTaskRounds: taskRounds.value,
      }),
    );
    taskName.setValue("");
    taskRounds.setValue("");
  };

  return (
    <div className={styles.formContainer}>
      {!openTaskEditForm ? (
        <Button As="button" className={styles.formButton} onClick={handleClick}>
          <span className={styles.plusIcon} />
          <Text As="span" size={14} color={EColors.black}>
            Новая задача
          </Text>
        </Button>
      ) : (
        <TaskEditForm
          onClose={handleClose}
          formSubmit={handleSubmit}
          taskInputValue={taskName.value}
          taskOnChange={taskName.onChange}
          roundsInputValue={taskRounds.value}
          roundsOnChange={taskRounds.onChange}
          onCancel={handleClose}
        />
      )}
    </div>
  );
}

export default CreateTaskForm;
