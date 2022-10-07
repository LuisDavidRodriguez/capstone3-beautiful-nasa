import { configureStore } from '@reduxjs/toolkit';
import { allReducer, randomReducer } from './apod';
import { reducerManifest, reducerRandomPhotos, reducerGeneralPhotos } from './roverSlice';
import { reducerImgVideo, reducerAssetID } from './imageVideoReducer';

const store = configureStore({
  reducer: {
    randomApod: randomReducer,
    allApods: allReducer,
    revorManifest: reducerManifest,
    roverRandomPhotos: reducerRandomPhotos,
    roverGeneralPhotos: reducerGeneralPhotos,
    imgVideo: reducerImgVideo,
    imgAssetId: reducerAssetID,
  },
});

export default store;
