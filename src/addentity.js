import React, { Component } from 'react';
import './App.css';
import AddCounter from './addCounter';
import 'antd/dist/antd.css';
import RemoveCounter from './remove';
import Counter from './counter';
import {Select} from 'antd';
import {
    Form, Input, Button, Checkbox,
  } from 'antd';
import { isThisExpression } from '@babel/types';

  
  function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }
  
class Entity extends Component {

    constructor(props) {
        super(props);
       this.state = {
          apiresponse:[],
          timer : this.props.time
            };
            this.getData = this.getData.bind(this);
  }
  
getData()
{
  fetch("http://localhost:5000/testAPI")
  .then(function(response) {
 
    return response.json();
   
  }).then((data)=>{
    console.log("data",data.res);
    this.setState({
apiresponse : data.res
    })
    
  })
}
 
obj =  (() => {
 

})
static  getDerivedStateFromProps(nextProps, prevState)
{
  const targetobj = Object.assign(prevState,nextProps);
  console.log( "targetobj", targetobj);
  console.log("hi getDerivedStateFromProps");
  return targetobj;
  
}
  
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
    this.getData();
    console.log('apiResponse',this.state.apiResponse);
   
  }

   onchange(value) {
    console.log(`selected ${value}`);
  }
  
 
  

 onsearch(val) {
    console.log('search:', val);
  }


    render() {
       const { TextArea } = Input;
       
       const FormItem = Form.Item;
       const Option = Select.Option;
       const {
        getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
      } = this.props.form;

       var sty = {
        width: "400px",
        "margin-left": "380px",
        "margin-top": "20px"
       }
    // Only show error after a field is touched.
       const entitynameError = isFieldTouched('entityname') && getFieldError('entityname');
       const streetaddressError = isFieldTouched('streetaddress') && getFieldError('streetaddress');
       const stateError = isFieldTouched('state') && getFieldError('state');
       const zipError = isFieldTouched('zip') && getFieldError('zip');
       const contactError = isFieldTouched('contact') && getFieldError('contact');
       const firstnameError = isFieldTouched('firstname') && getFieldError('firstname');
       const lastnameError = isFieldTouched('lastname') && getFieldError('lastname');
       const emailError = isFieldTouched('email') && getFieldError('email');
       const passwordError = isFieldTouched('password') && getFieldError('password');
       const contactdataError = isFieldTouched('contactdata') && getFieldError('contactdata');
       const TokenbalanceError = isFieldTouched('Tokenbalance') && getFieldError('Tokenbalance');
        return (
          <div>
         <p>{this.state.timer}</p>
        <Form style = {sty} onSubmit={this.handleSubmit} className="entity-form">
        <Form.Item  validateStatus={entitynameError ? 'error' : ''}
          help={entitynameError || ''}>
          {getFieldDecorator('entityname', {
            rules: [{ required: true, message: 'Please Enter Entity Name!' }],
          })(
            <Input type="text" placeholder="Enter Entity Name" />
          )}
        </Form.Item>


        <Form.Item  validateStatus={streetaddressError ? 'error' : ''}
          help={streetaddressError || ''}>
          {getFieldDecorator('streetaddress', {
            rules: [{ required: true, message: 'Please Enter Street Address!' }],
          })(
            <TextArea  placeholder="Enter Street Address" autosize={{ minRows: 2, maxRows: 4 }} />
          )}
        </Form.Item>


       

       <Form.Item  validateStatus={stateError ? 'error' : ''}
          help={stateError || ''}>
          {getFieldDecorator('state', {
            rules: [
              { required: true, message: 'Please select your State!' },
            ],
          })(
            <Select placeholder="Please select State">
              <Option value="Alasks">{this.state.apiresponse[0]}</Option>
              <Option value="Newyork">{this.state.apiresponse[1]}</Option>
            </Select>
          )}
        </Form.Item>

        <Form.Item  validateStatus={zipError ? 'error' : ''}
          help={zipError || ''}>
          {getFieldDecorator('zip', {
            rules: [{ required: true, message: 'Please Enter Zip!' }],
          })(
            <Input type="text" placeholder="Zip" />
          )}
        </Form.Item>

        <Form.Item  validateStatus={contactError ? 'error' : ''}
          help={contactError || ''}>
          {getFieldDecorator('contact', {
            rules: [{ required: true, message: 'Please Enter Contact Number!' }],
          })(
            <Input type="text" placeholder="Contact" />
          )}
        </Form.Item>
  
        <span> Entity Master Admin </span>

        <Form.Item  validateStatus={firstnameError ? 'error' : ''}
          help={firstnameError || ''}>
          {getFieldDecorator('firstname', {
            rules: [{ required: true, message: 'Please Enter your First Name' }],
          })(
            <Input type="text" placeholder="First Name" />
          )}
        </Form.Item>

        <Form.Item  validateStatus={lastnameError ? 'error' : ''}
          help={lastnameError || ''}>
          {getFieldDecorator('lastname', {
            rules: [{ required: true, message: 'Please Enter your Last Name' }],
          })(
            <Input type="text" placeholder="Last Name" />
          )}
        </Form.Item>
 
        

        <Form.Item  validateStatus={emailError ? 'error' : ''}
          help={emailError || ''}>
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input placeholder = "Enter mail" />
          )}
        </Form.Item>
 
        <Form.Item  validateStatus={passwordError ? 'error' : ''}
          help={passwordError || ''}>
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'Please input your password!',
            }],
          })(
            <Input type="password" placeholder = "password"/>
          )}
        </Form.Item>

        <Form.Item  validateStatus={contactdataError ? 'error' : ''}
          help={contactdataError || ''}>
          {getFieldDecorator('contactdata', {
            rules: [{ required: true, message: 'Please Enter your Contact Number' }],
          })(
            <Input type="text" placeholder = "Contact#" />
          )}
        </Form.Item>
        <Form.Item  validateStatus={TokenbalanceError ? 'error' : ''}
          help={TokenbalanceError || ''}>
          {getFieldDecorator('Tokenbalance', {
            rules: [{ required: true, message: 'Please Enter your Token balance' }],
          })(
            <Input type="text" placeholder = "Token Balance" />
          )}
        </Form.Item>
        <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            Submit   
          </Button>
       
  </Form>
  <AddCounter></AddCounter>
  <RemoveCounter/>
  <Counter/>
          </div>
        )
      }
  }
  const WrappedRegistrationForm = Form.create()(Entity);
export default  WrappedRegistrationForm;