import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {updateNavigate} from "../../store/slices/navigateSlice.ts";
import {NavActiveKey} from "../../store/slices/initialNavigateState.ts";

export function ScrollTopBtn() {
  const dispatch = useDispatch();

  useEffect(()=>{
    const btn = document.getElementById('scroll-top');
    const sc = scrollTop(btn);
    window.addEventListener('scroll',sc);
    return () => {
      window.removeEventListener('scroll',sc);
    }
  },[])

  const menuHandler = () => {
    dispatch(updateNavigate({
      activeKey: NavActiveKey.TITLE,
    }));
  };

  return (
    <a
      href="/#header"
      id="scroll-top"
      onClick={menuHandler}
      className="scroll-top d-flex align-items-center justify-content-center">
      <i className="bi bi-arrow-up-short"/>
    </a>
  )
}

let isShowScrollTopBtn = false;
const scrollTop = (btn: HTMLElement | null) => {
  return () => {
    const deltaPosition = window.innerHeight - window.scrollY;

    if (deltaPosition < 0) {
      if (!isShowScrollTopBtn) {
        btn?.classList.add('active');
        isShowScrollTopBtn = true;
      }
    } else {
      if (isShowScrollTopBtn) {
        btn?.classList.remove('active');
        isShowScrollTopBtn = false;
      }
    }
    return btn;
  }
}