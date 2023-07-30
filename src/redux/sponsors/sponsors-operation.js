import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://my-pet-app-8sz1.onrender.com";

export const getSponsors = createAsyncThunk(
  "sponsors/fetchSponsors",
  async (_, { rejectWithValue }) => {
    try {
      const {
        data: { sponsors },
      } = await axios.get("/sponsors");

      return sponsors;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
