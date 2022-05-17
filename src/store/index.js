import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './homeSlice';
import cartReducer from './cartSlice';
import productReducer from './productSlice';
import loginReducer from './loginSlice';
import logoutReducer from './logoutSlice';
import sizeReducer from './sizeSlice';

const store = configureStore({
  reducer: {
    home: homeReducer,
    cart: cartReducer,
    product: productReducer,
    login: loginReducer,
    logout: logoutReducer,
    size: sizeReducer,
  },
});

export default store;
