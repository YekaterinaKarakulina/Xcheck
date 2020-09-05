import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Avatar } from 'antd';
import {
  FormOutlined,
  OrderedListOutlined,
  EditOutlined,
  TeamOutlined,
  UserOutlined,
  SolutionOutlined,
  FileDoneOutlined,
  FileSearchOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

import './sidebar.scss';

const { Sider } = Layout;

class Sidebar extends React.PureComponent {
  render() {
    const { logout } = this.props;
    return (
      <Sider theme="light" breakpoint="sm" collapsedWidth="0">
        <div className="sidebar__about">
          <div className="logo">
            <Avatar shape="square" size={64} icon={<UserOutlined />} />
          </div>
          <div className="sidebar__about-name">Pavel Zakharov</div>
          <div className="sidebar__about-role">Student</div>
        </div>
        <Menu mode="inline">
          <Menu.Item key="1" icon={<OrderedListOutlined />}>
            Tasks
          </Menu.Item>
          <Menu.Item key="2" icon={<EditOutlined />}>
            Add/edit task
          </Menu.Item>
          <Menu.Item key="3" icon={<TeamOutlined />}>
            Review Requests
          </Menu.Item>
          <Menu.Item key="4" icon={<SolutionOutlined />}>
            From for Requests
          </Menu.Item>
          <Menu.Item key="5" icon={<FormOutlined />}>
            Check
          </Menu.Item>
          <Menu.Item key="6" icon={<FileDoneOutlined />}>
            Reviews
          </Menu.Item>
          <Menu.Item key="7" icon={<FileSearchOutlined />}>
            xCheck
          </Menu.Item>
          <Menu.Item key="8" icon={<LogoutOutlined />} onClick={logout}>
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

Sidebar.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Sidebar;
