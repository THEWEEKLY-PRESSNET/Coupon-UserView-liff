import React, { useState, ReactNode } from "react";
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

const genderLabels = [
  { key: "male", label: "男性" },
  { key: "femaile", label: "女性" },
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


// const falseObjects = check.filter(object => object.checkbox === false);
// console.log("falseObjects", falseObjects);

// const checkboxValues = check.map((i) => i.checkbox);
// console.log("checkboxValues", checkboxValues);


  // const handleChange = (index) => {
  //   const newLabels = [...newInterestingLabels]; // 配列を複製する
  //   newLabels[index].checkbox = "true"; // チェックボックスの値を更新する
  //   setCheck(newLabels); // 更新した配列をセットする（stateを使う場合）
  //   console.log("newLabels",newLabels);
  // };

  // ボタンを表示する部分のコード
  // {newInterestingLabels.map((label, index) => (
  //   <button onClick={() => handleButtonClick(index)}>{label.label}</button>
  // ))}


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
 const hoge = interestingLabels.map((i) =>{
   i.checkbox = true;
   return i
  }
  );
  console.log("hoge",hoge);

  // console.log("newInteresting-1",interestingLabels)
  // const hoge = interestingLabels;
  // hoge.push({checkbox: false});
  // console.log("newInteresting-2",interestingLabels)

  // console.log("newInterestingLabels", newInterestingLabels)
  // const [check, setCheck] = useState(newInterestingLabels);


  // const checksWithFunc = () => {};
  // const [checkF, setCheckF] = useState(checksWithFunc());

  const newInterestingLabelsFunc = () => {
    return interestingLabels.map((i) => {
      return {
        ...i,
        checkbox: "false",
      };
    });
  };

  console.log("newInterestingLabelsFunc", newInterestingLabelsFunc());
  const [checkFunc, setCheckFunc] = useState(newInterestingLabelsFunc());



  const handleChange = () => {
    // newInterestingLabels.map((i, index) => {
    //   if (newInterestingLabels[index].checkbox === "false") {
    //     newInterestingLabels[index].checkbox = "true" 
    //   }
    //   else {
    //     newInterestingLabels[index].checkbox = "false" 
    //   }
    //   console.log("index", newInterestingLabels[index].checkbox)
    //   // return {
    //   // 
    //   // };
    // });
    // const checkboxValues = check.map(i => i.target.checked);
    // console.log("checked", checkboxValues);
  };
  return (
    <Box>
      {/* {check.map(checkbox => (
        <FormControlLabel
          value={checkbox.key}
          control={<Checkbox />}
          label={checkbox.label}
          onChange={() => handleChange()}
        />
      ))} */}
    </Box>
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
          {/* <Selects labels={interestingLabels} value={interesting} setValue={setInteresting} /> */}
          <Checks
            labels={interestingLabels}
            value={interesting}
            setValue={setInteresting}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default Question;
