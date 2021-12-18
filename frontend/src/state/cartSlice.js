import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart: (state, { payload }) => {
      state.totalQuantity++;
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
          imageUrl: newProduct.imageUrl
        });
      } else {
        existingProduct.quantity++;
        existingProduct.totalPrice =
          existingProduct.totalPrice + newProduct.price;
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
