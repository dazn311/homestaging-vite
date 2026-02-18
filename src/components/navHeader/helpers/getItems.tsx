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
        <LabelA
          title={'Главная'}
          nextHash={'#titte-app'}
          navigate={navigate} />
      )
    },
    {
      key: '2',
      icon: <IdcardOutlined/>,
      label: (
        <LabelA
          title={'Обо мне'}
          nextHash={'#about'}
          navigate={navigate} />
      )
    },
    {
      key: '3', icon: <CloudServerOutlined/>, label: (
        <LabelA
          title={'Услуги'}
          nextHash={'#service'}
          navigate={navigate} />
      )
    },
    {
      key: '4',
      icon: <DollarOutlined/>,
      label: (
        <LabelA
          title={'Цены'}
          nextHash={'#pricing'}
          navigate={navigate} />
      )
    },
    {
      key: '5',
      icon: <PictureOutlined/>,
      label: (
        <LabelA
          title={'Портфолио'}
          nextHash={'#portfolio-anchor'}
          navigate={navigate} />
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
        <LabelA
          title={'Контакты'}
          nextHash={'#contact'}
          navigate={navigate} />
      )
    },
  ];
  return items;
}

function LabelA({nextHash,navigate,title}:{nextHash:string;navigate:NavigateFunction;title:string}) {
  return (
    <a
      onClick={(e) => handlerClickLink(e, nextHash, navigate)}
      href={`/${nextHash}`}
      rel="noopener noreferrer">
      {title}
    </a>
  )
}