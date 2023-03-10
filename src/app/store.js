import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../features/profileSlice";
import homeReducer from "../features/homeSlice";
import searchReducer from "../features/searchSlice";

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    home: homeReducer,
    search: searchReducer,
  },
});
