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
  state.isLoggedIn = true;
  state.token = token;
  state.user = user;
};

export const getInitialState = (state) => {
  state.isLoggedIn = false;
  state.token = "";
  state.user = { name: null, email: null };
};

export const getUserFulfilled = (state, { payload: { user } }) => {
  state.user = user;
};

export const userUpdateFulfilled = (state, { payload: { token, user } }) => {
  state.token = token;
  state.user = user;
};
