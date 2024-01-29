import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    product: {},
    Total: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    showCart: (state, action) => {
      state.value += 1;
      const {productId, produtPrice} = action.payload;
      if (!state.product[productId]) state.product[productId] = 1;
      else state.product[productId] += 1;
      state.Total += produtPrice;
    },
    increment: (state, action) => {
      // alert((state.product[action.payload] += 1));
      // const {productId} = action.payload;
      state.product[action.payload] += 1;
    },
    decrement: (state, action) => {
      // alert((state.product[action.payload] += 1));
      // const {productId} = action.payload;
      state.product[action.payload] -= 1;
    },
    clearCart: state => {
      state.product = {};
      state.value = 0;
      state.Total = 0;
    },
  },
});

export const {showCart, increment, decrement, clearCart} = cartSlice.actions;

export default cartSlice.reducer