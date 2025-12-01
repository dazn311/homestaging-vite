import type {TProject} from "../../store/dataApp.ts";

type TBreadcrumbsProps = {data:TProject | null};

export const Breadcrumbs = ({data}:TBreadcrumbsProps) => {
  return (
    <nav className="breadcrumbs">
      <ol>
        <li><a href="/">Главная</a></li>
        {data?.jkTitle &&
          <li className="current">{data.jkTitle}</li>
        }
        {data?.street &&
          <li className="current">{data['street']}</li>
        }
      </ol>
    </nav>
  )
}
