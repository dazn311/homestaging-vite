import React, {useState} from 'react';
import {
  AppleOutlined,
  CloudServerOutlined,
  DollarOutlined,
  FileImageFilled,
  HomeOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ProjectOutlined
} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Button, Menu} from 'antd';
import {handlerClickLink} from "../../utils/handlerClickLink.ts";
import {Link, type NavigateFunction, useNavigate} from "react-router";

type MenuItem = Required<MenuProps>['items'][number];

function getItems(navigate: NavigateFunction) {
  const items: MenuItem[] = [
    { key: '1', icon: <HomeOutlined />, label: 'Главная' },
    {
      key: '2',
      icon: <AppleOutlined />,
      label: (
        <a
          onClick={(e)=>handlerClickLink(e,"/#portfolio",navigate)}
          href="/#about"
          rel="noopener noreferrer">
          Обо мне
        </a>
      ) },
    { key: '3', icon: <CloudServerOutlined />, label: (
        <a
          onClick={(e)=>handlerClickLink(e,"/#portfolio",navigate)}
          href="/#service"
          rel="noopener noreferrer">
          Услуги
        </a>
      ) },
    {
      key: '4',
      icon: <DollarOutlined />,
      label: (
        <a
          onClick={(e)=>handlerClickLink(e,"/#portfolio",navigate)}
          href="/#pricing"
          rel="noopener noreferrer">
          Цены
        </a>
      ) },
    {
      key: '400003',
      icon: <FileImageFilled />,
      label:  (
        <a
          onClick={(e)=>handlerClickLink(e,"/#portfolio",navigate)}
          href="/#portfolio"
          rel="noopener noreferrer">
          Портфолио
        </a>
      ) },
    {
      key: '400004',
      icon: <ProjectOutlined />,
      label: (
        <Link to={'/projects?jkName=all'}>
          <span className="text-secondary">Проекты</span>
        </Link>
      )},
    {
      key: '400005',
      icon: <MailOutlined />,
      label: (
        <a
          onClick={(e)=>handlerClickLink(e,"/#contact",navigate)}
          href="/#contact"
          rel="noopener noreferrer">
          Контакты
        </a>
      )
    },
  ];
  return items;
}


export const NavHeader: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ width: 'auto' }}>
      <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="horizontal"
        theme="dark"
        inlineCollapsed={collapsed}
        items={getItems(navigate)}
      />
    </div>
  );
};
