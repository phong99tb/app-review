import * as React from "react";
import './App.css';
import Login from "./component/Login";
import 'antd/dist/antd.css';
import ListMonth from './component/User/ListMonth';
import FormInfo from './component/User/FormInfo';
import SelfAppraisal from './component/User/SelfAppraisal';
import Evaluate from './component/User/Evaluate';
import Admin from "./component/Admin/Admin";
import AdminBC from "./component/Admin/AdminBC"
import AdminUser from "./component/Admin/AdminUser";
import AdminXH from "./component/Admin/AdminXH";
import AdminConfig from "./component/Admin/AdminConfig";
import AdminGroup from "./component/Admin/AdminGroup";
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { Avatar, Dropdown, Layout, Menu, Space } from 'antd';

import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  UserSwitchOutlined,
  UsergroupAddOutlined,
  LoginOutlined,
} from '@ant-design/icons';
import AdminUserAdd from "./component/Admin/AdminUserAdd";
import AdminConfigAdd from "./component/Admin/AdminConfigAdd";
import AdminGroupAdd from "./component/Admin/AdminGroupAdd";
import Change from "./component/Change";
import AdminConfigEdit from "./component/Admin/AdminConfigEdit";
import AdminBCCT from "./component/Admin/AdminBCCT";
import AdminGroupEdit from "./component/Admin/AdminGroupEdit";
import Dangky from "./component/Dangky";
import ChangePass from "./component/ChangePass";
import { DownOutlined } from '@ant-design/icons';

