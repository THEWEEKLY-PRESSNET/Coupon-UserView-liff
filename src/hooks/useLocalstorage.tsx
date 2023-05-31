import { useState, useCallback } from "react";

const getLocalStorageValue = (key: string) => {
  if (window === undefined) {
    return "";
  }
  const item = localStorage.getItem(key);
  return item || "";
};

export const useLocalStorage = (key: string) => {
  const [value, setValue] = useState<string>(() => getLocalStorageValue(key));

  const setLocalStorageValue = useCallback(
    (setStateAction: string | ((prevState: string) => string)) => {
      const newValue =
        setStateAction instanceof Function
          ? setStateAction(value)
          : setStateAction;

      localStorage.setItem(key, newValue);
      setValue(() => newValue);
    },
    [key, value]
  );
  if (window === undefined) {
    return [value, setValue] as const;
  }
  return [value, setLocalStorageValue] as const;
};
