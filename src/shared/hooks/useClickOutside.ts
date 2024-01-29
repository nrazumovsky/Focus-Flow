import { useEffect, useRef, useState } from "react";
import IOnClose from "../models/IOnClose";

function useClickOutside({ onClose }: IOnClose) {
  const ref = useRef<any>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleClick = (e: MouseEvent) => {
      if (
        isMounted &&
        e.target instanceof Node &&
        !ref.current?.contains(e.target)
      ) {
        onClose?.();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [onClose, isMounted]);

  return ref;
}

export default useClickOutside;
