import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filter",
  initialState: {
    name: "",
    number: "",
  },
  reducers: {
    changeNameFilter: (state, action) => {
      state.name = action.payload;
    },
    changeNumberFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;
export default slice.reducer;
