import React from "react";
import type {NavigateFunction} from "react-router";

export function handlerClickLink(e: React.MouseEvent<HTMLAnchorElement>,nextHash:string,navigate: NavigateFunction) {
  const pathname = window.location.pathname;

  if (pathname !== "/") {
    e.preventDefault();
    e.stopPropagation();
    navigate('/',{
      state: {
        pathFrom: pathname,
        nextHash: nextHash,},
    });
  }
}
