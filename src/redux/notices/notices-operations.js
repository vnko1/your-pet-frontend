import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNotices = createAsyncThunk(
  "notices/fetchNotices",
  async (url, thunkAPI) => {
    try {
      const response = await axios.get(url);
      // console.log(response);
      return response.data.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
