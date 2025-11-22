import './App.css'
import {Header} from "./components/Header.tsx";
import {Title} from "./components/Title.tsx";
import {About} from "./components/About.tsx";
import {Services} from "./components/services/Services.tsx";
import {Prices} from "./components/prices/Prices.tsx";
import {Cooperation} from "./components/cooperation/Cooperation.tsx";
import {Portfolio} from "./components/portfolio/Portfolio.tsx";
import {Contact} from "./components/contact/Contact.tsx";

function App() {
  return (
    <>
      <Header/>
      <Title/>
      <About/>
      <Services/>
      <Cooperation/>
      <Prices/>
      <Portfolio/>
      <Contact/>
    </>
  )
}

export default App
