import React from "react";
import Button from "../../../shared/UI/Button/Button";
import EColors from "../../../shared/UI/EColors/EColors";
import Text from "../../../shared/UI/Text/Text";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks/useRedux";
import { setOpenTaskEditForm } from "../../../shared/store/reducers/setOpenTaskSlice";
import { setToggleTaskPanel } from "../../../shared/store/reducers/setToggleTaskPanelSlice";
import styles from "./taskshubmenu.module.css";

function TasksHubMenu() {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.setTaskReducer.tasks);
  const taskName = useAppSelector((state) => state.setTaskReducer.task);
  const toggleMenu = useAppSelector(
    (state) => state.setToggleTaskPanelReducer.isToggle,
  );

  const handleToggle = () => {
    dispatch(setToggleTaskPanel());
    dispatch(setOpenTaskEditForm(false));
  };

  return (
    <div className={styles.formMenu}>
      <Text
        As="span"
        size={16}
        color={EColors.black}
        className={styles.formMenuTextContent}
      >
        {tasks.length > 0
          ? taskName || "Кликните на задачу"
          : "Напишите вашу следующую задачу"}
      </Text>
      {tasks.length > 0 && (
        <Button
          As="button"
          className={`${styles.formCloseButton} ${
            toggleMenu ? "" : styles.formCloseButtonActive
          }`}
          onClick={handleToggle}
        >
          <span className={styles.formCloseButtonLine} />
          <span className={styles.formCloseButtonLine} />
          <span className={styles.formCloseButtonLine} />
        </Button>
      )}
    </div>
  );
}

export default TasksHubMenu;
