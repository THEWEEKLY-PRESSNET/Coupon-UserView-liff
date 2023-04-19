import React, { useState, ReactNode } from "react";
import { Box, Typography, Paper } from "@mui/material";

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
  capTitle: {
    fontSize: "18px",
    fontWeight: 600,
  },
};

type props = {
  children: ReactNode;
};

const genderLabels = [
  { key: "male", label: "男性" },
  { key: "femaile", label: "男性" },
  { key: "others", label: "男性" },
];
const ageLabels = [
  { key: "10s", label: "１０代" },
  { key: "20s", label: "２０代" },
  { key: "30s", label: "３０代" },
  { key: "40s", label: "４０代" },
  { key: "50s", label: "５０代" },
  { key: "60s", label: "６０代" },
  { key: "70s", label: "７０代" },
];
const livingLabels = [
  { key: "saijo", label: "西条" },
  { key: "hachihonmatu", label: "八本松" },
  { key: "shiwa", label: "志和" },
  { key: "takaya", label: "高屋" },
  { key: "kurose", label: "黒瀬" },
  { key: "fukutomi", label: "福富" },
  { key: "toyosaka", label: "豊栄" },
  { key: "kouchi", label: "河内" },
  { key: "akitu", label: "安芸津" },
  { key: "others", label: "その他" },
];
const interestingLabels = [
  { key: "gourmet", label: "男性" },
  { key: "shoping", label: "男性" },
  { key: "fashion", label: "男性" },
  { key: "car", label: "男性" },
  { key: "health", label: "男性" },
  { key: "living", label: "男性" },
  { key: "study", label: "男性" },
  { key: "entertainment", label: "男性" },
  { key: "sports", label: "男性" },
  { key: "childcare", label: "男性" },
  { key: "work", label: "男性" },
  { key: "jobchange", label: "男性" },
  { key: "travel", label: "男性" },
  { key: "money", label: "男性" },
];

const Selects = () => {
  return <Box></Box>;
};

const Question: React.FC<props> = () => {
  const [gender, setGender] = useState<Gender | null>(null);
  const [age, setAge] = useState<Age | null>(null);
  const [living, setLiving] = useState<Living | null>(null);
  const [interesting, setInteresting] = useState<Interesting | null>(null);

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
        <Typography component="p" variant="subtitle" sx={styles.title}>
          年代
        </Typography>
        <Typography component="p" variant="subtitle" sx={styles.title}>
          居住地
        </Typography>
        <Typography component="p" variant="subtitle" sx={styles.title}>
          興味・関心があるジャンル
        </Typography>
      </Paper>
    </Box>
  );
};

export default Question;
