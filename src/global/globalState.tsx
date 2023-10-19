import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {} || null,
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
  },
});

export const { onUserState, onLogOut } = GlobalState.actions;

export default GlobalState.reducer;
