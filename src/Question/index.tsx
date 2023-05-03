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

const Selects = ({ labels, value, setValue, index }) => {
  console.log("value1", value);
  const dispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("event", event);
    setValue((event.target as HTMLInputElement).value);
    const newValue = event.target.value;
    dispatch(
      updateQuestion({
        [index]: newValue
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

const Checks = ({ labels, value, setValue }) => {
  const [boxChecked, setBoxChecked] = useState(false);
  console.log("value2", value);
  console.log("labels", labels);
  // console.log("checked", checked);
  const dispatch = useDispatch();
  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("event2", event);
    setValue((event.target as HTMLInputElement).value);
    const newValue = event.target.value;
    console.log("newValue", newValue);
    dispatch(
      updateQuestion({
        [labels]: newValue
      })
      );

    // const checkedItems = labels.filter((value) => {
    //   return value = checked === checked;
    // })
    // console.log("vcheckedItems", checkedItems);
    const newInterestingLabels = interestingLabels.map(i => {
      i.checkbox = false;
      return i
    });
    console.log("newInterestingLabels", newInterestingLabels);

  //   const checkA = newInterestingLabels.map(i => {
  //     if (i.checked) {
  //       i.checkbox = true;
  //     }
  //     else {
  //       i.checkbox = false;
  //     }
  //     return i;
  //   });
  // console.log("checkA", checkA);

};



return (
  <Box>
    {interestingLabels.map(checkbox => (
      <FormControlLabel
        // value={checkbox.key}
        // index="interesting"
        checked={checkbox.checked}
        label={checkbox.label}
        control={<Checkbox
          labels={interestingLabels}
          value={value}
          setValue={setValue}
          onChange={handleChange2}
          label={checkbox.label}
          checked={checkbox.checked}
          index="interesting"
        />}
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
  console.log("gender", gender);
  console.log("interesting", interesting);

  const question = useSelector((s) => s.question);
  console.log("question", question);

  //   interestingLabels[0].checkbox = true;
  // const newInterestingLabels = interestingLabels.map(i => {
  //   if (i.checked) {
  //     i.checkbox = true;
  //   }
  //   else if(!i.checked){
  //     i.checkbox = false;
  //   }
  //   return i;
  // });
  // console.log("newInterestingLabels", newInterestingLabels);


  // const c = gender === null;
  // const notChecked = useMemo(() => {
  //   if (gender !== null) {
  //     return false;
  //   }
  //   return true;
  // }, [gender]);

  const allChecked = (() => {
    if (gender && age && living && interesting !== null) {
      console.log("all-checked");
      return false;
    } else {
      return true;
    }
  })();

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
          <Selects labels={genderLabels} value={gender} setValue={setGender} index="gender" />
        </Box>
        <Typography component="p" variant="subtitle" sx={styles.title}>
          年代
        </Typography>
        <Box>
          <Selects labels={ageLabels} value={age} setValue={setAge} index="age" />
        </Box>
        <Typography component="p" variant="subtitle" sx={styles.title}>
          居住地
        </Typography>
        <Box>
          <Selects labels={livingLabels} value={living} setValue={setLiving} index="living" />
        </Box>
        <Typography component="p" variant="subtitle" sx={styles.title}>
          興味・関心があるジャンル
        </Typography>
        <Box>
          <Checks
            labels={interestingLabels}
            value={interesting}
            setValue={setInteresting}
            index="interesting"
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
