import './nav.scss';
import {Link} from "react-router";
import type {TNavmenu, TNavMenuSub} from "./typesNav.ts";

export function ListItem({item}:{item: TNavMenuSub}) {
  return (
    <li className="dropdown">
      <Link to={`/projects?jkName=${item.jkName}`}>
        <span>{item.title}</span>
        <i className="bi bi-chevron-down toggle-dropdown"></i>
      </Link>
      <ul className={'street-name'}>
        {item.children.map((item:TNavmenu) => (
          <li key={item.url}><Link to={item.url}>{item.title}</Link></li>
        ))}
      </ul>
    </li>
  )
}