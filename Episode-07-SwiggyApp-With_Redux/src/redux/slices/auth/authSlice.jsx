import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated;
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;