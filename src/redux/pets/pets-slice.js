import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { deletePet, postPet } from "./pets-operation";

import {
  handlePending,
  handleRejected,
  handlefulfilled,
  getActions,
} from "./pets-utils";

export const petsSlice = createSlice({
  name: "pets",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      //postPet
      .addCase(postPet.fulfilled, (state, { payload }) => {})

      //deletePet
      .addCase(deletePet.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((contact) => contact.id !== payload);
      })

      .addMatcher(isAnyOf(...getActions("pending")), handlePending)
      .addMatcher(isAnyOf(...getActions("fulfilled")), handlefulfilled)
      .addMatcher(isAnyOf(...getActions("rejected")), handleRejected);
  },
});

export const petsReducer = petsSlice.reducer;
export const { addNewContact, removeContact } = petsSlice.actions;
