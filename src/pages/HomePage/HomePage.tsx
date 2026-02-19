import {useEffect} from "react";
import {useLocation} from "react-router";
import {Title} from "../../components/Title.tsx";
import {About} from "../../components/about/About.tsx";
import {Services} from "../../components/services/Services.tsx";
import {Prices} from "../../components/prices/Prices.tsx";
import {Cooperation} from "../../components/cooperation/Cooperation.tsx";
import {Portfolio} from "../../components/portfolio/Portfolio.tsx";
import {Contact} from "../../components/contact/Contact.tsx";
import TimelineComp from "../../components/timeline/TimelineComp.tsx";
import {ScrollTopBtn} from "../../components/scroll-top-btn/ScrollTopBtn.tsx";
import '../../app/App.css';

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    //выполнить если только есть мы переходим на главную с другой страницы.
    if (location.state && typeof location.state === "object") {
      const {nextHash} = location.state;
      if (nextHash) {
        const el = document.querySelector(nextHash);
        el?.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }
  },[location]);

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
