import { createSlice } from '@reduxjs/toolkit';
import { roverFetchManifest, roverFetchPhotos } from './roverApi';

const sliceManifest = createSlice({
  name: 'roverManifest',
  initialState: {
    status: 'empty',
    data: [],
    filters: {
      show: 'ALL',
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(roverFetchManifest.fulfilled, (state, action) => (
      { ...state, data: action.payload, status: 'fulfilled' }
    ));

    builder.addCase(roverFetchManifest.pending, (state) => (
      { ...state, data: [], status: 'pending' }
    ));
  },
});

const slicePhotos = createSlice({
  name: 'roverPhotos',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(roverFetchPhotos.fulfilled, (state, action) => action.payload);
    builder.addCase(roverFetchPhotos.pending, () => 'loading');
  },
});

const reducerManifest = sliceManifest.reducer;
const reducerPhotos = slicePhotos.reducer;

export { reducerManifest, reducerPhotos };
