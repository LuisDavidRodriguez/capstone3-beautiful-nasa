import { createSlice } from '@reduxjs/toolkit';
import { fetchRandomApodByQuantity } from './apodApi';

const sliceRandom = createSlice({
  name: 'random',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRandomApodByQuantity.fulfilled, (state, action) => action.payload);
    builder.addCase(fetchRandomApodByQuantity.pending, () => 'loading');
  },
});

const randomReducer = sliceRandom.reducer;
// eslint-disable-next-line import/prefer-default-export
export { randomReducer };
