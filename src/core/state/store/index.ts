// src/core/state/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { dashboardReducer, notesReducer } from '../reducers';
// import 'dotenv/config';

const store = configureStore({
  reducer: {
    // auth: authReducer,
    // user: userReducer,
    notes: notesReducer,
    dashboard: dashboardReducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: false, // 
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>; // Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch; // Infer the `AppDispatch` types from the store itself

export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; // Export a hook that can be reused to resolve types

export default store;

