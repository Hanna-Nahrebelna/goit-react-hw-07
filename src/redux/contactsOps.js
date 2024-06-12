import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://666993022e964a6dfed5b426.mockapi.io/";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
  try {
    const response = await axios.get("/contacts");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
}
);
 
export const addContacts = createAsyncThunk(
  "contacts/addContacts",
  async (user, thunkAPI) => {
  try {
    const response = await axios.post("/contacts", {...user});
    return response.data; 
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }  
}
);

export const deleteContacts = createAsyncThunk(
  "contacts/deleteContacts",
  async (contactID, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactID}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

