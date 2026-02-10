import React, {useState} from "react";
import {Link, useNavigate} from "react-router";
import {navmenuArr, navmenuSubArr} from "./dataNav.ts";
import {ListItem} from "./ListItem.tsx";
import cn from "classnames";
import {handlerClickLink} from "../../utils/handlerClickLink.ts";
import './nav.scss';

export const NavHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function handlerClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(prev =>!prev);
  }

  return (
    <div onClick={()=>setIsOpen(false)} className={cn("branding d-flex align-items-center",
      {'mobile-nav-active': isOpen})}>
      <div className="container position-relative d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center">
          <h1 className="sitename">ХоумУпаковка МОСКВА</h1>
        </Link>
        <nav id="navmenu" className="navmenu">
          <ul>
            {navmenuArr.map(item => (
              <li key={item.url}>
                <a
                  onClick={(e)=>handlerClickLink(e,item.url,navigate)}
                  href={item.url}>{item.title}</a>
              </li>
            ))}
            <li className="dropdown text-secondary">
              <Link to={'/projects?jkName=all'}>
                <span className="text-secondary">Проекты</span>
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </Link>
              <ul className={'jk-name'}>
                {navmenuSubArr.map((item,idx) => (
                  <ListItem key={'nav'+idx} item={item} />
                ))}
              </ul>
            </li>
            <li>
              <a
                onClick={(e)=>handlerClickLink(e,"/#contact",navigate)}
                href={"/#contact"}>Контакты</a>
            </li>
          </ul>
          <i onClick={handlerClick} className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
      </div>
    </div>
  )
}
