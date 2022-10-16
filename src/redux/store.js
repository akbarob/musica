import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/Api";
import playerSlice from "./feature/playerSlice";

// Import the playerSlice and the api middleware

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    player: playerSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
