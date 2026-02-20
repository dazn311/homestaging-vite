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
import {LabelA} from "../components/LabelA.tsx";

type MenuItem = Required<MenuProps>['items'][number];

export function getItems(navigate: NavigateFunction) {
  const items: MenuItem[] = [
    {
      key: 'title',
      icon: <HomeOutlined/>,
      label: (
        <LabelA
          title={'Главная'}
          nextHash={'#title'}
          navigate={navigate} />
      )
    },
    {
      key: 'about',
      icon: <IdcardOutlined/>,
      label: (
        <LabelA
          title={'Обо мне'}
          nextHash={'#about'}
          navigate={navigate} />
      )
    },
    {
      key: 'service', icon: <CloudServerOutlined/>, label: (
        <LabelA
          title={'Услуги'}
          nextHash={'#service'}
          navigate={navigate} />
      )
    },
    {
      key: 'pricing',
      icon: <DollarOutlined/>,
      label: (
        <LabelA
          title={'Цены'}
          nextHash={'#pricing'}
          navigate={navigate} />
      )
    },
    {
      key: 'portfolio',
      icon: <PictureOutlined/>,
      label: (
        <LabelA
          title={'Портфолио'}
          nextHash={'#portfolio'}
          navigate={navigate} />
      )
    },
    {
      key: 'projects',
      icon: <ProjectOutlined/>,
      className: 'project-link',
      label: (
        <Link to={'/projects?jkName=all'}>
          <span>Проекты</span>
        </Link>
      )
    },
    {
      key: 'contact',
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