import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getSponsors } from "./sponsors-operation";

import {
  handlePending,
  handleRejected,
  handlefulfilled,
  getActions,
} from "./sponsors-utils";

export const sponsorsSlice = createSlice({
  name: "sponsors",

  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder

      .addCase(getSponsors.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addMatcher(isAnyOf(...getActions("pending")), handlePending)
      .addMatcher(isAnyOf(...getActions("fulfilled")), handlefulfilled)
      .addMatcher(isAnyOf(...getActions("rejected")), handleRejected);
  },
});

export const sponsorsReducer = sponsorsSlice.reducer;
