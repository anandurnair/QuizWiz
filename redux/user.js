'use client'
import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
  currentUser: null,
  userLogged: false,
};

const userslice = createSlice({
  name: "userManagement",
  initialState: initial_state,
  reducers: {
    updateUser: (state, action) => {
      state.currentUser = action.payload;
      state.userLogged = true;
    },
  },
});

export const { updateUser } = userslice.actions;
export default userslice.reducer;
