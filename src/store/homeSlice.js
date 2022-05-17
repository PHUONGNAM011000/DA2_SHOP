import { createSlice } from '@reduxjs/toolkit';
// import { DATA_PRODUCT } from '../Data/product';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    productHome: [],
  },
  reducers: {
    getProduct(state, action) {
      state.productHome = action.payload;
    },
  },
});

export const actionsHome = homeSlice.actions;
export default homeSlice.reducer;
