import {configureStore} from '@reduxjs/toolkit';
import productReducer from './UlxAddProductSlice';
const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
