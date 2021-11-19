import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;
    },
    reset: (state) => {
      state.userInfo = null;
    },
  },
});

export const { setUser, reset } = userSlice.actions;

export default userSlice.reducer;
