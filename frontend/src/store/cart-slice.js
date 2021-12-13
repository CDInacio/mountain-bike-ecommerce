import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  // totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  changed: false,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      // state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          imageUrl: newItem.imageUrl,
          productName: newItem.productName,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    updateCart(state, action) {
      state.items = action.payload.items;
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      // state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    cleanCart(state) {
      state.items = [];
      state.totalQuantity = 0;
    },
  },
});

export const { addItemToCart, removeItemFromCart, cleanCart, updateCart } = cartSlice.actions;

export default cartSlice.reducer;
