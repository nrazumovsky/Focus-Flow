import React from "react";
import HeaderGradient from "./HeaderGradient/HeaderGradient";
import Logo from "./Logo/Logo";
import NavBlock from "./NavBlock/NavBlock";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerContent}>
          <Logo />
          <NavBlock />
          <HeaderGradient />
        </div>
      </div>
    </header>
  );
}

export default Header;
