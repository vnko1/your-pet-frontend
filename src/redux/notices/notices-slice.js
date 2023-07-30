import { createSlice } from "@reduxjs/toolkit";
import {
  fetchNotices,
  fetchFavorite,
  fetchAddFavorite,
  fetchDeleteFavorite,
  resetNotices,
  fetchCardById,
  resetCardById,
  deleteCardById,
} from "./notices-operations";

// FetchNotices
const handlePendingFetchNotices = (state) => {
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
const handleRejectedFetchNotices = (state) => {
  state.isLoading = false;
  state.error = true;
};
// =====================================================
// FetchNoticesFavorite
const handlePendingFetchNoticesFavorite = (state) => {
  state.isLoading = true;
  state.error = null;
};
const handleFulfilledFetchNoticesFavorite = (state, action) => {
  const { notices } = action.payload;

  const newArrOfString = notices.map((item) => item._id);

  state.favorite = [...newArrOfString];
  state.isLoading = false;
  state.error = null;
};
const handleRejectedFetchNoticesFavorite = (state) => {
  state.isLoading = false;
  state.error = true;
};
// ========================================
// Add favorite
const handlePendingFetchNoticesAddFavorite = (state) => {
  // state.isLoading = true;
  state.isLoadingFavorite = true;
  state.error = null;
};

const handleFulfilledFetchNoticesAddFavorite = (state, action) => {
  const { favorites } = action.payload;

  state.favorite = [...favorites];
  // state.total = total;
  state.isLoadingFavorite = false;
  state.error = null;
};

const handleRejectedFetchNoticesAddFavorite = (state) => {
  // state.isLoading = false;
  state.isLoadingFavorite = false;
  state.error = true;
};
// ========================================
// Delete favorite

const handlePendingFetchNoticesDeleteFavorite = (state) => {
  state.isLoadingFavorite = true;
  state.error = null;
};

const handleFulfilledFetchNoticesDeleteFavorite = (state, action) => {
  const url = window.location.href;
  const { favorites } = action.payload;

  if (url.includes("/notices/favorite")) {
    state.items = state.items.filter((item) =>
      favorites.some((favItem) => favItem === item._id)
    );

    const total = favorites.length;
    state.total = total;
  }

  state.favorite = [...favorites];
  // state.isLoading = false;
  state.isLoadingFavorite = false;
  state.error = null;
};

const handleRejectedFetchNoticesDeleteFavorite = (state) => {
  // state.isLoading = false;
  state.isLoadingFavorite = false;
  state.error = true;
};
// =============================================

const handleResetFavoriteList = (state) => {
  return {
    ...state,
    favorite: [],
  };
};

// ==============================================
// fetchCardById
const handlePendingFetchCardById = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleFulfilledFetchCardById = (state, action) => {
  state.cardById = action.payload;
  state.isLoading = false;
  state.error = null;
};

const handleRejectedFetchCardById = (state) => {
  state.isLoading = false;
  state.error = true;
};

const handleResetCardById = (state) => {
  return {
    ...state,
    cardById: {},
  };
};
// ==============================================
const handlePendingDeleteCardById = (state) => {
  state.isLoading = true;
  state.error = null;
};
const handleFulfilledDeleteCardById = (state, action) => {
  const { _id } = action.payload;

  const newArr = state.items.filter((item) => item._id !== _id);
  // мне нужен тотал все карточек, а я записываю то сколько осталось на странице

  state.items = newArr;
  state.total = state.total -= 1;
};
const handleRejectedDeleteCardById = (state) => {
  state.isLoading = false;
  state.error = true;
};
//==================================================
export const noticesSlice = createSlice({
  name: "notices",
  initialState: {
    items: [],
    favorite: [],
    cardById: {},
    total: 0,
    isLoading: false,
    isLoadingFavorite: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotices.pending, handlePendingFetchNotices)
      .addCase(fetchNotices.fulfilled, handleFulfilledFetchNotices)
      .addCase(fetchNotices.rejected, handleRejectedFetchNotices)
      // ==========================================
      .addCase(fetchFavorite.pending, handlePendingFetchNoticesFavorite)
      .addCase(fetchFavorite.fulfilled, handleFulfilledFetchNoticesFavorite)
      .addCase(fetchFavorite.rejected, handleRejectedFetchNoticesFavorite)
      // ==========================================
      // .addCase(fetchAddFavorite.pending, handlePendingFetchNoticesFavorite)
      .addCase(fetchAddFavorite.pending, handlePendingFetchNoticesAddFavorite)
      .addCase(
        fetchAddFavorite.fulfilled,
        handleFulfilledFetchNoticesAddFavorite
      )
      .addCase(fetchAddFavorite.rejected, handleRejectedFetchNoticesAddFavorite)
      // ==========================================
      // .addCase(fetchDeleteFavorite.pending, handlePendingFetchNoticesFavorite)
      .addCase(
        fetchDeleteFavorite.pending,
        handlePendingFetchNoticesDeleteFavorite
      )
      .addCase(
        fetchDeleteFavorite.fulfilled,
        handleFulfilledFetchNoticesDeleteFavorite
      )
      .addCase(
        fetchDeleteFavorite.rejected,
        handleRejectedFetchNoticesDeleteFavorite
      )
      // ===========================================
      .addCase(fetchCardById.pending, handlePendingFetchCardById)
      .addCase(fetchCardById.fulfilled, handleFulfilledFetchCardById)
      .addCase(fetchCardById.rejected, handleRejectedFetchCardById)
      // ===========================================
      .addCase(deleteCardById.pending, handlePendingDeleteCardById)
      .addCase(deleteCardById.fulfilled, handleFulfilledDeleteCardById)
      .addCase(deleteCardById.rejected, handleRejectedDeleteCardById)
      // ===========================================
      .addCase(resetNotices, handleResetFavoriteList)
      .addCase(resetCardById, handleResetCardById);
  },
});

export const noticesReducer = noticesSlice.reducer;
