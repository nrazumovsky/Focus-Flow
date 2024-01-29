import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../shared/UI/Button/Button";
import EColors from "../../../shared/UI/EColors/EColors";
import Text from "../../../shared/UI/Text/Text";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks/useRedux";
import { setOpenPanel } from "../../../shared/store/reducers/setOpenSettingsPanelSlice";
import SettingsPanel from "./SettingsPanel/SettingsPanel";
import styles from "./navblock.module.css";

function NavBlock() {
  const dispatch = useAppDispatch();
  const openSettingsPanel = useAppSelector(
    (state) => state.setOpenSettingsPanelReducer.isOpen,
  );

  const handleOpenSettingsClick = () => {
    dispatch(setOpenPanel(true));
  };

  const handleCancel = () => {
    dispatch(setOpenPanel(false));
  };

  return (
    <nav>
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <Link to="/statistics" className={styles.button}>
            <Text
              As="span"
              dataTitle="Статистика"
              size={14}
              color={EColors.white}
              className={styles.buttonText}
            >
              Статистика
            </Text>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Button
            As="button"
            className={styles.button}
            onClick={handleOpenSettingsClick}
          >
            <Text
              As="span"
              dataTitle="Настройки"
              size={14}
              color={EColors.white}
              className={styles.buttonText}
            >
              Настройки
            </Text>
          </Button>
          {openSettingsPanel && <SettingsPanel onClose={handleCancel} />}
        </li>
      </ul>
    </nav>
  );
}

export default NavBlock;
