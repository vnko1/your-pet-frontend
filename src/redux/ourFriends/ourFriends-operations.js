import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPublic } from "../../utils/axiosConfig";

const getFriends = createAsyncThunk(
  "/sponsors",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosPublic.get("/sponsors");

      return data.sponsors;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
export default getFriends;
