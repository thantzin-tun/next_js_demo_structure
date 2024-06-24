import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { persistReducer } from "redux-persist";

import mainReducer from "./feature/mainFeatureSlice";

import storage from "./customStorage";
import thunk from "redux-thunk";

//Persist Key and Storage Type
const persistConfig = {
    key: "storage",
    storage: storage,
    blacklist: [],
  };
  

const rootReducer = combineReducers({
  primary_store_state: persistReducer(persistConfig, mainReducer),
});


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({ serializableCheck: false}),
  devTools: process.env.NODE_ENV !== "production" ,
  // Enable Redux Dev Tools extension if in development mode only
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
