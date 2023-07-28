import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  getCurrentUser,
  logIn,
  logOut,
  refreshUser,
  registration,
  updateUser,
} from "./auth-operations";

import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  getActions,
  getInitialState,
  getUserFulfilled,
  handlePending,
  handleRejected,
  handlefulfilled,
  userFulfilled,
  userUpdateFulfilled,
} from "./auth-Utils";

const initialState = {
  user: {
    name: null,
    email: null,
    birthday: null,
    city: null,
    phone: null,
    isNewUser: false,
  },
  token: null,
  isLoggedIn: false,
  isLoader: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      // REGISTRATION
      .addCase(registration.fulfilled, userFulfilled)

      // //LogIn
      .addCase(logIn.fulfilled, userFulfilled)
      .addCase(logIn.rejected, (state) => {
        state.isLoggedIn = false;
      })

      // // LOGOUT
      .addCase(logOut.fulfilled, getInitialState)

      // UPDATE USER
      .addCase(updateUser.fulfilled, userUpdateFulfilled)

      // GetCurrentUser
      .addCase(getCurrentUser.fulfilled, getUserFulfilled)

      //REFRESH USER
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload: { user } }) => {
        state.isRefreshing = false;
        state.user = { ...state.user, ...user };
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
      })

      .addMatcher(isAnyOf(...getActions("pending")), handlePending)
      .addMatcher(isAnyOf(...getActions("fulfilled")), handlefulfilled)
      .addMatcher(isAnyOf(...getActions("rejected")), handleRejected);
  },
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token"],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
export default authReducer;
