import {useEffect} from "react";
import {Title} from "../../components/Title.tsx";
import {About} from "../../components/about/About.tsx";
import {Services} from "../../components/services/Services.tsx";
import {Prices} from "../../components/prices/Prices.tsx";
import {Cooperation} from "../../components/cooperation/Cooperation.tsx";
import {Portfolio} from "../../components/portfolio/Portfolio.tsx";
import {Contact} from "../../components/contact/Contact.tsx";
import TimelineComp from "../../components/timeline/TimelineComp.tsx";
import {ScrollTopBtn} from "../../components/scroll-top-btn/ScrollTopBtn.tsx";
import {useSelector} from "react-redux";
import type {RootState} from "../../store/store.ts";
import '../../app/App.css';

function HomePage() {
  const activeKey = useSelector((state: RootState) => state.navigate.activeKey)

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

export default HomePage
