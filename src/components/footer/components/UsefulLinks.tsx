import {Link, useNavigate} from "react-router";
import {navmenuFooterArr} from "../../navHeader/dataNav.ts";
import {LabelA} from "../../navHeader/components/LabelA.tsx";


export const UsefulLinks = () => {
  const navigate = useNavigate();
  const isAuth = false;

  return (
    <div className="col-lg-2 col-md-3 footer-links">
      <h4>Полезные ссылки</h4>
      <ul>
        {navmenuFooterArr.map(item => (
          <li key={item.url}>
            <LabelA
              title={item.title}
              nextHash={item.url}
              navigate={navigate} />
          </li>
        ))}
        <li><Link to={"/videos"}>Материалы</Link></li>
        {isAuth
          ? (<li><Link to={"/logout"}>Выйти</Link></li>)
          : (<li><Link to={"/login"}>Логин</Link></li>)}
      </ul>
    </div>
  )
}
