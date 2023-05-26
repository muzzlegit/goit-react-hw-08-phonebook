import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const userSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLogin: false,
  },
  reducers: {
    refreshUser(state, action) {
      state.user = { ...action.payload };
      state.isLogin = true;
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
//persist setup
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};
const persistedСontactsReducer = persistReducer(
  persistConfig,
  userSlice.reducer
);
//Actions
export const { setUser, setUserStatus, removeUser, refreshUser } =
  userSlice.actions;
//Reducer
export const userReducer = persistedСontactsReducer;
//Selectors
export const getUser = state => state.auth.user;
export const getIsLogin = state => state.auth.isLogin;
export const getToken = state => state.auth.token;
