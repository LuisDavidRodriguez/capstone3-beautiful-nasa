import { configureStore } from '@reduxjs/toolkit';
import apodReducer from './apod';
import { reducerManifest, reducerPhotos } from './roverSlice';

const store = configureStore({
  reducer: {
    apod: apodReducer,
    revorManifest: reducerManifest,
    roverPhotos: reducerPhotos,
  },
});

export default store;
