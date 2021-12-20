import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./state/cartSlice";
import userSlice from "./state/userSlice";

import storage from 'redux-persist/lib/storage'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userSlice);
// const persistedCartReducer = persistReducer(persistConfig, cartSlice);

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: persistedUserReducer,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store)
