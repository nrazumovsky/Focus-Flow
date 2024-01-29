import React from "react";
import { Link } from "react-router-dom";
import FocusFlow from "../../../assets/logo/FocusFlow.svg";
import styles from "./logo.module.css";

function Logo() {
  return (
    <Link to="/" className={styles.icon}>
      <img src={FocusFlow} alt="Focus Flow Logo" loading="lazy" />
    </Link>
  );
}

export default Logo;
