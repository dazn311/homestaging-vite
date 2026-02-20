import React, {useState} from 'react';
import {Link, useNavigate} from "react-router";
import {MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Button, ConfigProvider, Menu} from 'antd';
import cn from "classnames";
import {getItems} from "./helpers/getItems.tsx";
import './nav-mobil.scss';
import { AnimatePresence } from 'motion/react';

type MenuItem = Required<MenuProps>['items'][number];

const styles: MenuProps['styles'] = {
  root: {border: 'none', padding: 0, borderRadius: 1, background: 'var(--background-color)'},
  item: {color: 'white',}
};

export const NavHeaderMobil: React.FC = () => {
  const navigate = useNavigate();
  const [ActiveMenu] = useState<MenuItem[]>(getItems(navigate));

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(prev => !prev);
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
        <div className={cn('group-btn-menu-app')}>
          <div className={cn('btn-menu-app', 'mobile-menu')}>
            <Button
              type="primary"
              style={{
                // backgroundColor: 'transparent',
                outlineStyle: 'none',
                borderColor: 'transparent'
              }}
              onClick={toggleCollapsed}
            >
              {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
            </Button>
          </div>
            <AnimatePresence mode={'wait'}>
              {collapsed && (
                <Menu
                  defaultSelectedKeys={['1']}
                  mode={'inline'}
                  theme="dark"
                  className={cn('menu-app', 'mobile-menu')}
                  styles={styles}
                  items={ActiveMenu}
                  onClick={toggleCollapsed}
                />
              )}
            </AnimatePresence>
        </div>
      </ConfigProvider>
    </div>
  );
};
