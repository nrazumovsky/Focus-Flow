import { ChangeEvent, useState } from "react";

function useHandleValue(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { value, setValue, handleValueChange };
}

export default useHandleValue;
