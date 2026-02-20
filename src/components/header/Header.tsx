import {NavHeaderMobil} from "../navHeader/NavHeaderMobil.tsx";
import {Topbar} from "./Topbar.tsx";

export const Header = () => {
  return (
    <header id="header" className="header ">
      <Topbar/>
      <NavHeaderMobil/>
    </header>
  )
}