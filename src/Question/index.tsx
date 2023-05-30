import React, {
  useState,
  ReactNode,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Typography,
  Paper,
  Button,
} from "@mui/material";

import type { Gender, Age, Living } from "../stores/question";
import { updateQuestion } from "../stores/question";
import { updateTopState } from "../stores/topState";
import type { Root } from "../stores";
import postQuestion from "../providers/PostQuestions";
import Checks from "./Checks";
import Selects from "./Selects";

const styles = {
  container: {
    bgcolor: "#FCFAC7",
    padding: "40px 15px"
  },
  body: {
    width: "100%",
    bgcolor: "white",
    color: "#404040",
    borderRadius: "20px",
    boxShadow: "none",
  },
  title: {
    display: "block",
    padding: "2px 20px",
    bgcolor: "#FFFEE8",
    width: 'calc(100% - 40px)',
    margin: "auto",
    fontSize: "12px",
    fontWeight: 600,
    lineHeight: "1",
  },
  selects: {
    display: "flex",
    flexDirection: "row",
  },
  lead: {
    padding: "20px 22px"
  },
  capTitle: {
    fontSize: "18px",
    fontWeight: 600,
    textAlign: "center",
    mb: "20px"
  },
  capText: {
    fontSize: "12px",
    lineHeight: "18px"
  },
  inputs: {
    padding: "10px 30px",
  },
  submitBtn: {
    display: "flex",
    fontSize: "16px",
    borderRadius: "30px",
    width: "190px",
    height: "60px",
    margin: "20px auto 0",
  },
  genreMemo: {
    display: "inline-block",
    fontSize: "12px",
    fontWeight: 300,
    pl: "10px"
  }
};

export type Props = {
  labels: any;
  value: any;
  setValue: any;
  index: any;
};

const genderLabels = [
  { key: "male", label: "男性" },
  { key: "female", label: "女性" },
  { key: "others", label: "その他" },
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


const Question: React.FC<Props> = () => {
  const [gender, setGender] = useState<Gender | null>(null);
  const [age, setAge] = useState<Age | null>(null);
  const [living, setLiving] = useState<Living | null>(null);

  const question = useSelector((s: Root) => s.question);
  console.log("question", question);
  const dispatch = useDispatch();

  //送信ボタンの有効化・無効化
  const unClickable = (() => {
    if (gender && age && living !== null) {
      if (Object.keys(question.interesting).length !== 0) {
        return false;
      }
      return true;
    }
    else {
      return true;
    }
  })();

  //送信ボタンのクリック後にバックエンドとの通信
  const onClickSubmit = async () => {
    const questionData = { ...question };
    const interestingObj = questionData.interesting;
    dispatch(
      updateQuestion({
        interesting: interestingObj
      })
    );
    const returnData = await postQuestion(questionData);
    if (returnData.result) {
      dispatch(
        updateTopState({
          view: "top"
        })
      )
    }
  };

  return (
    <Box sx={styles.container} className="question">
      <Typography sx={styles.capTitle}>アンケート</Typography>
      <Paper sx={styles.body}>
        <Box sx={styles.lead}>
          <Typography sx={styles.capText}>
            お友達登録ありがとうございます。<br />
            クーポン企画に参加していただくために、初回だけアンケートにご協力ください。
          </Typography>
        </Box>
        <Typography component="p" variant="subtitle" sx={styles.title}>
          性別
        </Typography>
        <Box sx={styles.inputs}>
          <Selects
            labels={genderLabels}
            value={gender}
            setValue={setGender}
            index="gender"
            sx={styles.selects}
          />
        </Box>
        <Typography component="p" variant="subtitle" sx={styles.title}>
          年代
        </Typography>
        <Box sx={styles.inputs}>
          <Selects
            labels={ageLabels}
            value={age}
            setValue={setAge}
            index="age"
            sx={styles.selects}
          />
        </Box>
        <Typography component="p" variant="subtitle" sx={styles.title}>
          居住地
        </Typography>
        <Box sx={styles.inputs}>
          <Selects
            labels={livingLabels}
            value={living}
            setValue={setLiving}
            index="living"
            sx={styles.selects}
          />
        </Box>
        <Typography component="p" variant="subtitle" sx={styles.title}>
          興味・関心があるジャンル
        </Typography>
        <Box sx={styles.inputs}>
          <Checks />
        </Box>
      </Paper>
      <Button variant="contained" sx={styles.submitBtn} disabled={unClickable} onClick={() => onClickSubmit()}>送信</Button>
    </Box>
  );
};

export default Question;
