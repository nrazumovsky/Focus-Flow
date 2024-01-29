import React, { ChangeEvent, RefObject } from "react";
import EColors from "../../shared/UI/EColors/EColors";
import Input from "../../shared/UI/Input/Input";
import Text from "../../shared/UI/Text/Text";

interface IFormInput {
  className: string;
  labelValue: string;
  inputType: string;
  inputValue: string;
  inputIsDirty?: boolean;
  placeholder: string;
  formInputRef?: RefObject<HTMLInputElement>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
}

const defaultProps = {
  inputIsDirty: null,
  formInputRef: null,
  onBlur: null,
};

function FormInput(props: IFormInput) {
  const {
    className,
    labelValue,
    inputType,
    inputIsDirty,
    inputValue,
    placeholder,
    formInputRef,
    onChange,
    onBlur,
  } = props;

  return (
    <div className={className}>
      <Text As="span" size={12} color={EColors.black}>
        {labelValue}
      </Text>
      <Input
        type={inputType}
        value={inputValue}
        inputIsDirty={inputIsDirty}
        placeholder={placeholder}
        inputRef={formInputRef}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
}

FormInput.defaultProps = defaultProps;

export default FormInput;
