import React from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import Task from "../../entities/Tasks/TaskItem/Task";
import TasksList from "../../entities/TasksList/TasksList";
import CreateTaskForm from "../../features/Task/CreateTaskForm/CreateTaskForm";
import TaskHubControls from "../../features/Task/TasksHubControls/TasksHubControls";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/useRedux";
import {
  selectTask,
  setNumberOfTaskRounds,
  setTaskName,
} from "../../shared/store/reducers/setTaskSlice";
import { setInitializeTimer } from "../../shared/store/reducers/setTimerControlsSlice";
import { setToggleTaskPanel } from "../../shared/store/reducers/setToggleTaskPanelSlice";
import styles from "./taskshub.module.css";

function TasksHub() {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.setTaskReducer.tasks);
  const toggleTaskPanel = useAppSelector(
    (state) => state.setToggleTaskPanelReducer.isToggle,
  );
  const openTaskEditForm = useAppSelector(
    (state) => state.setOpenTaskEditFormReducer.isOpen,
  );

  const handleClick = (
    taskId: string,
    taskName: string,
    taskRoundsNumber: string,
  ) => {
    dispatch(setInitializeTimer(true));
    dispatch(selectTask(taskId));
    dispatch(setTaskName(taskName));
    dispatch(setNumberOfTaskRounds(taskRoundsNumber));
    dispatch(setToggleTaskPanel());
  };

  return (
    <div className={styles.tasksHubContainer}>
      {!toggleTaskPanel && (
        <div>
          {tasks.length > 0 && (
            <SimpleBar
              style={{
                maxHeight: `${openTaskEditForm ? "57.6vh" : "76.5vh"}`,
                maxWidth: "336px",
              }}
            >
              {tasks && (
                <TasksList>
                  {tasks.map((task) => (
                    <Task
                      key={task.taskId}
                      id={task.taskId}
                      name={task.taskName}
                      rounds={task.numberOfTaskRounds}
                      onClick={() =>
                        handleClick(
                          task.taskId,
                          task.taskName,
                          task.numberOfTaskRounds,
                        )
                      }
                    />
                  ))}
                </TasksList>
              )}
            </SimpleBar>
          )}
          <CreateTaskForm />
        </div>
      )}
      <TaskHubControls />
    </div>
  );
}

export default TasksHub;
