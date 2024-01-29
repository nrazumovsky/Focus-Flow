import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ITask from "../../models/ITask";

interface ITaskState {
  task: string;
  selectTask: string;
  taskRoundsNumber: string;
  tasks: ITask[];
}

const initialState: ITaskState = {
  task: "",
  selectTask: "",
  taskRoundsNumber: "",
  tasks: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTaskName(state, action: PayloadAction<string>) {
      return {
        ...state,
        task: action.payload,
      };
    },
    setNumberOfTaskRounds(state, action: PayloadAction<string>) {
      return {
        ...state,
        taskRoundsNumber: action.payload,
      };
    },
    addTaskToList(
      state,
      action: PayloadAction<{
        taskId: string;
        taskName: string;
        numberOfTaskRounds: string;
      }>,
    ) {
      state.tasks.push(action.payload);
    },
    updateTask(
      state,
      action: PayloadAction<{
        taskId: string;
        taskName: string;
        numberOfTaskRounds: string;
      }>,
    ) {
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.taskId === action.payload.taskId
            ? {
                ...task,
                taskName: action.payload.taskName,
                numberOfTaskRounds: action.payload.numberOfTaskRounds,
              }
            : task,
        ),
      };
    },
    deleteTask(state, action: PayloadAction<{ taskId: string }>) {
      return {
        ...state,
        tasks: state.tasks.filter(
          (task) => task.taskId !== action.payload.taskId,
        ),
      };
    },
    selectTask(state, action: PayloadAction<string>) {
      return {
        ...state,
        selectTask: action.payload,
      };
    },
  },
});

export const {
  setTaskName,
  setNumberOfTaskRounds,
  addTaskToList,
  updateTask,
  deleteTask,
  selectTask,
} = taskSlice.actions;

export default taskSlice.reducer;
