import { configureStore } from '@reduxjs/toolkit';
import { randomReducer } from './apod';
import { reducerManifest, reducerPhotos } from './roverSlice';
import { reducerImgVideo, reducerAssetID } from './imageVideoReducer';

const store = configureStore({
  reducer: {
    randomApod: randomReducer,
    revorManifest: reducerManifest,
    roverPhotos: reducerPhotos,
    imgVideo: reducerImgVideo,
    imgAssetId: reducerAssetID,
  },
});

export default store;
