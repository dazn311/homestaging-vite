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
import {Button, ConfigProvider, Menu} from 'antd';
import {handlerClickLink} from "../../utils/handlerClickLink.ts";
import {Link, type NavigateFunction, useNavigate} from "react-router";
import './nav.scss';
import cn from "classnames";

type MenuItem = Required<MenuProps>['items'][number];

const styles: MenuProps['styles'] = {
  root: {border: 'none', padding: 0, borderRadius: 1, background: 'var(--background-color)'},
  item: {color: 'white',}
};

export const NavHeader: React.FC = () => {
  const navigate = useNavigate();
  const [ActiveMenu,
    // setActiveMenu
  ] = useState<MenuItem[]>(getItems(navigate));
  const isMobile = window.matchMedia('(max-width: 840px)').matches;
  const [collapsed, setCollapsed] = useState(!isMobile);
  const toggleCollapsed = () => {
    if (isMobile) {
      setCollapsed(!collapsed);
    }

  };

  return (
    <div className={'app-menu-wrapper'}>
      <Link to="/" className="logo d-flex align-items-center">
        <h1 className="sitename">ХоумУпаковка МОСКВА</h1>
      </Link>
      <ConfigProvider
        prefixCls="ant"
        iconPrefixCls="anticon"
        theme={{
          token: {colorPrimary: 'red'}
        }}
      >
        {isMobile && (
          <div className={cn('btn-menu-app', {'mobile-menu': isMobile})}>
            <Button
              type="primary"
              style={{
                backgroundColor: 'transparent',
                outlineStyle: 'none',
                borderColor: 'transparent'
              }}
              onClick={toggleCollapsed}
            >
              {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
            </Button>
          </div>
        )}

        {collapsed && (
          <Menu
            defaultSelectedKeys={['1']}
            mode={window.innerWidth > 840 ? "horizontal" : 'inline'}
            theme="dark"
            className={cn('menu-app', {'mobile-menu': isMobile})}
            styles={styles}
            items={ActiveMenu}
            onClick={toggleCollapsed}
            // inlineCollapsed={collapsed}
          />
        )}

      </ConfigProvider>
    </div>
  );
};


function getItems(navigate: NavigateFunction) {
  const items: MenuItem[] = [
    {
      key: '1',
      icon: <HomeOutlined/>,
      label: (
        <a
          onClick={(e) => handlerClickLink(e, "/#portfolio", navigate)}
          href="/#titte-app"
          rel="noopener noreferrer">
          Главная
        </a>
      )
    },
    {
      key: '2',
      icon: <AppleOutlined/>,
      label: (
        <a
          onClick={(e) => handlerClickLink(e, "/#portfolio", navigate)}
          href="/#about"
          rel="noopener noreferrer">
          Обо мне
        </a>
      )
    },
    {
      key: '3', icon: <CloudServerOutlined/>, label: (
        <a
          onClick={(e) => handlerClickLink(e, "/#portfolio", navigate)}
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
          onClick={(e) => handlerClickLink(e, "/#portfolio", navigate)}
          href="/#pricing"
          rel="noopener noreferrer">
          Цены
        </a>
      )
    },
    {
      key: '5',
      icon: <FileImageFilled/>,
      label: (
        <Link
          onClick={(e) => handlerClickLink(e, "/#portfolio", navigate)}
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
          onClick={(e) => handlerClickLink(e, "/#contact", navigate)}
          href="/#contact"
          rel="noopener noreferrer">
          Контакты
        </a>
      )
    },
  ];
  return items;
}


//const [collapsed, setCollapsed] = useState(true);
// const toggleCollapsed = () => {
//   setCollapsed(!collapsed);
// };

// <Button
//   className={'btn-menu-app'}
//   onClick={toggleCollapsed}
//   style={{display: 'none'}}
// >
//   {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
// </Button>