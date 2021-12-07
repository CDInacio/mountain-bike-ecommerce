import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import userSlice from "./user-slice";
import productSlice from './product-slice';
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice,
    user: userSlice,
    products: productSlice,
    cart: cartSlice,
  },
});

export default store;
