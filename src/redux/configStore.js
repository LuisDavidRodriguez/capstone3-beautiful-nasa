import { configureStore } from '@reduxjs/toolkit';
import { allReducer, randomReducer } from './apod';
import { reducerManifest, reducerPhotos } from './roverSlice';
import { reducerImgVideo, reducerAssetID } from './imageVideoReducer';

const store = configureStore({
  reducer: {
    randomApod: randomReducer,
    allApods: allReducer,
    revorManifest: reducerManifest,
    roverPhotos: reducerPhotos,
    imgVideo: reducerImgVideo,
    imgAssetId: reducerAssetID,
  },
});

export default store;
