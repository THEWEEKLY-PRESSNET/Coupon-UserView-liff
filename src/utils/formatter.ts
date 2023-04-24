export const dateTrance = (dateStar: string | undefined): string => {
  const week = {
    0: "日",
    1: "月",
    2: "火",
    3: "水",
    4: "木",
    5: "金",
    6: "土",
  };
  const y = (dateStar || "").slice(0, 4);
  const m = (dateStar || "").slice(4, 6);
  const d = (dateStar || "").slice(6, 8);
  const date = new Date(Number(y), Number(m) - 1, Number(d));
  // console.log(date);
  const result = `${y}年${m}月${d}日（${week[date.getDay()]}）`;
  return result;
};

export const timeTrance = (timeStar: string | undefined): string => {
  return `${(timeStar || "").slice(0, 2)}:${(timeStar || "").slice(2, 4)}`;
};

export const dateToStar = (date: Date) => {
  const y = date.getFullYear();
  const m = ("00" + (date.getMonth() + 1)).slice(-2);
  const d = ("00" + date.getDate()).slice(-2);
  return `${y}${m}${d}`;
};

export const strToDate = (dateStr: string | undefined) => {
  if (!dateStr || dateStr?.length !== 8) {
    // console.log("dt", dateStr);
    return new Date();
  }
  const y = Number(dateStr.slice(0, 4));
  const m = Number(dateStr.slice(4, 6)) - 1;
  const d = Number(dateStr.slice(6, 8));
  // console.log("dtttt", y, m, d);
  return new Date(y, m, d);
};
