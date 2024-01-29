import classNames from "classnames";
import React from "react";
import EColors from "../EColors/EColors";
import EIcons from "./EIcons";
import styles from "./icon.module.css";
import svg from "./icons.svg";

export type TIconSizes = 24 | 20 | 16 | 14 | 10;

interface IIcons {
  name: EIcons;
  color: EColors;
  size: TIconSizes;
  className?: string;
}

function Icon(props: IIcons) {
  const { name, color, size, className } = props;
  const classes = classNames(styles[`size-${size}`], styles[`${color}`]);

  return (
    <span className={`${styles.icon} ${className}`}>
      <svg className={`icon-${name} ${classes}`}>
        <use xlinkHref={`${svg}#${name}`} />
      </svg>
    </span>
  );
}

export default Icon;
