import React from "react";
import { Box } from "@mui/material";
import type { SxProps } from "@mui/material/styles";

type props = {
  img: string;
  width: number | `${number}px` | `${number}%`;
  height: number | `${number}px` | `${number}%`;
  className?: string;
  size?: `${number}px` | `${number}%` | "auto" | "contain" | "cover";
  position?: "top" | "bottom" | "left" | "right" | "center";
  sx?: SxProps;
};

const ImgBox: React.FC<props> = ({
  className,
  img,
  width,
  height,
  position,
  size,
  sx,
}) => {
  return (
    <Box
      sx={{
        className,
        width,
        height,
        backgroundSize: size || "auto",
        backgroundPosition: position || "center",
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        ...sx,
      }}
    />
  );
};

export default ImgBox;
