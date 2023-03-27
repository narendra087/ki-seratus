import { configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
// import thunk from 'redux-thunk';

import userReducer from './slices/userSlice'
import calendarReducer from "./slices/calendarSlice";

const persistConfig = {
  key: 'primary',
  version: 1,
  storage,
}

const reducer = combineReducers({
  user: userReducer,
  calendar: calendarReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})

export const persistor = persistStore(store)