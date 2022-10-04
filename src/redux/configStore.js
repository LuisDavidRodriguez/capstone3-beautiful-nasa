import { configureStore } from '@reduxjs/toolkit';
import apodReducer from './apod';

const store = configureStore({
  reducer: {
    apod: apodReducer,
  },
});

export default store;
