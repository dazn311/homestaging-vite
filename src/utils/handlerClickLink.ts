import React from "react";
import type {NavigateFunction} from "react-router";
import {store,updateNavigate} from "@/store";
import {navOfKey} from "@/shared/model/routes.ts";

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
