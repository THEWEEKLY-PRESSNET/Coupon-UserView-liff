import React, { useState, ReactNode } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Paper,
} from "@mui/material";

import type { Gender, Age, Living, Interesting } from "src/stores/question";

const styles = {
  container: {
    bgcolor: "#F5F5F5",
  },
  body: {
    width: "100%",
  },
  title: {
    width: "100%",
    pl: 2,
    bgcolor: "#FFFEE8",
  },
  selects: {
    display: "flex",
    flexDirection: "row",
  },
  capTitle: {
    fontSize: "18px",
    fontWeight: 600,
  },
};

type props = {
  children: ReactNode;
};

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

const Selects = ({ labels, value, setValue }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl sx={styles.selects}>
      <RadioGroup value={value} onChange={handleChange} sx={styles.selects}>
        {labels.map(lb => (
          <FormControlLabel
            value={lb.key}
            control={<Radio />}
            label={lb.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

const Question: React.FC<props> = () => {
  const [gender, setGender] = useState<Gender | null>(null);
  const [age, setAge] = useState<Age | null>(null);
  const [living, setLiving] = useState<Living | null>(null);
  const [interesting, setInteresting] = useState<Interesting | null>(null);
  console.log("gender", gender);

  return (
    <Box sx={styles.container}>
      <Typography sx={styles.capTitle}>アンケート</Typography>
      <Paper sx={styles.body}>
        <Typography>
          お友達登録ありがとうございます。
          クーポン企画に参加していただくために、初回だけアンケートにご協力ください。
        </Typography>
        <Typography component="p" variant="subtitle" sx={styles.title}>
          性別
        </Typography>
        <Box>
          <Selects labels={genderLabels} value={gender} setValue={setGender} />
        </Box>
        <Typography component="p" variant="subtitle" sx={styles.title}>
          年代
        </Typography>
        <Box>
          <Selects labels={ageLabels} value={age} setValue={setAge} />
        </Box>
        <Typography component="p" variant="subtitle" sx={styles.title}>
          居住地
        </Typography>
        <Box>
          <Selects labels={livingLabels} value={living} setValue={setLiving} />
        </Box>
        <Typography component="p" variant="subtitle" sx={styles.title}>
          興味・関心があるジャンル
        </Typography>
        <Box>
          <Selects labels={interestingLabels} />
        </Box>
      </Paper>
    </Box>
  );
};

export default Question;
