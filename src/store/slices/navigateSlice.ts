import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import {initialNavigateState, NAV_PATH, NavActiveKey} from "./initialNavigateState.ts";

export type TUpdateNavProps = {
  currentPath?: NAV_PATH,
  currentHash?: string,
  activeKey?: NavActiveKey,
}

export const navigateSlice = createSlice({
  name:'navigate',
  initialState:initialNavigateState,
  reducers:{
    updateNavigate(state, action: PayloadAction<TUpdateNavProps>){
      if(action.payload.activeKey){
        state.activeKey = action.payload.activeKey;
      }
    }
  },
  selectors: {

  }
})

export const {updateNavigate} = navigateSlice.actions;
