import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPublic } from "../../utils/axiosConfig";

export const getNews = createAsyncThunk(
  "news/postPet",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axiosPublic.get("/articles", payload);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
