import { createSlice } from '@reduxjs/toolkit';
import { roverFetchManifest, roverFetchPhotos } from './roverApi';

const sliceManifest = createSlice({
  name: 'roverManifest',
  initialState: {
    status: 'empty',
    data: [],
    filters: {
      show: 'ALL',
      camera: '',
      date: '',
    },
  },
  reducers: {
    setDateFilter(state, action) {
      return {
        ...state,
        filters: {
          show: 'DATE',
          camera: '',
          date: action.payload,
        },
      };
    },

    setCameraFilter(state, action) {
      return {
        ...state,
        filters: {
          show: 'CAMERA',
          camera: action.payload,
          date: '',
        },
      };
    },
  },
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
const manifestActions = sliceManifest.actions;

export { reducerManifest, reducerPhotos, manifestActions };
