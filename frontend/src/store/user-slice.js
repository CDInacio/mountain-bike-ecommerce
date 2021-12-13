import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.userInfo = action.payload;
    },
    setIsLogged(state, action) {
      state.isLogged = !state.isLogged;
    },
    resetUserInfo(state) {
      state.userInfo = [];
    },
  },
});

export const { setUser, resetUserInfo, setIsLogged } = userSlice.actions;

export default userSlice.reducer;
