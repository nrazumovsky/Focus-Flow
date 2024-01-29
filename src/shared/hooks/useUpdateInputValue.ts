import { ChangeEvent, useState } from "react";
import TErrorTypes from "../models/TErrorType";
import useValidation from "./useValidation";

function useUpdateInputValue(initialValue: string, validations: TErrorTypes) {
  const [value, setUpdateValue] = useState(initialValue);
  const valid = useValidation(value, validations);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUpdateValue(e.target.value);
  };

  return { setUpdateValue, ...valid, onChange };
}

export default useUpdateInputValue;
