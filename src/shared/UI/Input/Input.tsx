import React, { ChangeEvent, RefObject } from "react";
import styles from "./input.module.css";

interface IInput {
  type: string;
  placeholder?: string;
  value: string;
  inputIsDirty?: boolean;
  inputRef?: RefObject<HTMLInputElement>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
}

const defaultProps = {
  placeholder: null,
  inputIsDirty: "" as const,
  inputRef: null,
  onBlur: null,
};

function Input(props: IInput) {
  const { type, placeholder, value, inputIsDirty, inputRef, onChange, onBlur } =
    props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${styles.input} ${inputIsDirty ? styles.inputError : ""}`}
      value={value}
      onChange={onChange}
      ref={inputRef}
      onBlur={onBlur}
    />
  );
}

Input.defaultProps = defaultProps;

export default Input;
