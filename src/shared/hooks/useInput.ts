import { ChangeEvent, useCallback, useState } from "react";
import TErrorTypes from "../../entities/FormInput/models/TErrorType";
import useValidation from "./useValidation";

function useInput(initialValue: string, validations: TErrorTypes) {
  const [value, setValue] = useState(initialValue);
  const [updateValue, setUpdatedValue] = useState(initialValue);
  const valid = useValidation(value, validations);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return { setValue, updateValue, setUpdatedValue, ...valid, onChange };
}

export default useInput;
