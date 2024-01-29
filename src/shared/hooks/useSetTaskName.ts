import { ChangeEvent, useState } from "react";

function useSetTaskNameValue(initialValue: string) {
  const [taskNameValue, setTaskNameValue] = useState(initialValue);

  const handleTaskNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskNameValue(e.target.value);
  };

  return { taskNameValue, setTaskNameValue, handleTaskNameChange };
}

export default useSetTaskNameValue;
