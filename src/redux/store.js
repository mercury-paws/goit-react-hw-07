import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";
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
import storage from "redux-persist/lib/storage";

const contactPersistConfig = {
  key: "contactsInfo",
  storage,
};

const pcontactReducer = persistReducer(contactPersistConfig, contactReducer);

export const store = configureStore({
  reducer: {
    contacts: pcontactReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
