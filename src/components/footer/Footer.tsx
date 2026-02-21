import React from "react";
import {useDispatch} from "react-redux";
import {FooterAbout} from "@/components/footer/components/FooterAbout.tsx";
import {UsefulLinks} from "@/components/footer/components/UsefulLinks.tsx";
import {CopyrightContainer} from "@/components/footer/components/CopyrightContainer.tsx";
import {OurServices} from "@/components/footer/components/OurServices.tsx";
import {Newsletter} from "@/components/footer/components/Newsletter.tsx";
import {updateNavigate, navOfKey} from "@/store";


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
