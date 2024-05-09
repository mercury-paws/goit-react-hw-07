import { createSlice } from "@reduxjs/toolkit";
import initialContacts from "../contactList.json";

const slice = createSlice({
  name: "contact",
  initialState: {
    items: initialContacts,
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((cont) => cont.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;
