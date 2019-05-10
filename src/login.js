import React, { Component } from 'react';
import './App.css';

import 'antd/dist/antd.css';
import {
    Form, Icon, Input, Button, Checkbox,
  } from 'antd';
  

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
userName: '',
password:''

          };
this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event)
  {
      this.setState  = {
userName : this.event.target.userName,
password : this.event.target.password
      }

  }



    render() {
      var sty ={
       "margin-top": "50px",
    width:"300px",
    "margin-left": "450px"
      }
      var but = {
        width: "295px"
      }
      var alig = {
        "margin-left": "60px"
      }
        const { getFieldDecorator } = this.props.form;
        return (
           
          <div style = {sty}>
         <form >
         <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required:true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a style = {alig} className="login-form-forgot" href="">Forgot password</a><br/>
          <Button style = {but} type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button><br/>
          <a href="/registration">register now!</a>
        </Form.Item>
      </Form>
         </form>
          </div>
        )
      }
  }
  const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

export default WrappedNormalLoginForm;