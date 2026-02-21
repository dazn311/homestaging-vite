import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import {initialNavigateState} from "@/store/slices/initialNavigateState.ts";
import {ENavActiveKey, ENavPath} from "@/shared/model/routes.ts";

export type TUpdateNavProps = {
  currentPath?: ENavPath,
  currentHash?: string,
  activeKey?: ENavActiveKey,
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
