import React from 'react';

import 'antd/dist/antd.css';

import { Layout, Menu, Avatar /* , Breadcrumb */ } from 'antd';
import {
  DesktopOutlined,
  FormOutlined,
  QuestionCircleOutlined,
  OrderedListOutlined,
  EditOutlined,
  // PieChartOutlined,
  FileOutlined,
  // TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import './sidebar.scss';

const { /* Header, */ Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    // this.setState({ collapsed });
  };

  onBreakpoint = (broken) => {
    console.log(broken);
  };

  render() {
    const { collapsed } = this.state;
    console.log(collapsed);

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          // collapsible
          // collapsed={collapsed}
          onCollapse={this.onCollapse}
          onBreakpoint={this.onBreakpoint}
          breakpoint="sm"
          collapsedWidth="0"
        >
          <div className="sidebar__about">
            <div className="logo">
              <Avatar shape="square" size={64} icon={<UserOutlined />} />
            </div>
            <div className="sidebar__about-name">Pavel Zakharov</div>
            <div className="sidebar__about-role">Student</div>
          </div>
          <Menu theme="dark" /* defaultSelectedKeys={['1']} */ mode="inline">
            <SubMenu key="sub1" icon={<QuestionCircleOutlined />} title="tasks info">
              <Menu.Item key="1" icon={<OrderedListOutlined />}>
                Tasks
              </Menu.Item>
              <Menu.Item key="2" icon={<EditOutlined />}>
                Add/edit task
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="3" icon={<UserOutlined />}>
              Review Requests
            </Menu.Item>
            <Menu.Item key="4" icon={<DesktopOutlined />}>
              From for Requests
            </Menu.Item>
            <Menu.Item key="5" icon={<FormOutlined />}>
              Check
            </Menu.Item>
            <Menu.Item key="6" icon={<FileOutlined />}>
              Reviews
            </Menu.Item>
            <Menu.Item key="7" icon={<FileOutlined />}>
              xCheck
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
          <Content style={{ margin: '0 16px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Some content.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}
