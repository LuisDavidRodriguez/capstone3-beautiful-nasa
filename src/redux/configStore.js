import { configureStore } from '@reduxjs/toolkit';
import apodReducer from './apod';
import { reducerManifest, reducerPhotos } from './roverSlice';
import { reducerImgVideo, reducerAssetID } from './imageVideoReducer';

const store = configureStore({
  reducer: {
    apod: apodReducer,
    revorManifest: reducerManifest,
    roverPhotos: reducerPhotos,
    imgVideo: reducerImgVideo,
    imgAssetId: reducerAssetID,
  },
});

export default store;
