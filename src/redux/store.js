import { configureStore } from '@reduxjs/toolkit';
//slices
import { contactsApi } from './contactsSlice';
import { filterReducer } from 'redux/filterSlice.js';
import { userReducer } from './userSlice';
import { authApi } from './authApi';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    auth: userReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    authApi.middleware,
    contactsApi.middleware,
  ],
});
