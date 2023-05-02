import React, { useState, useMemo, ReactNode, useReducer, useEffect } from "react";
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

import type { Gender, Age, Living, Interesting } from "src/stores/question";

import { updateQuestion } from '../stores/question';

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

const Selects = ({ labels, value, setValue }) => {
  console.log("value1", value);
  const dispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("event", event);
    setValue((event.target as HTMLInputElement).value);
    const newValue = event.target.value;
    // dispatch(
    //   updateQuestion({
    //     gender: event.target.value,
    //     age: event.target.value,
    //     living: event.target.value,
    //   })
    // );
    if (newValue === "male" || newValue === "female" || newValue === "others") {
      dispatch(
        updateQuestion({
          gender: newValue
        }),
      )
      // return
    }
    else if (newValue === "10s" || newValue === "20s" || newValue === "30s" || newValue === "40s" || newValue === "50s" || newValue === "60s" || newValue === "70s") {
      dispatch(
        updateQuestion({
          age: newValue
        }),
      )
      // return
    }
    else{
    dispatch(
      updateQuestion({
        living: newValue
      })
    )}
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

const Checks = ({ labels, value, setValue }) => {
  // const checks = "something";
  // const [check, setCheck] = useState(checks);

  // const newInterestingLabels = interestingLabels.map((i) => {
  //   return {
  //     ...i, // 既存のプロパティを展開
  //     checkbox: "false", // 新しいプロパティを追加
  //   };
  // });

  //   interestingLabels[0].checkbox = true;
  const hoge = interestingLabels.map(i => {
    i.checkbox = false;
    return i;
  });
  console.log("hoge", hoge);

  // console.log("newInteresting-1",interestingLabels)
  // const hoge = interestingLabels;
  // hoge.push({checkbox: false});
  // console.log("newInteresting-2",interestingLabels)

  // console.log("newInterestingLabels", newInterestingLabels)
  // const [check, setCheck] = useState(newInterestingLabels);

  // const checksWithFunc = () => {};
  // const [checkF, setCheckF] = useState(checksWithFunc());

  // const newInterestingLabelsFunc = () => {
  //   return interestingLabels.map((i) => {
  //     return {
  //       ...i,
  //       checkbox: "false",
  //     };
  //   });
  // };

  // console.log("newInterestingLabelsFunc", newInterestingLabelsFunc());
  // const [checkFunc, setCheckFunc] = useState(newInterestingLabelsFunc());

  const handleChange = () => {
  };
  return (
    <Box>
      {hoge.map(checkbox => (
        <FormControlLabel
          value={checkbox.key}
          control={<Checkbox />}
          label={checkbox.label}
          onChange={() => handleChange()}
        />
      ))}
    </Box>
  );
};

const Question: React.FC<props> = () => {
  const [gender, setGender] = useState<Gender | null>(null);
  // const [gender, setGender] = useReducer<Gender | null>(reducer, initialState);
  const [age, setAge] = useState<Age | null>(null);
  const [living, setLiving] = useState<Living | null>(null);
  const [interesting, setInteresting] = useState<Interesting | null>(null);
  console.log("gender", gender);

  const question = useSelector((s) => s.question);
  console.log("question", question);
  // const selectChecked = () => {
  //   if (gender || age || living || interesting !== null) {
  //     console.log("checked");
  //     return false;
  //   } else {
  //     return true;
  //   }
  // };

  // const c = gender === null;

  // const notChecked = useMemo(() => {
  //   if (gender !== null) {
  //     return false;
  //   }
  //   return true;
  // }, [gender]);

  const allChecked = (() => {
    if (gender && age && living !== null) {
      console.log("all-checked");
      return false;
    } else {
      return true;
    }
  })();

  return (
    <Box sx={styles.container}>
      <Typography sx={styles.capTitle}>アンケートです!!!!!</Typography>
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
          {/* <Selects
            labels={interestingLabels}
            value={interesting}
            setValue={setInteresting}
          /> */}
          <Checks
            labels={interestingLabels}
            value={interesting}
            setValue={setInteresting}
          />
        </Box>
      </Paper>
      <Button variant="contained" disabled={allChecked}>
        ボタン
      </Button>
    </Box>
  );
};

export default Question;
