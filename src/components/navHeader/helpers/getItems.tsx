import {Link, type NavigateFunction} from "react-router";
import {
  CloudServerOutlined,
  DollarOutlined,
  HomeOutlined,
  IdcardOutlined,
  MailOutlined,
  PictureOutlined,
  ProjectOutlined
} from "@ant-design/icons";
import type {MenuProps} from 'antd';
import {handlerClickLink} from "../../../utils/handlerClickLink.ts";

type MenuItem = Required<MenuProps>['items'][number];

export function getItems(navigate: NavigateFunction) {
  const items: MenuItem[] = [
    {
      key: '1',
      icon: <HomeOutlined/>,
      label: (
        <a
          onClick={(e) => handlerClickLink(e, "#titte-app", navigate)}
          href="/#titte-app"
          rel="noopener noreferrer">
          Главная
        </a>
      )
    },
    {
      key: '2',
      icon: <IdcardOutlined/>,
      label: (
        <a
          onClick={(e) => handlerClickLink(e, "#about", navigate)}
          href="/#about"
          rel="noopener noreferrer">
          Обо мне
        </a>
      )
    },
    {
      key: '3', icon: <CloudServerOutlined/>, label: (
        <a
          onClick={(e) => handlerClickLink(e, "#service", navigate)}
          href="/#service"
          rel="noopener noreferrer">
          Услуги
        </a>
      )
    },
    {
      key: '4',
      icon: <DollarOutlined/>,
      label: (
        <a
          onClick={(e) => handlerClickLink(e, "#pricing", navigate)}
          href="/#pricing"
          rel="noopener noreferrer">
          Цены
        </a>
      )
    },
    {
      key: '5',
      icon: <PictureOutlined/>,
      label: (
        <Link
          onClick={(e) => handlerClickLink(e, "#portfolio", navigate)}
          to="/#portfolio"
          rel="noopener noreferrer">
          Портфолио
        </Link>
      )
    },
    {
      key: '6',
      icon: <ProjectOutlined/>,
      className: 'project-link',
      label: (
        <Link to={'/projects?jkName=all'}>
          <span>Проекты</span>
        </Link>
      )
    },
    {
      key: '7',
      icon: <MailOutlined/>,
      label: (
        <a
          onClick={(e) => handlerClickLink(e, "#contact", navigate)}
          href="/#contact"
          rel="noopener noreferrer">
          Контакты
        </a>
      )
    },
  ];
  return items;
}
