// src/core/state/store/index.ts
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { dashboardReducer } from "../reducers/dashboard";

// import 'dotenv/config';

const rootReducer = combineReducers({
  dashboardReducer: dashboardReducer,
  // auth: authReducer,
});

// const store = configureStore({
//   reducer: {
//     // auth: authReducer,
//     // user: userReducer,
//     notes: notesReducer,
//     dashboard: dashboardReducer,
//     auth: () => ({
//       login: loginReducer,
//       signup: signUpReducer,
//     }),
//   },
//   middleware: (getDefaultMiddleware: any) =>
//     getDefaultMiddleware({
//       serializableCheck: false, //
//     }),
//   devTools: process.env.NODE_ENV !== "production",
// });
//

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: false, // This is used to disable the serializable check.So, we can use the Redux DevTools extension
    }),
  devTools: process.env.NODE_ENV !== "production",
});

console.log("the state is", store.getState());
// /////

export type RootState = ReturnType<typeof store.getState>; // Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch; // Infer the `AppDispatch` types from the store itself

export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; // Export a hook that can be reused to resolve types

export default store;
