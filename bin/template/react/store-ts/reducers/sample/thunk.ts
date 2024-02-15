import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
  "sample/fetchTodos",
  async (payload, thunkAPI) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const result = await response.json();

      if (response.status === 200) {
        return result;
      }

      return thunkAPI.rejectWithValue("");
    } catch (error) {
      return thunkAPI.rejectWithValue("");
    }
  }
);
