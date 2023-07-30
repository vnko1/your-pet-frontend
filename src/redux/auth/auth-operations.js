import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://my-pet-app-8sz1.onrender.com";

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const registration = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/register", credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      if (error.response.status === 400) {
        console.log("Невірно введені дані! Спробуйте ще раз!");
      } else if (error.response.status === 409) {
        console.log("Пошта вже використовується");
      } else {
        console.log("Упс... щось пішло не так. Перезавантажте сторінку.");
      }
      return rejectWithValue(error);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/login", credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      console.log("Невірно введені дані");
      return rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk("auth/logOut", async () => {
  try {
    const { data } = await axios.post("/users/logout");
    token.unset();

    return data;
  } catch (error) {
    console.log(error);
  }
});

export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (credentials) => {
    try {
      const { data } = await axios.put("/users/update", credentials);

      token.set(data.token);
      // notifyFulfilledLogin();
      console.log("тут фулфілд логін");

      return data;
    } catch (error) {
      // notifyErrorLogin();
      console.log(error);
      console.log("тут ерор updateUser func - operation");
      return;
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async () => {
    try {
      const { data } = await axios.post("/users/current");

      // notifyFulfilledLogin();
      console.log("тут фулфілд логін");
      console.log(data);

      return data;
    } catch (error) {
      // notifyErrorLogin();
      console.log(error);
      console.log("тут ерор getCurrentUser func - operation");
      return;
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      token.set(persistedToken);
      const { data } = await axios.post("/users/current");

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//зареєстрований акк
// Viacheslav
// slav@na.com
// Kk123456
