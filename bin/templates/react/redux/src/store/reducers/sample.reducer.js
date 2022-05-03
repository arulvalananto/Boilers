import {createSlice} from '@reduxjs/toolkit';

const initialState = {};

const sampleSlice = createSlice({
  name: 'sample',
  initialState,
  reducers: {
    FETCH_SAMPLE: (sample, action) => {
      sample.sample = action.payload;
    },
  },
});

export const {FETCH_SAMPLE} = sampleSlice.actions;

export default sampleSlice.reducer;
