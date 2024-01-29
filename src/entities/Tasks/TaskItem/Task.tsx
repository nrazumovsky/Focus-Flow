import React, { FormEvent, useEffect, useState } from "react";
import TaskDeleteModal from "../../../features/Task/TaskDeleteModal/TaskDeleteModal";
import TaskEditForm from "../../../features/Task/TaskEditForm/TaskEditForm";
import Button from "../../../shared/UI/Button/Button";
import EColors from "../../../shared/UI/EColors/EColors";
import EIcons from "../../../shared/UI/Icon/EIcons";
import Icon from "../../../shared/UI/Icon/Icon";
import Text from "../../../shared/UI/Text/Text";
import setNoScroll from "../../../shared/hooks/useNoScroll";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks/useRedux";
import useUpdateInputValue from "../../../shared/hooks/useUpdateInputValue";
import { setOpenTaskEditForm } from "../../../shared/store/reducers/setOpenTaskSlice";
import { updateTask } from "../../../shared/store/reducers/setTaskSlice";
import styles from "./task.module.css";

interface ITask {
  id: string;
  name: string;
  rounds: string;
  onClick: (taskId: string, taskName: string, taskRoundsNumber: string) => void;
}

function Task(props: ITask) {
  const { id, name, rounds, onClick } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const dispatch = useAppDispatch();
  const selectedTask = useAppSelector(
    (state) => state.setTaskReducer.selectTask,
  );

  const taskName = useUpdateInputValue(name, {});
  const taskRounds = useUpdateInputValue(rounds, {});

  useEffect(() => {
    taskName.setUpdateValue(taskName.value);
    taskRounds.setUpdateValue(taskRounds.value);
  }, [taskName, taskRounds]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(
      updateTask({
        taskId: id,
        taskName: taskName.value,
        numberOfTaskRounds: taskRounds.value,
      }),
    );
    setIsEdit(false);
  };

  const handleCancel = () => {
    setIsEdit(false);
    taskName.setUpdateValue(taskName.value);
    taskRounds.setUpdateValue(taskRounds.value);
  };

  const handleCloseModal = () => {
    setIsConfirm(false);
  };

  const handleEdit = () => {
    setIsEdit(true);
    dispatch(setOpenTaskEditForm(false));
  };

  const handleDelete = () => {
    const { addNoScroll } = setNoScroll();
    addNoScroll();
    setIsConfirm(true);
    taskName.setUpdateValue("");
    taskRounds.setUpdateValue("");
  };

  return (
    <li>
      {!isEdit ? (
        <div
          className={`${styles.task} ${
            selectedTask === id ? styles.taskActive : ""
          }`}
        >
          <Button
            As="button"
            onClick={() => onClick(id, name, rounds)}
            className={styles.taskSelectButton}
          >
            <Text
              As="span"
              size={16}
              color={EColors.black}
              className={styles.taskSelectButtonText}
            >
              {name}
            </Text>
          </Button>
          <div className={styles.taskActions}>
            <Button
              As="button"
              className={styles.taskControlsIcon}
              onClick={handleEdit}
            >
              <span className={styles.taskEditIconContainer}>
                <Icon
                  name={EIcons.settings}
                  color={EColors.black}
                  size={24}
                  className={styles.taskEditIcon}
                />
              </span>
            </Button>
            <Button
              As="button"
              className={styles.taskControlsIcon}
              onClick={handleDelete}
            >
              <span className={styles.taskEditIconContainer}>
                <Icon
                  name={EIcons.trash}
                  color={EColors.black}
                  size={24}
                  className={styles.taskEditIcon}
                />
              </span>
            </Button>
          </div>
          {isConfirm && (
            <TaskDeleteModal
              id={id}
              name={name}
              onCancel={handleCloseModal}
              onClose={() => {
                setIsConfirm(false);
              }}
            />
          )}
        </div>
      ) : (
        <TaskEditForm
          onClose={() => {
            setIsEdit(false);
          }}
          formSubmit={handleSubmit}
          taskInputValue={taskName.value}
          taskOnChange={taskName.onChange}
          roundsInputValue={taskRounds.value}
          roundsOnChange={taskRounds.onChange}
          onCancel={handleCancel}
        />
      )}
    </li>
  );
}

export default Task;
