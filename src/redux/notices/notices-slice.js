import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchNotices, newPost } from "./notices-operations";

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

export const noticesSlice = createSlice({
  name: "notices",
  initialState: {
    items: [],
    total: 0,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotices.pending, handlePendingFetchNotices)
      .addCase(fetchNotices.fulfilled, handleFulfilledFetchNotices)
      .addCase(fetchNotices.rejected, handleRejectedFetchNotices)

      .addCase(newPost.pending, handlePendingFetchNotices)
      .addCase(newPost.fulfilled, (state, { payload }) => console.log(payload))
      .addCase(newPost.rejected, handleRejectedFetchNotices);
  },
});

export const noticesReducer = noticesSlice.reducer;
