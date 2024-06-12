import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchContacts, addContacts, deleteContacts } from "../redux/contactsOps";
import { selectNameFilter } from "./filtersSlice";

const handlePeding = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePeding)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = true;
        state.error = false;
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContacts.pending, handlePeding)
      .addCase(addContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = true;
        state.items.push(action.payload);        
      })
      .addCase(addContacts.rejected, handleRejected)
      .addCase(deleteContacts.pending, handlePeding)
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.loading = true;
        state.error = false;
        const index = state.items.findIndex(
          (contact) => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
        state.loading = false;
      })
      .addCase(deleteContacts.rejected, handleRejected);
    },
});


export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, contactFilter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(contactFilter.toLowerCase())
    );
  }
);
export const contactReducer = contactsSlice.reducer;