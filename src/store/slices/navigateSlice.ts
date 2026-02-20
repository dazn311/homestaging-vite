import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import {initialNavigateState} from "./initialNavigateState.ts";


export const navigateSlice = createSlice({
  name:'navigate',
  initialState:initialNavigateState,
  reducers:{
    updateNavigate(state, action: PayloadAction<{ value:number }>){
      state.value += action.payload.value;
    }
  }
})

export const {updateNavigate} = navigateSlice.actions;

export default navigateSlice.reducer;