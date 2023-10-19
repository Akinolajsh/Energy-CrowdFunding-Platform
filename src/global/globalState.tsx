import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {} || null,
  toggle: false,
};

const GlobalState = createSlice({
  name: "user",
  initialState,
  reducers: {
    onUserState: (state, { payload }) => {
      state.user = payload;
    },
    onLogOut: (state) => {
      state.user = null;
    },
    onToggleState: (state, { payload }) => {
      state.toggle = payload;
    },
  },
});

export const { onUserState, onLogOut, onToggleState } = GlobalState.actions;

export default GlobalState.reducer;
