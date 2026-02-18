import React, {useState} from 'react';
import {Link, useNavigate} from "react-router";
import {MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Button, ConfigProvider, Menu} from 'antd';
import cn from "classnames";
import {getItems} from "./helpers/getItems.tsx";
import './nav.scss';

type MenuItem = Required<MenuProps>['items'][number];

const styles: MenuProps['styles'] = {
  root: {border: 'none', padding: 0, borderRadius: 1, background: 'var(--background-color)'},
  item: {color: 'white',}
};

export const NavHeader: React.FC = () => {
  const navigate = useNavigate();
  const [ActiveMenu] = useState<MenuItem[]>(getItems(navigate));
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
