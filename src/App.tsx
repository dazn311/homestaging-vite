import './App.css'
import {Header} from "./components/Header.tsx";
import {Title} from "./components/Title.tsx";
import {About} from "./components/About.tsx";
import {Services} from "./components/services/Services.tsx";

function App() {
  return (
    <>
      <Header/>
      <Title/>
      <About/>
      <Services/>
    </>
  )
}

export default App
