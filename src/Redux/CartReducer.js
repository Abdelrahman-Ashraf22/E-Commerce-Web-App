import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  fav: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (product) {
        product.count = action.payload.count;
      } else {
        state.products.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id
      );
    },
    resetCart: (state) => {
      state.products = [];
    },
    addToFav: (state, action) => {
      const fav = state.fav.find((item) => item.id === action.payload.id);
      !fav && state.fav.push(action.payload);
    },
    removeFromFav: (state, action) => {
      state.fav = state.fav.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, removeFromCart, resetCart, addToFav, removeFromFav } =
  cartSlice.actions;

export default cartSlice.reducer;
