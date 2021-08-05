import React, { useState } from 'react'
import { Layout, Menu, Tooltip } from 'antd'
import { FilePdfOutlined, SettingOutlined } from '@ant-design/icons'
import { Headers, Logo } from './style'

import logo from '../../assets/img/logo.svg'
import { Link } from 'react-router-dom'

const { SubMenu } = Menu

const { Header, Footer, Sider, Content } = Layout

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Sidebar: React.FC = ({ children }) => {
  const [state, setState] = useState({ collapsed: false })

  function onCollapse() {
    setState({
      collapsed: !state.collapsed
    })
  }
  const { collapsed } = state

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <Link to="/">
            <Logo
              src={logo}
              alt="logo marca"
              height={!collapsed ? '85px' : '30px'}
            />
          </Link>

          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <SubMenu key="sub1" icon={<FilePdfOutlined />} title="Relatórios">
              <Tooltip
                placement="rightTop"
                title="Carta de Responsabilidade da Administração"
              >
                <Menu.Item key="3">
                  <Link to="/cartaResponsabilidade">
                    Carta de Responsabilidade
                  </Link>
                </Menu.Item>
              </Tooltip>
            </SubMenu>

            <Menu.Item key="9" icon={<SettingOutlined />}>
              <Link to="">Configurações</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content>{children}</Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  )
}

export default Sidebar
