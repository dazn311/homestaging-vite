import {useEffect} from "react";
import {useSelector} from "react-redux";
import {Title} from "@/components/Title.tsx";
import {
  About, ScrollTopBtn, Services,
  Prices, Cooperation, Portfolio,
  Contact, TimelineComp} from "@/components";
import type {RootState} from "@/store/store.ts";

function HomePage() {
  const activeKey = useSelector((state: RootState) => state.navigate.activeKey);

  useEffect(() => {
    if (activeKey) {
      try {
        const el = document.querySelector(`#${activeKey}`);
        el?.scrollIntoView({ block: "start", behavior: "smooth" });
      } catch (e) {
        console.log('[27 HomePage] error: ',e);
      }
    }
  },[activeKey]);

  return (
    <>
      <Title/>
      <About/>
      <Services/>
      <TimelineComp/>
      <Cooperation/>
      <Prices/>
      <Portfolio/>
      <Contact/>
      <ScrollTopBtn/>
    </>
  )
}

export const Component = HomePage;
export default HomePage
