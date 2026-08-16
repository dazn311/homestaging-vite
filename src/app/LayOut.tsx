import {Outlet} from "react-router";
import {Header, Footer} from "@/components";
import '@/app/App.css';

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
