import { formatDate } from "../../shared/utils/formatDate";
import {
  logIn,
  registration,
  logOut,
  updateUser,
  getCurrentUser,
} from "./auth-operations";

export const extraActions = [
  logIn,
  registration,
  logOut,
  updateUser,
  getCurrentUser,
];

export const getActions = (type) => extraActions.map((action) => action[type]);

export const handlePending = (state) => {
  state.isLoader = true;
};

export const handlefulfilled = (state) => {
  state.isLoader = false;
};

export const handleRejected = (state) => {
  state.isLoader = false;
};

export const userFulfilled = (state, { payload: { token, user } }) => {
  let birthday = "";
  if (user.birthday) {
    birthday = formatDate(user.birthday);
  }

  state.isLoggedIn = true;
  state.token = token;
  state.user = { ...state.user, ...user, birthday };
};

export const getInitialState = (state) => {
  state.isLoggedIn = false;
  state.token = "";
  state.user = { name: null, email: null };
};

export const getUserFulfilled = (state, { payload: { user } }) => {
  let birthday = "";
  if (user.birthday) {
    birthday = formatDate(user.birthday);
  }

  state.user = { ...user, birthday };
};

export const userUpdateFulfilled = (state, { payload: { token, user } }) => {
  let birthday = "";
  if (user.birthday) {
    birthday = formatDate(user.birthday);
  }

  state.token = token;
  state.user = { ...user, birthday };
};
