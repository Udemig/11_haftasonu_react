import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./slices/languageSlice";

const store = configureStore({
  reducer: {
    lang: languageReducer,
  },
});

export default store;
