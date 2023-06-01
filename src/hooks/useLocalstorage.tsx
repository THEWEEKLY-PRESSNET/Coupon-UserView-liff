import { useState, useCallback } from "react";

const getLocalStorageValue = (key: string) => {
  if (typeof window !== "undefined") {
    const item = localStorage.getItem(key);
    return item || null;
  }
  return null;
};

export const useLocalStorage = (key: string) => {
  const [value, setValue] = useState<string | null>(() =>
    getLocalStorageValue(key)
  );

  const setLocalStorageValue = useCallback(
    (setStateAction: string | ((prevState: string) => string)) => {
      const newValue =
        setStateAction instanceof Function
          ? setStateAction(value || "")
          : setStateAction;

      localStorage.setItem(key, newValue);
      setValue(() => newValue);
    },
    [key, value]
  );
  const removeValue = useCallback(() => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
    }
  }, [key]);
  if (typeof window !== "undefined") {
    return [value, setLocalStorageValue, removeValue] as const;
  }
  return [value, setValue, removeValue] as const;
};
