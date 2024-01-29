import React from "react";
import Button from "../Button/Button";
import styles from "./closebuttton.module.css";

interface ICloseButton {
  className: string;
  onClick: () => void;
}

function CloseButton(props: ICloseButton) {
  const { className, onClick } = props;

  return (
    <Button
      As="button"
      className={`${styles.closeButton} ${className}`}
      onClick={onClick}
    >
      <span className={styles.closeIcon} />
    </Button>
  );
}
export default CloseButton;
