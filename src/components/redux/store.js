import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/auth-slice";
import sessionReducer from "./slice/session-slice";
import { injectStore } from "../utils/axiosInstance";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    session: sessionReducer,
  },
});

injectStore(store);
