import './App.css'
import {Title} from "../components/Title.tsx";
import {About} from "../components/about/About.tsx";
import {Services} from "../components/services/Services.tsx";
import {Prices} from "../components/prices/Prices.tsx";
import {Cooperation} from "../components/cooperation/Cooperation.tsx";
import {Portfolio} from "../components/portfolio/Portfolio.tsx";
import {Contact} from "../components/contact/Contact.tsx";
import TimelineComp from "../components/timeline/TimelineComp.tsx";
import {ScrollTopBtn} from "../components/scroll-top-btn/ScrollTopBtn.tsx";

function App() {
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

export default App
