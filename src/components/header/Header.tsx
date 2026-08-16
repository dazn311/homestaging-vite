import {NavHeaderMobil} from "@/components";
import {Topbar} from "./Topbar.tsx";

export const Header = () => {
  return (
    <header id="header" className="header ">
      <Topbar/>
      <NavHeaderMobil/>
    </header>
  )
}