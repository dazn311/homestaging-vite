import React from "react";
import type {NavigateFunction} from "react-router";

export function handlerClickLink(e: React.MouseEvent<HTMLAnchorElement>,pathName:string,navigate: NavigateFunction) {
  const pathname = window.location.pathname;

  if (pathname !== "/" && pathname !== "#") {
    e.preventDefault();
    e.stopPropagation();
    navigate(pathName);
  } else {
    const section = document.querySelector(pathName);
    if (!section) {
      return;
    }
    const offsetTop = (section as HTMLElement).offsetTop;
    const scrollMarginTop = getComputedStyle(section).scrollMarginTop;
    if (!scrollMarginTop) return;
    window.scrollTo({
      top: offsetTop - parseInt(scrollMarginTop),
      behavior: 'smooth'
    });
  }
}