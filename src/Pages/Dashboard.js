import { Button, notification, Typography } from 'antd';
import Icon, { LoginOutlined, DashboardOutlined, ProfileOutlined, HomeFilled, ProjectFilled } from '@ant-design/icons';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth';
import './Dashboard.css';
import { Layout, Avatar, Menu, Breadcrumb } from 'antd';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';

const { Header, Footer, Sider, Content } = Layout;
const { Paragraph } = Typography;

function Dashboard() {
    const navigate = useNavigate();
    const auth = useSelector(state => state.auth)
    const authFunction = useAuth()

    const [api, contextHolder] = notification.useNotification();
    
    const loginSuccessAlert = () => {
        api['success']({
            message: 'Successfully Login',
            description:
                'Welcome to Dashboard.',
        });
    };

    const handlerLogout = () => {
        authFunction.logout()
        navigate('/')
    }

    useEffect(() => {
        if (auth.isSuccess) {
            loginSuccessAlert()
        }

        
    })

    return (
        <div className="Dashboard">
            {contextHolder}
            <Layout>
                <Header style={{ padding: 10 }}>
                    <Avatar style={{ float: 'right' }} src='/dp.png' />
                    <Title style={{ color: 'white' }} level={3}><HomeFilled /> <span>Redux</span></Title>
                </Header>
                <Layout>
                    <Sider>
                        <Menu
                            defaultSelectedKeys={['Dashboard']}
                            mode="inline">
                            <Menu.Item key='Dashboard'>
                                <DashboardOutlined />
                               <span>Dashboard</span> 
                            </Menu.Item>
                                <SubMenu
                                    title={
                                        <span>
                                            <ProfileOutlined />
                                            <span>Profile</span>
                                        </span>
                                    }
                                    >
                                </SubMenu>
                                <SubMenu
                                    title={
                                        <span>
                                            <ProjectFilled />
                                            <span>About US</span>
                                        </span>
                                    }
                                >
                                </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content style={{ padding: '0 50px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ background: '#fff', padding: 24, minHeight: 580 }}>
                            
                                <Paragraph style={{ flexShrink: 1}}>Message : {auth.message}</Paragraph>
                                <Paragraph style={{ flexShrink: 1 }}>Token : {auth.payload}</Paragraph>
                            
                            <Button type='primary' onClick={handlerLogout}><LoginOutlined />LogOut </Button>
                            
                        </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Dashboard page using antd</Footer>
                    </Layout>
                </Layout>
            </Layout>
        </div>

    )
}
export default Dashboard;