// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from './reducers';

const store = configureStore({
  reducer: bookingReducer,
  // You can add middleware here if needed
});

export default store;