import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showPopup: false,
};

const PopupSlice = createSlice({
  name: "popup",
  initialState: initialState,
  reducers: {
    openPopup: (state) => {
      state.showPopup = true;
    },
    closePopup: (state) => {
      state.showPopup = false;
    },
  },
});
export const { openPopup, closePopup } = PopupSlice.actions;
export default PopupSlice.reducer;
