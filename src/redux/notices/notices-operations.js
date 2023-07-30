import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPublic, axiosPrivate } from "../../utils/axiosConfig";

export const fetchNotices = createAsyncThunk(
  "notices/fetchNotices",
  async ({ url, privateRoute = false }, thunkAPI) => {
    try {
      const response = privateRoute
        ? await axiosPrivate.get(url)
        : await axiosPublic.get(url);

      return response.data.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
