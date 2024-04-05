"use client";
import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
  currentInstructor: null,
  instructorLogged: null,
};

const instructorSlice = createSlice({
  name: "instructorManagement",
  initialState: initial_state,
  reducers: {
    updateInstructor: (state, action) => {
      state.currentInstructor = action.payload;
      state.instructorLogged = true;
      console.log('current instructor : ',state.currentInstructor);
    },
  },
});

export const { updateInstructor } = instructorSlice.actions;
export default instructorSlice.reducer;
