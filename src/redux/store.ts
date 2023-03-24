import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import thunk from 'redux-thunk';

import userReducer from './slices/userSlice'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const reducer = combineReducers({
  user: userReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: [thunk],
})

export const persistor = persistStore(store)