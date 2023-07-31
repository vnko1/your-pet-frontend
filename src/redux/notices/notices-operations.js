import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPublic, axiosPrivate } from "../../shared/utils/axiosConfig";

export const fetchNotices = createAsyncThunk(
  "notices/fetchNotices",
  async ({ url, privateRoute = false }, thunkAPI) => {
    try {
      const response = privateRoute
        ? await axiosPrivate.get(`/notices/${url}`)
        : await axiosPublic.get(`/notices/${url}`);

      return response.data.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFavorite = createAsyncThunk(
  "notices/favorite",
  async (url, thunkAPI) => {
    try {
      const response = await axios.get(url);
      return response.data.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAddFavorite = createAsyncThunk(
  "notices/addFavorite",
  async (url, thunkAPI) => {
    try {
      const response = await axios.patch(url);
      return response.data.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchDeleteFavorite = createAsyncThunk(
  "notices/deleteFavorite",
  async (url, thunkAPI) => {
    try {
      const response = await axios.patch(url);
      return response.data.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCardById = createAsyncThunk(
  "notices/getCardById",
  async (url, thunkAPI) => {
    try {
      const response = await axios.get(url);
      return response.data.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCardById = createAsyncThunk(
  "notices/deleteCardById",
  async (url, thunkAPI) => {
    try {
      const response = await axios.delete(url);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const resetNotices = createAction("notices/resetFavorite");
export const resetCardById = createAction("notices/resetCardById");
export const takeFavoritesList = createAction("TAKE_FAVORITE_LIST");
