import React, { ReactNode } from "react";
import EColors from "../../shared/UI/EColors/EColors";
import Text from "../../shared/UI/Text/Text";
import styles from "./errormessage.module.css";

interface IErrorMessage {
  children: ReactNode;
}

function ErrorMessage(props: IErrorMessage) {
  const { children } = props;

  return (
    <Text
      As="span"
      color={EColors.red}
      size={14}
      className={styles.errormessage}
    >
      {children}
    </Text>
  );
}

export default ErrorMessage;
