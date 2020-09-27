/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { Layout, Menu, Avatar, Tag } from 'antd';
import {
  OrderedListOutlined,
  TeamOutlined,
  UserOutlined,
  FileDoneOutlined,
  FileSearchOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

import './sidebar.scss';

const { Sider } = Layout;

class Sidebar extends React.PureComponent {
  state = {
    menu: [
      { href: '/tasks/', label: 'Tasks', icon: <OrderedListOutlined /> },
      { href: '/review-requests/', label: 'Review requests', icon: <TeamOutlined /> },
      { href: '/reviews/', label: 'Reviews', icon: <FileDoneOutlined /> },
      {
        href: '/cross-check-sessions/',
        label: 'CrossCheck sessions',
        icon: <FileSearchOutlined />,
      },
    ],
  };

  renderUserInfo = () => {
    const { user } = this.props;
    return !isEmpty(user) ? (
      <div role="banner" className="sidebar__about">
        <div role="img" className="sidebar__logo">
          <Avatar shape="square" size={64} src={user.avatarUrl} />
        </div>
        <h3 className="sidebar__about-name">{user.name}</h3>
        <div role="listbox" className="sidebar__about-role">
          {user.roles.map((role) => (
            <Tag key={role} color="blue">
              {role}
            </Tag>
          ))}
        </div>
      </div>
    ) : (
      <div role="banner" className="sidebar__about">
        <div role="img" className="sidebar__logo">
          <Avatar shape="square" size={64} icon={<UserOutlined />} />
        </div>
      </div>
    );
  };

  renderMenu = () => {
    const { menu } = this.state;
    const { location, logout } = this.props;
    const menuItems = menu.map(({ href, label, icon }) => (
      <Menu.Item key={href} icon={icon}>
        <NavLink to={href}>{label}</NavLink>
      </Menu.Item>
    ));
    return (
      <Menu mode="inline" selectedKeys={[location.pathname]}>
        {menuItems}
        <Menu.Item key="Logout" icon={<LogoutOutlined />} onClick={logout}>
          Logout
        </Menu.Item>
      </Menu>
    );
  };

  render() {
    return (
      <Sider theme="light" breakpoint="sm" collapsedWidth="0">
        {this.renderUserInfo()}
        {this.renderMenu()}
      </Sider>
    );
  }
}

Sidebar.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default withRouter(Sidebar);
