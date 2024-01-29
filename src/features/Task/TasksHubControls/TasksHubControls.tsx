import React from "react";
import { useAppSelector } from "../../../shared/hooks/useRedux";
import TasksHubMenu from "../TasksHubMenu/TasksHubMenu";
import TimerControls from "../TimerControls/TimerControls";
import styles from "./taskshubcontrols.module.css";

function TaskHubControls() {
  const taskName = useAppSelector((state) => state.setTaskReducer.task);
  const selectedTask = useAppSelector(
    (state) => state.setToggleTaskPanelReducer.isToggle,
  );

  return (
    <div className={styles.formMenuContainer}>
      <TasksHubMenu />
      {taskName && selectedTask ? <TimerControls /> : null}
    </div>
  );
}

export default TaskHubControls;
