import React from "react";
import EColors from "../../shared/UI/EColors/EColors";
import Text from "../../shared/UI/Text/Text";
import goon from "./assets/goon.svg";
import long from "./assets/long.svg";
import short from "./assets/short.svg";
import start from "./assets/start.svg";
import work from "./assets/work.svg";
import write from "./assets/write.svg";
import styles from "./onboarding.module.css";

function Onboarding() {
  return (
    <div className={styles.container}>
      <Text As="h1" size={72} color={EColors.black} className={styles.title}>
        Повысьте свою продуктивность и&nbsp;концентрацию
      </Text>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img src={write} alt="Work Icon" className={styles.icon} />
          <Text
            As="p"
            size={18}
            color={EColors.black}
            className={styles.description}
          >
            Напишите название текущей задачи
          </Text>
        </div>
        <div className={styles.card}>
          <img src={start} alt="Work Icon" className={styles.icon} />
          <Text
            As="p"
            size={18}
            color={EColors.black}
            className={styles.description}
          >
            Запустите таймер (&laquo;Focus&raquo;)
          </Text>
        </div>
        <div className={styles.card}>
          <img src={work} alt="Work Icon" className={styles.icon} />
          <Text
            As="p"
            size={18}
            color={EColors.black}
            className={styles.description}
          >
            Продолжайте работать, пока не&nbsp;услышите звуковой сигнал
          </Text>
        </div>
        <div className={styles.card}>
          <img src={short} alt="Work Icon" className={styles.icon} />
          <Text
            As="p"
            size={18}
            color={EColors.black}
            className={styles.description}
          >
            Сделайте короткий перерыв (3-5&nbsp;минут)
          </Text>
        </div>
        <div className={styles.card}>
          <img src={goon} alt="Work Icon" className={styles.icon} />
          <Text
            As="p"
            size={18}
            color={EColors.black}
            className={styles.description}
          >
            Продолжайте работать, пока задача не&nbsp;будут выполнена
          </Text>
        </div>
        <div className={styles.card}>
          <img src={long} alt="Work Icon" className={styles.icon} />
          <Text
            As="p"
            size={18}
            color={EColors.black}
            className={styles.description}
          >
            Каждые&nbsp;4 &laquo;Фокуса&raquo; делайте длинный перерыв
            (15-30&nbsp;минут)
          </Text>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
