import React, { useState, useRef, ReactNode } from "react";
import { InputBase } from "@mui/material";

const extendStyles = {
  fontSize: "16px",
};

type props = {
  id?: string;
  className?: string;
  required?: boolean;
  fullWidth?: boolean;
  multiline?: boolean;
  size: "medium" | "small";
  rows?: number;
  helperText?: string;
  placeholder?: string;
  autoComplete?: string;
  endAdornment?: ReactNode;
  value: string | number | null;
  setValue: (a: any) => void;
  isReady: boolean;
  setIsReady: (v: any) => void;
  exp: RegExp;
  sx?: {};
  type?: string;
  onChange?: () => void;
  // type?: "tel" | "text";
};

const InputValidated: React.FC<props> = ({
  id,
  className,
  required,
  fullWidth,
  multiline,
  size,
  rows,
  placeholder,
  autoComplete,
  endAdornment,
  value,
  setValue,
  isReady,
  setIsReady,
  exp,
  sx,
  type,
  onChange,
}) => {
  const [style, setStyle] = useState<any>({
    px: "14px",
    py: "16.5px",
    pt: "12.5px",
    pb: "11.5px",
    width: "100%",
    border: "1px solid rgba(0, 0, 0, 0.23)",
    borderRadius: "4px",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    if (exp !== undefined && isReady !== undefined) {
      if (exp.test(e.currentTarget.value)) {
        setIsReady(true);
      } else {
        setIsReady(false);
      }
    }
    if (onChange) {
      onChange();
    }
  };
  const onFocus = () => {
    setStyle({
      ...style,
      borderWidth: "2px",
      borderColor: "primary.main",
      px: "13px",
      py: "15.5px",
      pt: "11.5px",
      pb: "10.5px",
    });
  };
  const onBlur = () => {
    setStyle({
      ...style,
      borderWidth: "1px",
      borderColor: "rgba(0, 0, 0, 0.23)",
      px: "14px",
      py: "16.5px",
      pt: "12.5px",
      pb: "11.5px",
    });
  };
  const baseStyle = {
    fontSize: "16px",
  };
  const inputRef = useRef(null);
  const updateSelectionStart = () => {
    if (inputRef.current !== null && type === "number") {
      inputRef.current.min = 0;
    }
  };

  return (
    <InputBase
      className={`${className} input-base-validated`}
      margin="dense"
      id={id}
      required={required}
      fullWidth={fullWidth}
      multiline={multiline}
      size={size}
      rows={rows}
      autoComplete={autoComplete}
      value={value}
      error={!isReady}
      onChange={handleChange}
      onSelect={updateSelectionStart}
      inputRef={inputRef}
      sx={{ ...sx, ...style, ...extendStyles, ...baseStyle }}
      type={type}
      inputProps={{ onFocus, onBlur, placeholder }}
      endAdornment={endAdornment}
    />
  );
};

export default InputValidated;
