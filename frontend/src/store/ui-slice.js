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
      state.isFetching = action.payload
    }
  },
});

export const { setNotification, setIsLoading } = uiSlice.actions;

export default uiSlice.reducer;
