import type {TProject} from "../../store/dataApp.ts";
import { Breadcrumb } from 'antd';

type TBreadcrumbsProps = {data:TProject | null};

export const Breadcrumbs = ({data}:TBreadcrumbsProps) => {
  return (
    <>
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
      <Breadcrumb
        items={[
          {
            title: 'Home',
          },
          {
            title: <a href="">Application Center</a>,
          },
          {
            title: <a href="">Application List</a>,
          },
          {
            title: 'An Application',
          },
        ]}
      />
    </>
  )
}
