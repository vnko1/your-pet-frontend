import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../shared/utils/axiosConfig";

export const getNews = createAsyncThunk(
  "news/postPet",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/articles?
${payload.filter && "filter=" + payload.filter}&sort=desc&${
        "page=" + payload.page
      }&limit=2`);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
