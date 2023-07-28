import { createSlice } from "@reduxjs/toolkit";
import {
  fetchNotices,
  fetchFavorite,
  fetchAddFavorite,
  fetchDeleteFavorite,
} from "./notices-operations";

// FetchNotices
const handlePendingFetchNotices = (state, action) => {
  state.isLoading = true;
  state.error = null;
};
const handleFulfilledFetchNotices = (state, action) => {
  const { total, notices } = action.payload;

  state.items = [...notices];
  state.total = total;
  state.isLoading = false;
  state.error = null;
};
const handleRejectedFetchNotices = (state, action) => {
  state.isLoading = false;
  state.error = true;
};
// =====================================================
// FetchNoticesFavorite
const handlePendingFetchNoticesFavorite = (state, action) => {
  state.isLoading = true;
  state.error = null;
};
const handleFulfilledFetchNoticesFavorite = (state, action) => {
  const { total, notices } = action.payload;

  const newArrOfString = notices.map((item) => item._id);

  state.favorite = [...newArrOfString];
  // state.total = total;
  state.isLoading = false;
  state.error = null;
};
const handleRejectedFetchNoticesFavorite = (state, action) => {
  state.isLoading = false;
  state.error = true;
};

const handleFulfilledFetchNoticesAddFavorite = (state, action) => {
  const { total, favorites } = action.payload;

  state.favorite = [...favorites];
  state.total = total;
  state.isLoading = false;
  state.error = null;
};

const handleFulfilledFetchNoticesDeleteFavorite = (state, action) => {
  const url = window.location.href;
  const { favorites } = action.payload;

  const total = favorites.length;
  // console.log(action.payload);

  if (url.includes("/notices/favorite")) {
    state.items = state.items.filter((item) =>
      favorites.some((favItem) => favItem === item._id)
    );
    state.total = total;
  }

  // массив тотал по идее можно по длинее если не получиться

  state.favorite = [...favorites];
  state.isLoading = false;
  state.error = null;
};

export const noticesSlice = createSlice({
  name: "notices",
  initialState: {
    items: [],
    favorite: [],
    total: 0,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotices.pending, handlePendingFetchNotices)
      .addCase(fetchNotices.fulfilled, handleFulfilledFetchNotices)
      .addCase(fetchNotices.rejected, handleRejectedFetchNotices)
      // =============
      .addCase(fetchFavorite.pending, handlePendingFetchNoticesFavorite)
      .addCase(fetchFavorite.fulfilled, handleFulfilledFetchNoticesFavorite)
      .addCase(fetchFavorite.rejected, handleRejectedFetchNoticesFavorite)
      // =============
      .addCase(fetchAddFavorite.pending, handlePendingFetchNoticesFavorite)
      .addCase(
        fetchAddFavorite.fulfilled,
        handleFulfilledFetchNoticesAddFavorite
      )
      .addCase(fetchAddFavorite.rejected, handleRejectedFetchNoticesFavorite)
      // =============
      .addCase(fetchDeleteFavorite.pending, handlePendingFetchNoticesFavorite)
      .addCase(
        fetchDeleteFavorite.fulfilled,
        handleFulfilledFetchNoticesDeleteFavorite
      )
      .addCase(fetchDeleteFavorite.rejected, handlePendingFetchNoticesFavorite);
  },
});

export const noticesReducer = noticesSlice.reducer;
