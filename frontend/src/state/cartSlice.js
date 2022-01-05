import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    // totalQuantity: 0,
    changed: false,
    isLoading: false,
  },
  reducers: {
    addToCart: (state, { payload }) => {
      state.changed = true;
      // state.totalQuantity++;
      const newProduct = payload;
      const existingProduct = state.products.find(
        (product) => product.id === newProduct.id
      );
      if (!existingProduct) {
        state.products.push({
          id: newProduct._id,
          productName: newProduct.productName,
          price: newProduct.price,
          quantity: 1,
          totalPrice: newProduct.price,
          imageUrl: newProduct.imageUrl,
        });
      } else {
        existingProduct.quantity++;
        existingProduct.totalPrice =
          existingProduct.totalPrice + newProduct.price;
      }
    },
    removeFromCart: (state, { payload }) => {
      state.changed = true;
      const itemId = payload.id;
      const existingItem = state.products.find((item) => item.id === itemId);
      if (existingItem.quantity === 1) {
        state.products = state.products.filter((item) => item.id !== itemId);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    updateCart: (state, { payload }) => {
      state.products = payload;
    },
    clearCart: (state) => {
      state.products = [];
      state.changed = true;
    },
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setChanged: (state, { payload }) => {
      state.changed = payload;
    },
  },
});

export const { addToCart, clearCart, updateCart, removeFromCart, setLoading, setChanged } =
  cartSlice.actions;
export default cartSlice.reducer;
