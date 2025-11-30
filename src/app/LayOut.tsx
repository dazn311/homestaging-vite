import {Outlet} from "react-router";
import './App.css'
import {Header} from "../components/Header.tsx";
import {Footer} from "../components/footer/Footer.tsx";

function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
