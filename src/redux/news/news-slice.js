import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getNews } from "./news-operation";

import {
  handlePending,
  handleRejected,
  handlefulfilled,
  getActions,
} from "./news-utils";
// import { formatDate } from "src/shared/utils/formatDate";
import { formatDate } from "../../shared/utils/formatDate";

export const newsSlice = createSlice({
  name: "news",

  initialState: {
    items: [],
    page: 1,
    totalArticles: null,
    newsFilter: "",
    isLoading: false,
    error: null,
  },

  reducers: {
    changeFilter(state, { payload }) {
      state.newsFilter = payload;
    },
    changePage(state, { payload }) {
      state.page = payload;
    },
    changeTotalArticles(state, { payload }) {
      state.totalArticles = payload;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(getNews.fulfilled, (state, { payload }) => {
        let newsArticles = payload.articles.map((item) => {
          return { ...item, date: formatDate(item.date, "/") };
        });

        state.totalArticles = payload.total;
        state.items = newsArticles;
      })
      .addMatcher(isAnyOf(...getActions("pending")), handlePending)
      .addMatcher(isAnyOf(...getActions("fulfilled")), handlefulfilled)
      .addMatcher(isAnyOf(...getActions("rejected")), handleRejected);
  },
});

export const newsReducer = newsSlice.reducer;
export const { changeFilter, changePage } = newsSlice.actions;
