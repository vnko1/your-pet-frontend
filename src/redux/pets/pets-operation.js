import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://my-pet-app-8sz1.onrender.com";

export const postPet = createAsyncThunk(
  "pets/postPet",
  async (pet, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/pets", pet);
      //   notifyCreacteNewContact();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deletePet = createAsyncThunk(
  "pets/deletePet",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/pets/${id}`);
      //   notifyDeleteContact();
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
