import React from "react";
import {FooterAbout} from "./components/FooterAbout.tsx";
import {UsefulLinks} from "./components/UsefulLinks.tsx";
import {CopyrightContainer} from "./components/CopyrightContainer.tsx";
import {OurServices} from "./components/OurServices.tsx";
import {Newsletter} from "./components/Newsletter.tsx";
import {useDispatch} from "react-redux";
import {updateNavigate} from "../../store/slices/navigateSlice.ts";
import {navOfKey} from "../../store/slices/initialNavigateState.ts";


export const Footer = () => {
  const dispatch = useDispatch();
  const handlerFooter = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    const hash = target.getAttribute("href");

    if (hash) {
      const [hash2] = hash.split('?');
      const keyPath = hash2.replaceAll(/([#/])/g, "");

      dispatch(updateNavigate({
        activeKey: navOfKey(keyPath),
      }));
    }
  }
  return (
    <>
      <footer
        id="footer"
        onClick={handlerFooter}
        className="footer position-relative dark-background">
        <div className="container footer-top">
          <div className="row gy-4">
            <FooterAbout/>
            <UsefulLinks/>
            <OurServices/>
            <Newsletter/>
          </div>
        </div>
        <CopyrightContainer />
      </footer>

    </>
  )
}
