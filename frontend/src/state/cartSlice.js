import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    // totalQuantity: 0,
    changed: false,
  },
  reducers: {
    addToCart: (state, { payload }) => {
      state.changed = true
      // state.totalQuantity++;
      const newProduct = payload;
      const existingProduct = state.products.find(
        (product) => product.id === newProduct._id
      );
      if (!existingProduct) {
        state.products.push({
          id: newProduct._id,
          productName: newProduct.productName,
          price: newProduct.price,
          quantity: 1,
          totalPrice: newProduct.price,
          imageUrl: newProduct.imageUrl
        });
      } else {
        existingProduct.quantity++;
        existingProduct.totalPrice =
          existingProduct.totalPrice + newProduct.price;
      }
    },
    clearCart: (state) => {
      state.products = [];
      state.totalQuantity = 0;
      state.changed = false;
    }
  },
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
