import { configureStore } from "@reduxjs/toolkit";
import PopupSlice from "./features/PopupSlice";

export const store = configureStore({
  reducer: {
    popup: PopupSlice,
  },
});
