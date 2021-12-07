import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notification: null,
  isFetching: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setNotification(state, action) {
      state.notification = {
        variant: action.payload.variant,
        message: action.payload.message,
      };
    },
    setIsLoading(state, action) {
      state.isFetching = action.payload;
    },
    resetNotification(state) {
      state.notification = null;
    },
  },
});

export const { setNotification, setIsLoading, resetNotification } =
  uiSlice.actions;

export default uiSlice.reducer;
