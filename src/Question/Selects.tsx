import React, {
  ReactNode,
} from "react";
import { useDispatch } from "react-redux";
import { updateQuestion } from "../stores/question";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  SxProps,
} from "@mui/material";

type Props = {
  labels: any;
  value: any;
  setValue: any;
  index: any;
  sx?: SxProps;
};

// const styles = {
//   selects: {
//     display: "flex",
//     flexDirection: "row",
//   },
// };


const Selects:React.FC<Props> = ({labels, value, setValue, index, sx }) => {
  const dispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    const newValue = event.target.value;
    dispatch(
      updateQuestion({
        [index]: newValue,
      })
    );
  };

  return (
    <FormControl sx={sx}>
      <RadioGroup value={value} onChange={handleChange} sx={sx}>
        {labels.map(lb => (
          <FormControlLabel
            value={lb.key}
            control={<Radio />}
            label={lb.label}
            key={lb.key}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default Selects;