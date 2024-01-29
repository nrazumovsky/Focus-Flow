import React from "react";
import Onboarding from "../../entities/Onboarding/Onboarding";
import { useAppSelector } from "../../shared/hooks/useRedux";
import TasksHub from "../../widgets/TasksHub/TasksHub";
import Timer from "../../widgets/TimerController/TimerController";

function Home() {
  const initializeTimer = useAppSelector(
    (state) => state.setTimerControlsReducer.initializeTimer,
  );

  return (
    <>
      {initializeTimer ? <Timer /> : <Onboarding />}
      <TasksHub />
    </>
  );
}

export default Home;
