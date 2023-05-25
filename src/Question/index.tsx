import React, {
  useState,
  useMemo,
  ReactNode,
  useReducer,
  useEffect,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  Checkbox,
  FormControlLabel,
  Radio,
  Typography,
  Paper,
  Button,
} from "@mui/material";

import type { Gender, Age, Living, Interesting } from "../stores/question";

import { updateQuestion } from "../stores/question";
import { updateTopState } from "../stores/topState";
import type { Root } from "../stores";
import postQuestion from "../providers/PostQuestions";
import { Key } from "@mui/icons-material";

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

const Selects = ({ labels, value, setValue, index }) => {
  console.log("value1", value);
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

const Checks = ({ value, setValue, index }) => {
  const question = useSelector(s => s.question);
  const questionInteresting = { ...question.interesting };
  console.log("question", question);
  console.log("questionInteresting1", questionInteresting);
  // const value = false;
  const dispatch = useDispatch();

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>, index) => {
    console.log("event2", event);
    console.log("key tag", index);
    const newArr = setValue((event.target as HTMLInputElement).checked);
    // console.log("newArr", newArr);
    const newValue = event.target.checked;
    console.log("newValue", newValue);
    //オブジェクトとして扱う そのためにどうする？

    //データにある日本語のラベル（これはOK）
    const label = interestingLabels.filter(o => {
      return o.key === index;
    })[0].label;

    console.log("questionInteresting2", questionInteresting);

    //今チェックされた一つの項目
    // const objItem = {...questionInteresting};
    // console.log("objItem", objItem);

    if (event.target.checked) {
      const newData = { key: index, label: label };
      //一番最後に押したチェックしかスライスに渡せない
      //useEffect使う？
      // const newObj = Object.assign(questionInteresting, newData);
      const newObj = { ...questionInteresting, newData };
      console.log("newObj", newObj);
      // newArr.push({ key: index, label: label });
      // const obj = Object.fromEntries(newArr);
      dispatch(
        updateQuestion({
          interesting: newObj
        })
      );
    } else {
      // const updatedNewArr = newArr.filter(o => o.key !== index);
      // dispatch(
      //   updateQuestion({
      //     interesting: updatedNewArr
      //   })
      // );
    }
  };

  // const newObj = { gourmet: { key: "gourmet", label: "グルメ" }, shopping: { key: "shoping", label: "ショッピング" } }

  return (
    <Box>
      {interestingLabels.map(checkbox => (
        <FormControlLabel
          // ラベルの文字
          label={checkbox.label}
          control={
            <Checkbox
              onChange={(e, b) => handleChange2(e, checkbox.key)}
            />
          }
        />
      ))}
    </Box>
  );
};

const Question: React.FC<props> = () => {
  const [gender, setGender] = useState<Gender | null>(null);
  const [age, setAge] = useState<Age | null>(null);
  const [living, setLiving] = useState<Living | null>(null);
  const [interesting, setInteresting] = useState<Interesting | null>(null);
  // const newInterestingLabels = interestingLabels.map(i => {
  //   i.checkbox = false;
  //   return i;
  // });

  const question = useSelector(s => s.question);
  // const questionInteresting = question.interesting;
  console.log("question", question);
  const dispatch = useDispatch();

  // const allChecked = (() => {
  //   if (gender && age && living && interesting !== null) {
  //     console.log("all-checked");
  //     return false;
  //   } else {
  //     return true;
  //   }
  // })();


  const handleClick = (() => {
    if (gender && age && living && interesting !== null) {
      return false;
    }
    else {
      return true;
    }
  })();

  // interestingLabels[0].checkbox = true;

  const { view } = useSelector((s: Root) => s.topState);

  const onClickSubmit = async () => {
    const questionData = { ...question };
    const interestingArr = questionData.interesting;
    const interestingObj = interestingArr.reduce((obj, item) => {
      obj[item.key] = item.label;
      return obj;
    }, {});
    console.log("interestingObj", interestingObj);
    //interestingObjをquestionData.interestingへ格納
    dispatch(
      updateQuestion({
        interesting: interestingObj
      })
    );
    const returnData = await postQuestion(questionData);
    if (resultData.result) {
      dispatch(
        updateTopState({
          view: "top"
        })
      )
    }
  };

  return (
    <Box sx={styles.container}>
      <Typography sx={styles.capTitle}>アンケートです</Typography>
      <Paper sx={styles.body}>
        <Typography>
          お友達登録ありがとうございます。
          クーポン企画に参加していただくために、初回だけアンケートにご協力ください。
        </Typography>
        <Typography component="p" variant="subtitle" sx={styles.title}>
          性別
        </Typography>
        <Box>
          <Selects
            labels={genderLabels}
            value={gender}
            setValue={setGender}
            index="gender"
          />
        </Box>
        <Typography component="p" variant="subtitle" sx={styles.title}>
          年代
        </Typography>
        <Box>
          <Selects
            labels={ageLabels}
            value={age}
            setValue={setAge}
            index="age"
          />
        </Box>
        <Typography component="p" variant="subtitle" sx={styles.title}>
          居住地
        </Typography>
        <Box>
          <Selects
            labels={livingLabels}
            value={living}
            setValue={setLiving}
            index="living"
          />
        </Box>
        <Typography component="p" variant="subtitle" sx={styles.title}>
          興味・関心があるジャンル
        </Typography>
        <Box>
          <Checks
            setValue={setInteresting}
            value={interesting}
            index="interesting"
          // labels={newInterestingLabels}
          />
        </Box>
      </Paper>
      {/* <Button variant="contained" disabled={allChecked}>
        ボタン
      </Button> */}
      <Button disabled={handleClick} onClick={() => onClickSubmit()}>Submit</Button>
    </Box>
  );
};

export default Question;
