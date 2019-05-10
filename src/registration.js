import React, { Component } from 'react';
import './App.css';

import 'antd/dist/antd.css';
import { Button } from 'antd';
import { Input } from 'antd';
import {
    Form, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, AutoComplete,
  } from 'antd';
  
class Registration extends Component 
{
    constructor(props) {
        super(props);
        this.state = {
     
            mail:"",
            password:""
           
          };
this.change = this.change.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
  }
  change(event)
  {
this.setState ={
      mail : this.event.target.mail,
      password:this.event.target.password
}
  }


handleSubmit(event)
{
alert("Registration Completed", event.target.mail);
}

 formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
   tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
    render() {
       
      var sty = {
          "margin-left":"300px",
          "margin-top" : "50px"
      }
      var styl={
      "width": "600px",
      "margin-left": "250px",
      "margin-top": "50px"
      }
      var but = {
        "margin-left": "600px"
      }
      const { getFieldDecorator } = this.props.form;
        return (
          <div >
          <Form style= {styl} {...this.formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item
          label="E-mail"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item
          label="Password"
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'Please input your password!',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
            <Input type="password" />
          )}
        </Form.Item>
       
        </Form>
        <Button style = {but} type ="Primary">Submit</Button>
          </div>
        )
      }
  }


  const WrappedRegistrationForm = Form.create({ name: 'register' })(Registration);
export default WrappedRegistrationForm;
