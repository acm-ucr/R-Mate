import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {},
  reducers: {
    login: () => {},
    logout: () => {},
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = counterSlice.actions;

export default loginSlice.reducer;
