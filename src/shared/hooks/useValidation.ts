import { useCallback, useEffect, useRef, useState } from "react";
import TErrorTypes from "../../entities/FormInput/models/TErrorType";

function useValidation(value: string, validations: TErrorTypes) {
  const [isEmpty, setEmpty] = useState(false);
  const [isDirty, setDirty] = useState(false);
  const [isTouched, setTouched] = useState(false);
  const [isValid, setValid] = useState(false);
  const [minRoundsNumber, setMinRoundsNumberError] = useState(false);
  const [maxRoundsNumber, setMaxRoundsNumberError] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleBlur = useCallback(() => {
    if (isEmpty) {
      setDirty(true);
    }
  }, [isEmpty]);

  const handleSetIsEmpty = useCallback((empty: boolean) => {
    setEmpty(empty);
  }, []);

  const handleInput = useCallback((valid: boolean) => {
    setValid(valid);
  }, []);

  useEffect(() => {
    if (isEmpty || minRoundsNumber || maxRoundsNumber) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [isEmpty, minRoundsNumber, maxRoundsNumber, handleInput]);

  useEffect(() => {
    const handleTouched = (e: Event) => {
      if (e.target instanceof Node && inputRef.current?.contains(e.target)) {
        setTouched(true);
      }
    };

    document.addEventListener("keyup", handleTouched);

    return () => document.removeEventListener("keyup", handleTouched);
  }, [isEmpty]);

  useEffect(() => {
    Object.keys(validations).forEach((validation) => {
      switch (validation) {
        case "isEmpty":
          if (value) {
            handleSetIsEmpty(false);
          } else {
            handleSetIsEmpty(true);
          }
          break;
        case "minRoundsNumber":
          if (value && Number(value) >= Number(validations[validation])) {
            setMinRoundsNumberError(false);
          } else {
            setMinRoundsNumberError(true);
          }
          break;
        case "maxRoundsNumber":
          if (value && Number(value) <= Number(validations[validation])) {
            setMaxRoundsNumberError(false);
          } else {
            setMaxRoundsNumberError(true);
          }
          break;
        default:
          break;
      }
    });
  }, [
    isEmpty,
    value,
    validations,
    isDirty,
    minRoundsNumber,
    maxRoundsNumber,
    handleSetIsEmpty,
  ]);

  return {
    isEmpty,
    setEmpty,
    isDirty,
    setDirty,
    setTouched,
    minRoundsNumber,
    maxRoundsNumber,
    inputRef,
    handleBlur,
    value,
    isTouched,
    isValid,
  };
}

export default useValidation;
