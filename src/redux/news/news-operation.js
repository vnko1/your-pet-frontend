import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://my-pet-app-8sz1.onrender.com";

export const getNews = createAsyncThunk(
  "news/postPet",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/articles?${payload && "filter=" + payload}&sort=desc&page=1&limit=6`
      );

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
