import React from "react";
import styles from "./taskslist.module.css";

interface ITasksList {
  children: React.ReactNode;
}

function TasksList({ children }: ITasksList) {
  return <ul className={styles.tasksList}>{children}</ul>;
}

export default TasksList;
