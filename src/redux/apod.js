import { createSlice } from '@reduxjs/toolkit';
import { fetchRandomApodByQuantity, fetchDateApod } from './apodApi';

const sliceRandom = createSlice({
  name: 'random',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRandomApodByQuantity.fulfilled, (state, action) => action.payload);
    builder.addCase(fetchRandomApodByQuantity.pending, () => 'loading');
  },
});

const sliceAll = createSlice({
  name: 'all',
  initialState: {
    filters: {
      show: 'ALL',
      text: '',
      date: '',
      mediaType: '',
    },
    data: [],
    status: 'empty',
  },

  reducers: {
    setDateFilter(state, action) {
      return {
        ...state,
        filters: {
          show: 'DATE',
          text: '',
          date: action.payload,
          mediaType: '',
        },
      };
    },

    setTextFilter(state, action) {
      return {
        ...state,
        filters: {
          show: 'TEXT',
          text: action.payload,
          date: '',
          mediaType: '',
        },
      };
    },

    setMediaFilter(state, action) {
      return {
        ...state,
        filters: {
          show: 'MEDIA',
          text: '',
          date: '',
          mediaType: action.payload,
        },
      };
    },

    showAll(state) {
      return {
        ...state,
        filters: {
          show: 'ALL',
          text: '',
          date: '',
          mediaType: '',
        },
      };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchDateApod.fulfilled, (state, action) => (
      { ...state, data: action.payload, status: 'fulfilled' }
    ));
    builder.addCase(fetchDateApod.pending, (state) => (
      { ...state, status: 'pending' }
    ));
  },
});

const randomReducer = sliceRandom.reducer;
const allReducer = sliceAll.reducer;
const allApodsActions = sliceAll.actions;
export { randomReducer, allReducer, allApodsActions };
