'use client'
import TransferData from "@/app/(home)/transfer/page";
import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
  currentUser: null,
  userLogged: false,
  correctAnswewr :null
};

const userslice = createSlice({
  name: "userManagement",
  initialState: initial_state,
  reducers: {
    updateUser: (state, action) => {
      state.currentUser = action.payload;
      state.userLogged = true;
    },
    transferData:(state,action)=>{
        state.correctAnswewr = action.payload;
    }
  },
});

export const { updateUser } = userslice.actions;
export default userslice.reducer;
