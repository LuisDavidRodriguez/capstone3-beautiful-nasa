import { createSlice } from '@reduxjs/toolkit';
import { roverFetchManifest, roverFetchRandomPhotos, roverFetchGeneral } from './roverApi';

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

    setAllFilter(state) {
      return {
        ...state,
        filters: {
          show: 'ALL',
          camera: '',
          date: '',
        },
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
