import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPublic } from "../../shared/utils/axiosConfig";

export const getNews = createAsyncThunk(
  "news/postPet",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axiosPublic.get(`/articles?
${payload.filter && "filter=" + payload.filter}&sort=desc&${
        "page=" + payload.page
      }&limit=6`);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
