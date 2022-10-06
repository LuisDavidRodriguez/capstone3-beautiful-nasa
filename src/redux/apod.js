import { createSlice } from '@reduxjs/toolkit';
import { fetchRandomApodByQuantity, fetchDateApod } from './apodApi';

const sliceRandom = createSlice({
  name: 'random',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRandomApodByQuantity.fulfilled, (state, action) => action.payload);
    builder.addCase(fetchRandomApodByQuantity.pending, () => 'loading');
  },
});

const sliceAll = createSlice({
  name: 'all',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDateApod.fulfilled, (state, action) => action.payload);
    builder.addCase(fetchDateApod.pending, () => 'loading');
  },
});

const randomReducer = sliceRandom.reducer;
const allReducer = sliceAll.reducer;
// eslint-disable-next-line import/prefer-default-export
export { randomReducer, allReducer };
