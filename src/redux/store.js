import { configureStore } from '@reduxjs/toolkit';
//slices
import { contactsApi } from './contactsSlice';
import { filterReducer } from 'redux/filterSlice.js';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
