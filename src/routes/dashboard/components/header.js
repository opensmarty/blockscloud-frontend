import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon } from 'antd'
import styles from './header.less'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function Header () {

  return (
    <div className={styles.navbar}>
      <Menu
        mode="horizontal"
      >
      <SubMenu title={<span><Icon type="home" /></span>}>
        <MenuItemGroup>
          <Menu.Item key="setting:1">关于本机</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup>
          <Menu.Item key="setting:2">系统偏好设置</Menu.Item>
          <Menu.Item key="setting:3">App Store</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup>
          <Menu.Item key="setting:4">锁屏</Menu.Item>
          <Menu.Item key="setting:5">退出</Menu.Item>
        </MenuItemGroup>
      </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">积木云Github</a>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default Header
