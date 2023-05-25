import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLogin: false,
  },
  reducers: {
    setUserStatus(state, action) {
      state.isLogin = action.payload;
    },
    setUser(state, action) {
      const { user, token } = action.payload;
      state.user = { ...user };
      state.token = token;
      state.isLogin = true;
    },
    removeUser(state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLogin = false;
    },
  },
});
//Actions
export const { setUser, setUserStatus, removeUser } = userSlice.actions;
//Reducer
export const userReducer = userSlice.reducer;
//Selectors
export const getUser = state => state.auth.user;
export const getIsLogin = state => state.auth.isLogin;
