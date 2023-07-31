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
