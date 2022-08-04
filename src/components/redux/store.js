import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./slices/posts";
import authReducer from "./slices/auth";

const store = configureStore({
  reducer: {
    postReducer,
    authReducer,
  },
});

export default store;
