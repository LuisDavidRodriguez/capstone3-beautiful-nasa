import { createSlice } from '@reduxjs/toolkit';
import { roverFetchManifest, roverFetchPhotos } from './roverApi';

const sliceManifest = createSlice({
  name: 'roverManifest',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(roverFetchManifest.fulfilled, (state, action) => action.payload);
    builder.addCase(roverFetchManifest.pending, () => 'loading');
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
