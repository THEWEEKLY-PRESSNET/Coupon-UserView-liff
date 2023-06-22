import { createSlice } from "@reduxjs/toolkit";

export type Article = {
  articleId: number;
  articleTitle: string;
  articleUrl: string;
  articleImg: string;
  createdAt: number;
};

const initialState: Article[] = [];
const slice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    updateArticles: (_, action) => {
      return [...action.payload];
    },
  },
});

export const { updateArticles } = slice.actions;
export default slice.reducer;
