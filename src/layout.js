import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {
    Layout, Menu, Breadcrumb, Icon,
  } from 'antd';
  import moment from 'moment';
  import { DatePicker } from 'antd';
import Childtwo from './calendar'
import { Button, notification } from 'antd';
import { Spin } from 'antd';
import { Link, BrowserRouter} from 'react-router-dom'

const key = 'updatable';
const { MonthPicker, RangePicker } = DatePicker;
  
  const {
    Header, Content, Footer, Sider,
  } = Layout;

  const SubMenu = Menu.SubMenu;

  class Child extends Component
{
    
    constructor(props) {
        super(props);
      

  }
  state = {
    collapsed: false,
    isShow : false,
    image :'./image1.png',
    default : './default.png'
  }
      onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
      }
      toggleShow = () => {
        this.setState(state => ({ isShow: !state.isShow }));
        console.log(this.state.isShow);
      };
    
       openNotification = () => {
        notification.open({
          key,
          message: 'Appointment',
          description: 'Schedule Your Appointment time',
        });
        setTimeout(() => {
          notification.open({
            key,
            message: 'Appointment',
            description: 'Please Select Appointment time',
          });
        }, 4000);
      };

render() {
  var sty = {
    "margin-left":"450px",
    "margin-bottom":"80px"
  }
  var aa ={
    "color":"white"
  }
    const isHide = this.state.hide;
 return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="user"  />
              <span><a style = {aa} href = "/login">Login</a></span>
            </Menu.Item>
           
            <SubMenu
              key="sub1"
              title={<span><Icon type="team"/><span>Admin</span></span>}
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Providers</span></span>}
            >
              <Menu.Item key="6">Mike Franks</Menu.Item>
              <Menu.Item key="8">Steve Chung</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="calendar" />
                <span onClick={this.openNotification} ><a style = {aa} href = "/calendar">New Appointment</a></span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item></Breadcrumb.Item>
              <Breadcrumb.Item></Breadcrumb.Item>
            </Breadcrumb>
            <div  style={{ padding: 24, background: '#fff', minHeight: 360 }}>
       
         <Spin tip = "loading" onClick={this.setTimeout} />
            </div>
            
          </Content>
          <Footer style={{ textAlign: 'center' }}>
        
          </Footer>
        </Layout>
      </Layout>
    );
        }
    }
  
  
  export default Child;
