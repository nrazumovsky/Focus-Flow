import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Button from "../../../shared/UI/Button/Button";
import EColors from "../../../shared/UI/EColors/EColors";
import Text from "../../../shared/UI/Text/Text";
import useClickOutside from "../../../shared/hooks/useClickOutside";
import { useAppDispatch } from "../../../shared/hooks/useRedux";
import {
  deleteTask,
  setTaskName,
} from "../../../shared/store/reducers/setTaskSlice";
import { setResetTimer } from "../../../shared/store/reducers/setTimerControlsSlice";
import styles from "./taskdeletemodal.module.css";

interface ITaskDeleteModal {
  id: string;
  name: string;
  onCancel: () => void;
  onClose: () => void;
}

function TaskDeleteModal(props: ITaskDeleteModal) {
  const { id, onCancel, onClose } = props;

  const [showModal, setShowModal] = useState(false);
  const modalRef = useClickOutside({ onClose });
  const dispatch = useAppDispatch();
  const node = document.getElementById("modal_root");

  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleDelete = (e: MouseEvent) => {
    e.stopPropagation();

    dispatch(setResetTimer());
    dispatch(deleteTask({ taskId: id }));
    dispatch(setTaskName(""));
    onCancel();
  };

  if (!node) return null;

  return createPortal(
    <div className={`${styles.modal} ${showModal ? styles.modalActive : ""}`}>
      <div
        role="dialog"
        aria-modal="true"
        className={styles.modalContainer}
        ref={modalRef}
      >
        <div className={styles.modalHeader}>
          <Text
            As="span"
            size={12}
            color={EColors.black}
            className={styles.modalLabel}
          >
            Подтверждение
          </Text>
          <Button
            As="button"
            className={styles.modalCloseButton}
            onClick={onCancel}
          >
            <span className={styles.modalCloseIcon} />
          </Button>
        </div>
        <Text
          As="span"
          size={14}
          color={EColors.black}
          className={styles.modalText}
        >
          Задача будет удалена
        </Text>
        <div className={styles.modalControls}>
          <Button As="button" className={styles.button} onClick={onCancel}>
            Отмета
          </Button>
          <Button
            As="button"
            className={`${styles.button} ${styles.confirmButton}`}
            onClick={handleDelete}
          >
            Подтвердить
          </Button>
        </div>
      </div>
    </div>,
    node,
  );
}

export default TaskDeleteModal;
