import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import authReducer from "./auth/auth-slice";
import { petsReducer } from "./pets/pets-slice";
import { newsReducer } from "./news/news-slice";
import { noticesReducer } from "./notices/notices-slice";
import handleNotificationsNoticePage from "./utils/handleNotificationsNoticePage";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    pets: petsReducer,
    notices: noticesReducer,
    news: newsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(handleNotificationsNoticePage),
});

export const persistor = persistStore(store);
