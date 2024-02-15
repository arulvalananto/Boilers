import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchTodos } from "./thunk";
import { RootState } from "../../types";
import { SampleSliceInitialState, Todo } from "./types";

const initialState: SampleSliceInitialState = {
  isLoading: false,
  message: "",
  todos: [],
};

const sampleSlice = createSlice({
  name: "sample",
  initialState: initialState,
  reducers: {
    updateMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
        state.isLoading = false;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.isLoading = false;
        state.todos = [];
      });
  },
});

export const sampleSelector = (state: RootState) => state.sample;

export const { updateMessage } = sampleSlice.actions;

export default sampleSlice.reducer;
