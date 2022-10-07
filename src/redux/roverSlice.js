import { createSlice } from '@reduxjs/toolkit';
import { roverFetchManifest, roverFetchRandomPhotos, roverFetchGeneral } from './roverApi';

const sliceManifest = createSlice({
  name: 'roverManifest',
  initialState: {
    status: 'empty',
    data: [],
    filters: {
      rover: 'Curiosity',
      show: 'ALL',
      camera: '',
      date: '',
    },
  },
  reducers: {
    setRoverFilter(state, action) {
      return {
        ...state,
        status: 'reFetch',
        filters: {
          ...state.filters,
          show: 'ALL',
          rover: action.payload,
          date: '',
        },
      };
    },

    setDateFilter(state, action) {
      return {
        ...state,
        filters: {
          ...state.filters,
          show: 'DATE',
          date: action.payload,
        },
      };
    },

    setCameraFilter(state, action) {
      return {
        ...state,
        filters: {
          ...state.filters,
          show: 'CAMERA',
          camera: action.payload,
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

const sliceRandomPhotos = createSlice({
  name: 'roverRandomPhotos',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(roverFetchRandomPhotos.fulfilled, (state, action) => action.payload);
    builder.addCase(roverFetchRandomPhotos.pending, () => 'loading');
  },
});

const sliceGeneralPhotos = createSlice({
  name: 'roverGeneralPhotos',
  initialState: {
    status: 'empty',
    data: [],
  },
  reducers: {
    setRefetch(state) {
      return {
        ...state,
        status: 'reFetch',
      };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(roverFetchGeneral.fulfilled, (state, action) => (
      { ...state, data: action.payload, status: 'fulfilled' }
    ));

    builder.addCase(roverFetchGeneral.pending, (state) => (
      { ...state, data: [], status: 'pending' }
    ));
  },
});

const reducerManifest = sliceManifest.reducer;
const reducerRandomPhotos = sliceRandomPhotos.reducer;
const reducerGeneralPhotos = sliceGeneralPhotos.reducer;
const manifestActions = sliceManifest.actions;
const generalPhotosActions = sliceGeneralPhotos.actions;

export {
  reducerManifest,
  reducerRandomPhotos,
  reducerGeneralPhotos,
  generalPhotosActions,
  manifestActions,
};
