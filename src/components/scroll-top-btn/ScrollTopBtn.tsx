import {useEffect} from "react";

export function ScrollTopBtn() {

  useEffect(()=>{
    const btn = document.getElementById('scroll-top');
    let isShow = false;
    const scrollTop = () => {
      const deltaPosition = window.innerHeight - window.scrollY;

      if (deltaPosition < 0) {
        if (!isShow) {
          btn?.classList.add('active');
          isShow = true;
        }
      } else {
        if (isShow) {
          btn?.classList.remove('active');
          isShow = false;
        }
      }
    }
    window.addEventListener('scroll',scrollTop);
    return () => {
      window.removeEventListener('scroll',scrollTop);
    }
  },[])

  return (
    <a
      href="#"
      id="scroll-top"
      className="scroll-top d-flex align-items-center justify-content-center">
      <i
        className="bi bi-arrow-up-short"/>
    </a>
  )
}

