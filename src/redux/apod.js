import { createSlice } from '@reduxjs/toolkit';
import { fetchTodayApod } from './apodApi';

const slice = createSlice({
  name: 'apod',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodayApod.fulfilled, (state, action) => action.payload);
    builder.addCase(fetchTodayApod.pending, () => 'loading');
  },
});

export default slice.reducer;
