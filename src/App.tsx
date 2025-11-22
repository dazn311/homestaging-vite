import './App.css'
import {Header} from "./components/Header.tsx";
import {Title} from "./components/Title.tsx";
import {About} from "./components/About.tsx";
import {Services} from "./components/services/Services.tsx";
import {Prices} from "./components/prices/Prices.tsx";
import {Cooperation} from "./components/cooperation/Cooperation.tsx";

function App() {
  return (
    <>
      <Header/>
      <Title/>
      <About/>
      <Services/>
      <Cooperation/>
      <Prices/>
    </>
  )
}

export default App
