import {Link, useNavigate} from "react-router";
import {navmenuFooterCol2Arr} from "@/shared/dataNav.ts";
import {LabelA} from "@/components";


export const OurServices = () => {
  const navigate = useNavigate();

  return (
    <div className="col-lg-2 col-md-3 footer-links">
      <h4>Наши услуги</h4>
      <ul>
        {navmenuFooterCol2Arr.map(item => (
          <li key={item.url}>
            <LabelA
              title={item.title}
              nextHash={item.url}
              navigate={navigate} />
          </li>
        ))}
        <li><Link to={"/projects?jkName=all"}>Проекты</Link></li>
      </ul>
    </div>
  )
}
