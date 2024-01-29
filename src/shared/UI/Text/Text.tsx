import classNames from "classnames";
import React, { ReactNode } from "react";
import styles from "./text.module.css";

export type TTextSizes = 12 | 14 | 16 | 18 | 20 | 24 | 32 | 72;

interface IText {
  As: "li" | "span" | "label" | "h1" | "h2" | "h3" | "p";
  dataTitle?: string;
  size: TTextSizes;
  color: string;
  className?: string;
  children: ReactNode;
}

const defaultProps = {
  className: "" as const,
  dataTitle: "" as const,
};

function Text(props: IText) {
  const { As, dataTitle, size, color, className, children } = props;
  const classes = classNames(styles[`s${size}`], styles[`${color}`], [
    `${className}`,
  ]);

  return (
    <As data-title={dataTitle || null} className={classes}>
      {children}
    </As>
  );
}

export default Text;

Text.defaultProps = defaultProps;
