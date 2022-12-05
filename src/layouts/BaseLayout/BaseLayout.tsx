import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FolderOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import './BaseLayout.css';

const { Header, Sider, Content } = Layout;

const BaseLayout: React.FC = ({ children }) => {
  const history = useHistory();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ height: '90vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <b>
          <div className='logo-block'>
          <div>T</div>
          { !collapsed && <div>ask manager</div> }
          </div> 
          </b>
          </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: 'project',
              icon: <FolderOutlined />,
              label: 'Projects',
              onClick: () => history.push('/project'),
            },
            {
              key: 'task',
              icon: <UnorderedListOutlined  />,
              label: 'Tasks',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
        <div style={{ width: '1rem' }}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '8px 16px',
            padding: 8,
            minHeight: 280,
          }}
        >
          { children }
        </Content>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;