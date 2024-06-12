import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
   reducers: {
      setFilter: (state, action) => {
      state.status = action.payload;
    },
  },
})

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const selectNameFilter = (state) => state.filters.name;
