import React, { ReactNode } from "react";
import styles from "./useractivitytile.module.css";

interface IUserActivityTile {
  children: ReactNode;
}

function UserActivityTile(props: IUserActivityTile) {
  const { children } = props;
  return <div className={styles.container}>{children}</div>;
}

export default UserActivityTile;
