import type {TDataApp} from "../../store/dataApp.ts";

type TBreadcrumbsProps = {dataApp:TDataApp,street:string,jk:string};

export const Breadcrumbs = ({dataApp,street,jk}:TBreadcrumbsProps) => {
  return (
    <nav className="breadcrumbs">
      <ol>
        <li><a href="/">Главная</a></li>
        {jk &&
          <li className="current">{dataApp[jk] ? dataApp[jk].jkTitle : ''}</li>
        }
        {street &&
          <li className="current">{dataApp[jk] ? dataApp[jk].projects[street] : ''}</li>
        }
      </ol>
    </nav>
  )
}
