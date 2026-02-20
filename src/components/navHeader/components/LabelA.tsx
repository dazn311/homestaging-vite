import type {NavigateFunction} from "react-router";
import {handlerClickLink} from "../../../utils/handlerClickLink.ts";
import cn from "classnames";

export function LabelA({nextHash,navigate,title,cls}:{nextHash:string;navigate:NavigateFunction;title:string,cls?:string}) {
  return (
    <a
      onClick={(e) => handlerClickLink(e, nextHash, navigate)}
      href={`/${nextHash}`}
      className={cn(cls)}
      rel="noopener noreferrer">
      {title}
    </a>
  )
}
