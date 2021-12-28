import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isLoggedIn: false,
    isLoading: false,
    error: false,
    message: null,
  },
  reducers: {
    loginRequest: (state) => {
      state.isLoading = true;
    },
    loginRequestSuccess: (state, { payload }) => {
      state.isLoggedIn = true;
      state.isLoading = false;
      state.user = payload;
    },
    loginRequestError: (state, { payload }) => {
      state.isLoading = false;
      state.error = true;
      state.message = payload;
    },
    logoutRequest: (state) => {
      state.isLoading = true;
    },
    logoutRequestSuccess: (state, { payload }) => {
      state.isLoggedIn = false;
      state.isLoading = false;
      state.user = payload;
    },
    logoutRequestError: (state, { payload }) => {
      state.isLoading = false;
      state.error = true;
    },
    singupRequest: (state) => {
      state.isLoading = true;
    },
    singupRequestSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.message = payload;
    },
    singupRequestError: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    clearMessage: (state) => {
      state.message = null;
      state.isLoading = false;
    },
  },
});

export const {
  loginRequest,
  loginRequestSuccess,
  loginRequestError,
  logoutRequestError,
  logoutRequestSuccess,
  logoutRequest,
  clearMessage,
  singupRequest,
  singupRequestSuccess,
  singupRequestError,
} = userSlice.actions;
export default userSlice.reducer;
