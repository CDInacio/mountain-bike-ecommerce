import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productsByDep: [],
  singleProduct: "",
  singleProductSpec: [],
  suspensions: [],
  frames: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = state.products.concat(action.payload);
    },
    setProductsByDep(state, action) {
      state.productsByDep = state.productsByDep.concat(action.payload);
    },
    clearProductsByDep(state) {
      state.productsByDep = [];
    },
    setSingleProduct(state, action) {
      state.singleProduct = action.payload;
    },
    clearSingleProduct(state) {
      state.singleProductSpec = [];
    },
    setSingleProductSpec(state, action) {
      state.singleProductSpec = state.singleProductSpec.concat(action.payload);
    },
    clearSingleProductSpec(state) {
      state.singleProductSpec = [];
    },
    cleanUpProducts(state) {
      state.products = [];
    },
    cleanUpSingleProduct(state) {
      state.singleProduct = [];
    },
    setSuspensions(state, action) {
      state.suspensions = state.suspensions.concat(action.payload);
    },
    clearSuspensions(state) {
      state.suspensions = [];
    },
    setFrames(state, action) {
      state.frames = state.frames.concat(action.payload);
    },
    clearFrames(state) {
      state.frames = [];
    },
  },
});

export const {
  setProducts,
  setSingleProduct,
  cleanUpProducts,
  cleanUpSingleProduct,
  setProductsByDep,
  clearProductsByDep,
  setSingleProductSpec,
  clearSingleProduct,
  clearSingleProductSpec,
  setSuspensions,
  clearSuspensions,
  setFrames,
  clearFrames
} = productSlice.actions;

export default productSlice.reducer;