function App(){

    let user = JSON.parse(window.localStorage.getItem('info'));// Lấy thông tin từ localhost
    const { Header, Content, Sider } = Layout;

    // manager thì hiển thị quản lý, còn user thì ẩn
    // start
    const labelMenu = ["ket-qua","danh-gia-ban-than","quan-ly"]
    const menu = ['Kết quả','Đánh giá','Quản lý']
    const labelMenuUser = ["ket-qua","danh-gia-ban-than"]
    const menuUser = ['Kết quả','Đánh giá']
    let items=[]
    if(user?.[0]?.role_name === "manager") {
        items = [
            BarChartOutlined,
            UserSwitchOutlined ,
            UsergroupAddOutlined,
            ].map((icon, index) => ({
            key: String(index + 1),
            icon: React.createElement(icon),
            label: <Link to={"/home/"+ labelMenu[index]} >{menu[index]}</Link>,
            }));
    } else {
        items = [
            BarChartOutlined,
            UserSwitchOutlined ,
            ].map((icon, index) => ({
            key: String(index + 1),
            icon: React.createElement(icon),
            label: <Link to={"/home/"+ labelMenuUser[index]} >{menuUser[index]}</Link>,
            }));
    }
    // end

    // menu của màn hiển thị thông tin
    const labelMenuInfo = ["user","change-pass"]
    const menuInfo = ['Thông tin cá nhân','Đổi mật khẩu']
    const itemInfo = [
        BarChartOutlined,
        UserSwitchOutlined ,
    ].map((icon, index) => ({
        key: String(index + 1),
        icon: React.createElement(icon),
        label: <Link to={"/home/"+ labelMenuInfo[index]} >{menuInfo[index]}</Link>,
    }));

    // menu của Admin
    const labelMenuAdmin = ["user","baocao","xephang","editConfig","editGroup","change"]
    const menuAdmin = ['List','Báo cáo', 'Xếp hạng','Chỉ tiêu đánh giá','Group','Sắp ra mắt']
    const itemsAdmin = [
        UserOutlined,
        VideoCameraOutlined,
        UploadOutlined,
        BarChartOutlined,
        CloudOutlined,
        AppstoreOutlined,
    ].map((icon, index) => ({ 
        key: String(index + 1),
        icon: React.createElement(icon),
        label: <Link to={"/admin/"+ labelMenuAdmin[index]} >{menuAdmin[index]}</Link>,
    }));


    const onChangeMenu = (key) => {
        console.log(key)
    };

    // Ấn đăng xuất
    const onClickOut = () => {
        window.localStorage.clear();
    };

    const list = (
        <Menu
        items={[
            {
                icon: React.createElement(UserOutlined),
                label: <Link to="/home/user">Thông tin cá nhân</Link>,
                key: '0',
            },
            {
                icon: React.createElement(LoginOutlined),
                label: <Link to="/login">Đăng xuất</Link>,
                key: '1',
                onClick: onClickOut,
            },
        ]}
        />
    );

    return (
        <div>      
            <Routes defaultSelectedKeys="/login" >
                <Route path="/" element={<Login/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/dang-ky" element={<Dangky/>} />
                <Route path="/admin" element={<Admin/>} />
                <Route path="/home/user" element={
                    <Layout hasSider>
                        <Sider
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                            top: 0,
                            bottom: 0,
                        }}
                        >
                            <div className="logo" />
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['']} items={items} onClick={onChangeMenu} >
                            </Menu>
                        </Sider>
                        <Layout
                        className="site-layout"
                        style={{
                            marginLeft: 200,
                        }}
                        >
                            <Header
                                className="site-layout-background"
                                style={{
                                padding: 0,
                                }}
                            >
                                <div className="logout" >
                                    <p>Thông tin</p>
                                    <Dropdown style={{marginLeft:"100px"}} overlay={list} trigger={['click']}>
                                        <a onClick={(e) => e.preventDefault()}>
                                        <Space>                                         
                                            <Avatar size={34} icon={<UserOutlined />} />
                                            {user?.[0]?.email}
                                            <DownOutlined />
                                        </Space>
                                        </a>
                                    </Dropdown>
                                </div>
                            </Header>
                            <Content
                                style={{
                                margin: '24px 16px 0',
                                overflow: 'initial',
                                }}
                            >
                                <div
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    textAlign: 'center',
                                    display:"flex",
                                    justifyContent:"space-around",
                                }}
                                >
                                <Menu theme="light" mode="vertical" defaultSelectedKeys={['1']} items={itemInfo} onClick={onChangeMenu} >
                                </Menu>
                                <FormInfo/>
                                </div>
                            </Content>
                        </Layout>
                    </Layout>
                } >
                </Route>
                <Route path="/home/change-pass" element={
                    <Layout hasSider>
                        <Sider
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                            top: 0,
                            bottom: 0,
                        }}
                        >
                            <div className="logo" />
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} onClick={onChangeMenu} >
                            </Menu>
                        </Sider>
                        <Layout
                        className="site-layout"
                        style={{
                            marginLeft: 200,
                        }}
                        >
                            <Header
                                className="site-layout-background"
                                style={{
                                padding: 0,
                                }}
                            >
                                <div className="logout" >
                                    <p>Thông tin</p>
                                    <Dropdown overlay={list} trigger={['click']}>
                                        <a onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            
                                            <Avatar size={34} icon={<UserOutlined />} />
                                            {user?.[0]?.email}
                                            <DownOutlined />
                                        </Space>
                                        </a>
                                    </Dropdown>
                                </div>
                            </Header>
                            <Content
                                style={{
                                margin: '24px 16px 0',
                                overflow: 'initial',
                                }}
                            >
                                <div
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    textAlign: 'center',
                                    display:"flex",
                                    justifyContent:"space-around",
                                }}
                                >
                                <Menu theme="light" mode="vertical" defaultSelectedKeys={['1']} items={itemInfo} onClick={onChangeMenu} >
                                </Menu>
                                <ChangePass/>  
                                </div>
                            </Content>
                            
                        </Layout>
                    </Layout>
                } >
                </Route>
                <Route path="/home/ket-qua" element={
                    <Layout hasSider>
                        <Sider
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                            top: 0,
                            bottom: 0,
                        }}
                        >
                            <div className="logo" />
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} onClick={onChangeMenu} >
                            </Menu>
                        </Sider>
                        <Layout
                        className="site-layout"
                        style={{
                            marginLeft: 200,
                        }}
                        >
                            <Header
                                className="site-layout-background"
                                style={{
                                padding: 0,
                                }}
                            >
                                <div className="logout" >
                                <p>Thông tin</p>
                                <Dropdown overlay={list} trigger={['click']}>
                                    <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        <Avatar size={34} icon={<UserOutlined />} />
                                        {user?.[0]?.email}
                                        <DownOutlined />
                                    </Space>
                                    </a>
                                </Dropdown>
                                </div>
                            </Header>
                            <Content
                                style={{
                                margin: '24px 16px 0',
                                overflow: 'initial',
                                }}
                            >
                                <div
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    textAlign: 'center',
                                }}
                                >
                                <ListMonth/>  
                                </div>
                            </Content>
                            
                        </Layout>
                    </Layout>
                } >
                </Route>
                <Route path="/home/danh-gia-ban-than" element={
                    <Layout hasSider>
                        <Sider
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                            top: 0,
                            bottom: 0,
                        }}
                        >
                            <div className="logo" />
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} onClick={onChangeMenu} >
                            </Menu>
                        </Sider>
                        <Layout
                        className="site-layout"
                        style={{
                            marginLeft: 200,
                        }}
                        >
                            <Header
                                className="site-layout-background"
                                style={{
                                padding: 0,
                                }}
                            >
                                <div className="logout" >
                                <p>Thông tin</p>
                                <Dropdown overlay={list} trigger={['click']}>
                                    <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        
                                        <Avatar size={34} icon={<UserOutlined />} />
                                        {user?.[0]?.email}
                                        <DownOutlined />
                                    </Space>
                                    </a>
                                </Dropdown>
                                </div>
                            </Header>
                            <Content
                                style={{
                                margin: '24px 16px 0',
                                overflow: 'initial',
                                }}
                            >
                                <div
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    textAlign: 'center',
                                }}
                                >
                                <SelfAppraisal/>  
                                </div>
                            </Content>
                            
                        </Layout>
                    </Layout>
                } >
                </Route>
                <Route path="/home/quan-ly" element={
                    <Layout hasSider>
                        <Sider
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                            top: 0,
                            bottom: 0,
                        }}
                        >
                            <div className="logo" />
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} onClick={onChangeMenu} >
                            </Menu>
                        </Sider>
                        <Layout
                        className="site-layout"
                        style={{
                            marginLeft: 200,
                        }}
                        >
                            <Header
                                className="site-layout-background"
                                style={{
                                padding: 0,
                                }}
                            >
                                <div className="logout" >
                                <p>Thông tin</p>
                                <Dropdown overlay={list} trigger={['click']}>
                                    <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        
                                        <Avatar size={34} icon={<UserOutlined />} />
                                        {user?.[0]?.email}
                                        <DownOutlined />
                                    </Space>
                                    </a>
                                </Dropdown>
                                </div>
                            </Header>
                            <Content
                                style={{
                                margin: '24px 16px 0',
                                overflow: 'initial',
                                }}
                            >
                                <div
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    textAlign: 'center',
                                }}
                                >
                                <Evaluate/>  
                                </div>
                            </Content>
                            
                        </Layout>
                    </Layout>
                } >
                </Route>
                <Route path="/admin/user" element={
                    <Layout hasSider>
                        <Sider
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                            top: 0,
                            bottom: 0,
                        }}
                        >
                            <div className="logo" />
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={itemsAdmin} onClick={onChangeMenu} >
                            </Menu>
                        </Sider>
                        <Layout
                        className="site-layout"
                        style={{
                            marginLeft: 200,
                        }}
                        >
                            <Header
                                className="site-layout-background"
                                style={{
                                padding: 0,
                                }}
                            >
                                <div className="logout" >
                                <p>Thông tin</p>
                                <Dropdown overlay={list} trigger={['click']}>
                                    <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        <Avatar size={34} icon={<UserOutlined />} />
                                        {user?.[0]?.email}
                                        <DownOutlined />
                                    </Space>
                                    </a>
                                </Dropdown>
                                </div>
                            </Header>
                            <Content
                                style={{
                                margin: '24px 16px 0',
                                overflow: 'initial',
                                }}
                            >
                                <div
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    textAlign: 'center',
                                }}
                                >
                                <AdminUser/>  
                                </div>
                            </Content>
                            
                        </Layout>
                    </Layout>
                } >
                </Route>
                <Route path="/admin/baocao" element={
                    <Layout hasSider>
                        <Sider
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                            top: 0,
                            bottom: 0,
                        }}
                        >
                            <div className="logo" />
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={itemsAdmin} onClick={onChangeMenu} >
                            </Menu>
                        </Sider>
                        <Layout
                        className="site-layout"
                        style={{
                            marginLeft: 200,
                        }}
                        >
                            <Header
                                className="site-layout-background"
                                style={{
                                padding: 0,
                                }}
                            >
                                <div className="logout" >
                                <p>Thông tin</p>
                                <Dropdown overlay={list} trigger={['click']}>
                                    <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        
                                        <Avatar size={34} icon={<UserOutlined />} />
                                        {user?.[0]?.email}
                                        <DownOutlined />
                                    </Space>
                                    </a>
                                </Dropdown>
                                </div>
                            </Header>
                            <Content
                                style={{
                                margin: '24px 16px 0',
                                overflow: 'initial',
                                }}
                            >
                                <div
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    textAlign: 'center',
                                }}
                                >
                                <AdminBC />  
                                </div>
                            </Content>
                            
                        </Layout>
                    </Layout>
                } >
                </Route>
                <Route path="/admin/baocao/chitiet" element={
                    <Layout hasSider>
                        <Sider
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                            top: 0,
                            bottom: 0,
                        }}
                        >
                            <div className="logo" />
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={itemsAdmin} onClick={onChangeMenu} >
                            </Menu>
                        </Sider>
                        <Layout
                        className="site-layout"
                        style={{
                            marginLeft: 200,
                        }}
                        >
                            <Header
                                className="site-layout-background"
                                style={{
                                padding: 0,
                                }}
                            >
                                <div className="logout" >
                                <p>Thông tin</p>
                                <Dropdown overlay={list} trigger={['click']}>
                                    <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        
                                        <Avatar size={34} icon={<UserOutlined />} />
                                        {user?.[0]?.email}
                                        <DownOutlined />
                                    </Space>
                                    </a>
                                </Dropdown>
                                </div>
                            </Header>
                            <Content
                                style={{
                                margin: '24px 16px 0',
                                overflow: 'initial',
                                }}
                            >
                                <div
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    textAlign: 'center',
                                }}
                                >
                                <AdminBCCT />  
                                </div>
                            </Content>
                            
                        </Layout>
                    </Layout>
                } >
                </Route>
                <Route path="/admin/xephang" element={
                    <Layout hasSider>
                        <Sider
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                            top: 0,
                            bottom: 0,
                        }}
                        >
                            <div className="logo" />
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={itemsAdmin} onClick={onChangeMenu} >
                            </Menu>
                        </Sider>
                        <Layout
                        className="site-layout"
                        style={{
                            marginLeft: 200,
                        }}
                        >
                            <Header
                                className="site-layout-background"
                                style={{
                                padding: 0,
                                }}
                            >
                                <div className="logout" >
                                <p>Thông tin</p>
                                <Dropdown overlay={list} trigger={['click']}>
                                    <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        
                                        <Avatar size={34} icon={<UserOutlined />} />
                                        {user?.[0]?.email}
                                        <DownOutlined />
                                    </Space>
                                    </a>
                                </Dropdown>
                                </div>
                            </Header>
                            <Content
                                style={{
                                margin: '24px 16px 0',
                                overflow: 'initial',
                                }}
                            >
                                <div
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    textAlign: 'center',
                                }}
                                >
                                <AdminXH/>  
                                </div>
                            </Content>
                            
                        </Layout>
                    </Layout>
                } >
                </Route>
                <Route path="/admin/EditConfig" element={
                    <Layout hasSider>
                        <Sider
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                            top: 0,
                            bottom: 0,
                        }}
                        >
                            <div className="logo" />
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={itemsAdmin} onClick={onChangeMenu} >
                            </Menu>
                        </Sider>
                        <Layout
                        className="site-layout"
                        style={{
                            marginLeft: 200,
                        }}
                        >
                            <Header
                                className="site-layout-background"
                                style={{
                                padding: 0,
                                }}
                            >
                                <div className="logout" >
                                <p>Thông tin</p>
                                <Dropdown overlay={list} trigger={['click']}>
                                    <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        
                                        <Avatar size={34} icon={<UserOutlined />} />
                                        {user?.[0]?.email}
                                        <DownOutlined />
                                    </Space>
                                    </a>
                                </Dropdown>
                                </div>
                            </Header>
                            <Content
                                style={{
                                margin: '24px 16px 0',
                                overflow: 'initial',
                                }}
                            >
                                <div
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    textAlign: 'center',
                                }}
                                >
                                <AdminConfig/>  
                                </div>
                            </Content>
                            
                        </Layout>
                    </Layout>
                } >
                </Route>
                <Route path="/admin/EditGroup" element={
                    <Layout hasSider>
                        <Sider
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                            top: 0,
                            bottom: 0,
                        }}
                        >
                            <div className="logo" />
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={itemsAdmin} onClick={onChangeMenu} >
                            </Menu>
                        </Sider>
                        <Layout
                        className="site-layout"
                        style={{
                            marginLeft: 200,
                        }}
                        >
                            <Header
                                className="site-layout-background"
                                style={{
                                padding: 0,
                                }}
                            >
                                <div className="logout" >
                                <p>Thông tin</p>
                                <Dropdown overlay={list} trigger={['click']}>
                                    <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        
                                        <Avatar size={34} icon={<UserOutlined />} />
                                        {user?.[0]?.email}
                                        <DownOutlined />
                                    </Space>
                                    </a>
                                </Dropdown>
                                </div>
                            </Header>
                            <Content
                                style={{
                                margin: '24px 16px 0',
                                overflow: 'initial',
                                }}
                            >
                                <div
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    textAlign: 'center',
                                }}
                                >
                                <AdminGroup/>  
                                </div>
                            </Content>
                            
                        </Layout>
                    </Layout>
                } >
                </Route>
                <Route path="/admin/change" element={
                    <Layout hasSider>
                        <Sider
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                            top: 0,
                            bottom: 0,
                        }}
                        >
                            <div className="logo" />
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={itemsAdmin} onClick={onChangeMenu} >
                            </Menu>
                        </Sider>
                        <Layout
                        className="site-layout"
                        style={{
                            marginLeft: 200,
                        }}
                        >
                            <Header
                                className="site-layout-background"
                                style={{
                                padding: 0,
                                }}
                            >
                                <div className="logout" >
                                <p>Thông tin</p>
                                <Dropdown overlay={list} trigger={['click']}>
                                    <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        
                                        <Avatar size={34} icon={<UserOutlined />} />
                                        {user?.[0]?.email}
                                        <DownOutlined />
                                    </Space>
                                    </a>
                                </Dropdown>
                                </div>
                            </Header>
                            <Content
                                style={{
                                margin: '24px 16px 0',
                                overflow: 'initial',
                                }}
                            >
                                <div
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    textAlign: 'center',
                                }}
                                >
                                <Change/>  
                                </div>
                            </Content>
                            
                        </Layout>
                    </Layout>
                } >
                </Route>
                <Route path="/admin/user/add" element={
                    <Layout hasSider>
                        <Sider
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                            top: 0,
                            bottom: 0,
                        }}
                        >
                            <div className="logo" />
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={itemsAdmin} onClick={onChangeMenu} >
                            </Menu>
                        </Sider>
                        <Layout
                        className="site-layout"
                        style={{
                            marginLeft: 200,
                        }}
                        >
                            <Header
                                className="site-layout-background"
                                style={{
                                padding: 0,
                                }}
                            >
                                <div className="logout" >
                                <p>Thông tin</p>
                                <Dropdown overlay={list} trigger={['click']}>
                                    <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        
                                        <Avatar size={34} icon={<UserOutlined />} />
                                        {user?.[0]?.email}
                                        <DownOutlined />
                                    </Space>
                                    </a>
                                </Dropdown>
                                </div>
                            </Header>
                            <Content
                                style={{
                                margin: '24px 16px 0',
                                overflow: 'initial',
                                }}
                            >
                                <div
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    textAlign: 'center',
                                }}
                                >
                                <AdminUserAdd/>  
                                </div>
                            </Content>
                            
                        </Layout>
                    </Layout>
                } >
                </Route>
                <Route path="/admin/EditConfig/add" element={
                    <Layout hasSider>
                        <Sider
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                            top: 0,
                            bottom: 0,
                        }}
                        >
                            <div className="logo" />
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={itemsAdmin} onClick={onChangeMenu} >
                            </Menu>
                        </Sider>
                        <Layout
                        className="site-layout"
                        style={{
                            marginLeft: 200,
                        }}
                        >
                            <Header
                                className="site-layout-background"
                                style={{
                                padding: 0,
                                }}
                            >
                                <div className="logout" >
                                <p>Thông tin</p>
                                <Dropdown overlay={list} trigger={['click']}>
                                    <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        
                                        <Avatar size={34} icon={<UserOutlined />} />
                                        {user?.[0]?.email}
                                        <DownOutlined />
                                    </Space>
                                    </a>
                                </Dropdown>
                                </div>
                            </Header>
                            <Content
                                style={{
                                margin: '24px 16px 0',
                                overflow: 'initial',
                                }}
                            >
                                <div
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    textAlign: 'center',
                                }}
                                >
                                <AdminConfigAdd/>  
                                </div>
                            </Content>
                            
                        </Layout>
                    </Layout>
                } >
                </Route>
                <Route path="/admin/EditConfig/edit" element={
                    <Layout hasSider>
                        <Sider
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                            top: 0,
                            bottom: 0,
                        }}
                        >
                            <div className="logo" />
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={itemsAdmin} onClick={onChangeMenu} >
                            </Menu>
                        </Sider>
                        <Layout
                        className="site-layout"
                        style={{
                            marginLeft: 200,
                        }}
                        >
                            <Header
                                className="site-layout-background"
                                style={{
                                padding: 0,
                                }}
                            >
                                <div className="logout" >
                                <p>Thông tin</p>
                                <Dropdown overlay={list} trigger={['click']}>
                                    <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        
                                        <Avatar size={34} icon={<UserOutlined />} />
                                        {user?.[0]?.email}
                                        <DownOutlined />
                                    </Space>
                                    </a>
                                </Dropdown>
                                </div>
                            </Header>
                            <Content
                                style={{
                                margin: '24px 16px 0',
                                overflow: 'initial',
                                }}
                            >
                                <div
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    textAlign: 'center',
                                }}
                                >
                                <AdminConfigEdit/>  
                                </div>
                            </Content>
                            
                        </Layout>
                    </Layout>
                } >
                </Route>
                <Route path="/admin/EditGroup/add" element={
                    <Layout hasSider>
                        <Sider
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                            top: 0,
                            bottom: 0,
                        }}
                        >
                            <div className="logo" />
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={itemsAdmin} onClick={onChangeMenu} >
                            </Menu>
                        </Sider>
                        <Layout
                        className="site-layout"
                        style={{
                            marginLeft: 200,
                        }}
                        >
                            <Header
                                className="site-layout-background"
                                style={{
                                padding: 0,
                                }}
                            >
                                <div className="logout" >
                                <p>Thông tin</p>
                                <Dropdown overlay={list} trigger={['click']}>
                                    <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        
                                        <Avatar size={34} icon={<UserOutlined />} />
                                        {user?.[0]?.email}
                                        <DownOutlined />
                                    </Space>
                                    </a>
                                </Dropdown>
                                </div>
                            </Header>
                            <Content
                                style={{
                                margin: '24px 16px 0',
                                overflow: 'initial',
                                }}
                            >
                                <div
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    textAlign: 'center',
                                }}
                                >
                                <AdminGroupAdd/>  
                                </div>
                            </Content>
                            
                        </Layout>
                    </Layout>
                } >
                </Route>
                <Route path="/admin/EditGroup/edit" element={
                    <Layout hasSider>
                        <Sider
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                            top: 0,
                            bottom: 0,
                        }}
                        >
                            <div className="logo" />
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={itemsAdmin} onClick={onChangeMenu} >
                            </Menu>
                        </Sider>
                        <Layout
                        className="site-layout"
                        style={{
                            marginLeft: 200,
                        }}
                        >
                            <Header
                                className="site-layout-background"
                                style={{
                                padding: 0,
                                }}
                            >
                                <div className="logout" >
                                <p>Thông tin</p>
                                <Dropdown overlay={list} trigger={['click']}>
                                    <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        
                                        <Avatar size={34} icon={<UserOutlined />} />
                                        {user?.[0]?.email}
                                        <DownOutlined />
                                    </Space>
                                    </a>
                                </Dropdown>
                                </div>
                            </Header>
                            <Content
                                style={{
                                margin: '24px 16px 0',
                                overflow: 'initial',
                                }}
                            >
                                <div
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    textAlign: 'center',
                                }}
                                >
                                <AdminGroupEdit/>  
                                </div>
                            </Content>
                            
                        </Layout>
                    </Layout>
                } >
                </Route>
            </Routes>
        </div>
    );
    
}

export default App;
