import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import likedSlice from "./likedSlice";
import cartSlice from "./cartSlice";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

const persistCfg = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    liked: likedSlice,
    cart: cartSlice
})

const rootPersistReducer = persistReducer(persistCfg, rootReducer)

const store = configureStore({
    reducer: rootPersistReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})

export default store
export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)