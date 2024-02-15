import { createSlice } from "@reduxjs/toolkit";

import { fetchTodos } from "./thunk";

const initialState = {
  isLoading: false,
  message: "",
  todos: [],
};

const sampleSlice = createSlice({
  name: "sample",
  initialState: initialState,
  reducers: {
    updateMessage: (state, action) => {
      state.message = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.isLoading = false;
        state.todos = [];
      });
  },
});

export const sampleSelector = (state) => state.sample;

export const { updateMessage } = sampleSlice.actions;

export default sampleSlice.reducer;
