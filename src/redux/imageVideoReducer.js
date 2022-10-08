import { createSlice } from '@reduxjs/toolkit';
import { imgVidFetchQueryes, mediaByIdFetch } from './imageVideoApi';

const sliceImgVideo = createSlice({
  name: 'nasaImgVideo',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(imgVidFetchQueryes.fulfilled, (state, action) => action.payload);
    builder.addCase(imgVidFetchQueryes.pending, () => 'loading');
  },
});

const sliceAssetId = createSlice({
  name: 'nasaAssetId',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(mediaByIdFetch.fulfilled, (state, action) => action.payload);
    builder.addCase(mediaByIdFetch.pending, () => 'loading');
  },
});

const reducerImgVideo = sliceImgVideo.reducer;
const reducerAssetID = sliceAssetId.reducer;

export { reducerImgVideo, reducerAssetID };
