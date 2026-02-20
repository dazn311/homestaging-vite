import React from "react";
import type {NavigateFunction} from "react-router";
import {store} from "../store/store.ts";
import {updateNavigate} from "../store/slices/navigateSlice.ts";
import {navOfKey} from "../store/slices/initialNavigateState.ts";

export function handlerClickLink(e: React.MouseEvent<HTMLAnchorElement>,nextHash:string,navigate: NavigateFunction) {
  const pathname = window.location.pathname;

  if (pathname !== "/") {
    e.preventDefault();
    e.stopPropagation();
    const keyPath = nextHash.replace(/^#/, "");
    store.dispatch(updateNavigate({
      activeKey: navOfKey(keyPath)
    }))
    navigate('/',{
      state: {
        pathFrom: pathname,
        nextHash: nextHash,},
    });
  }
}
