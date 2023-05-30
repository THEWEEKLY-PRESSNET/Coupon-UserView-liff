import React, {
  ReactNode,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

import { updateQuestion } from "../stores/question";

const interestingLabels = [
  { key: "gourmet", label: "グルメ" },
  { key: "shoping", label: "ショッピング" },
  { key: "fashion", label: "おしゃれ" },
  { key: "car", label: "車" },
  { key: "health", label: "健康" },
  { key: "living", label: "住まい" },
  { key: "study", label: "習い事（スキルアップ）" },
  { key: "entertainment", label: "エンタメ" },
  { key: "sports", label: "スポーツ" },
  { key: "childcare", label: "子育て" },
  { key: "work", label: "働く" },
  { key: "jobchange", label: "転職" },
  { key: "travel", label: "旅行" },
  { key: "money", label: "マネー" },
];


const Checks = () => {
  const question = useSelector(s => s.question);
  console.log("question", question);
  const dispatch = useDispatch();

  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>, key) => {
    const checked = (e.target as HTMLInputElement).checked;
    const checkedObj = { ...question.interesting, [key]: checked };
    console.log("checkedObj", checkedObj);

    if (e.target.checked) {
      dispatch(
        updateQuestion({
          interesting: checkedObj
        })
      )
    }
    else {
      const filteredObj = Object.fromEntries(
        Object.entries(checkedObj).filter(([key, value]) => value === true)
      );
      dispatch(
        updateQuestion({
          interesting: filteredObj
        })
      );
    };
  };

  return (
    <Box>
      {interestingLabels.map(checkbox => (
        <FormControlLabel
          // ラベルの文字
          label={checkbox.label}
          key={checkbox.label}
          control={
            <Checkbox
              onChange={(e) => handleChange2(e, checkbox.key)}
            />
          }
        />
      ))}
    </Box>
  );
};

export default Checks;