import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPrivate } from "../../shared/utils/axiosConfig";
import { getCurrentUser } from "../auth/auth-operations";

export const postPet = createAsyncThunk(
  "pets/postPet",
  async (pet, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axiosPrivate.post("/pets/add", pet);

      dispatch(getCurrentUser());
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deletePet = createAsyncThunk(
  "pets/delete",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      await axiosPrivate.delete(`/pets/delete/${id}`);
      dispatch(getCurrentUser());
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
