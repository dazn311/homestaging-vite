import type {NavigateFunction} from "react-router";
import {handlerClickLink} from "../../../utils/handlerClickLink.ts";

export function LabelA({nextHash,navigate,title}:{nextHash:string;navigate:NavigateFunction;title:string}) {
  return (
    <a
      onClick={(e) => handlerClickLink(e, nextHash, navigate)}
      href={`/${nextHash}`}
      rel="noopener noreferrer">
      {title}
    </a>
  )
}
