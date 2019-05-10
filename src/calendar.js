import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import moment from 'moment';
import { DatePicker } from 'antd';
import deafult from './default.png'
import image1  from './image1.png'
import { Select, Button ,Input } from 'antd';
import  Entity from './addentity';
const { MonthPicker, RangePicker } = DatePicker;
class Childtwo extends Component {

    constructor(props) {
        super(props);
        this.state = {
         image : image1,
          time : Date('dateString') 
          };

  }
  
componentDidMount()
{
  this.interval = setInterval(() => this.setState({ time: Date('dateString') }), 1000);
  console.log("this is componentDidMount");
  
}


  onchange = ((value) => {
    console.log(`selected ${value}`)
  })  
  
  
 onsearch = ((val)=>{
    console.log("search:", val);
  })
  

    render() {
     const Option = Select.Option;
 var sty = {
  "max-width": "200px",
  "margin-top": "20px"
 }
 var alig = {
   "margin-left" : "140px"
 }
 var img = {
  "width":"150px",
  "margin-left" : "550px"
 }
       const {time} = this.state
       
        return (
         
          <div>
            <p> {this.state.time}</p>
            <Entity time = {this.state.time}/>
            <div style = {img}>
 <img style = {sty} src={this.state.image} onError={(e)=>{e.target.onerror = null; e.target.src='{default}'}}/>  
 </div>
     <div style = {alig}>
       <h3 >Register Your Appointment</h3>
<form>
<Input  style={{ width: 240 }} placeholder="Enter Patient Name" /> &nbsp;
&nbsp;
<Select
    showSearch
    style={{ width: 240 }}
    placeholder="Select Departement"
    optionFilterProp="children"
    onChange={onchange}
     onSearch={onsearch}
    filterOption={(input, option) =>
      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="Urology">Urology</Option>
    <Option value="Cardiology">Cardiology</Option>
  </Select>

&nbsp;
&nbsp;

<Select
    showSearch
    style={{ width: 240 }}
    placeholder="Select Doctor"
    optionFilterProp="children"
    onChange={onchange}
    onSearch={onsearch}
    filterOption={(input, option) =>
      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="Urology">Mike Franks</Option>
    <Option value="Cardiology">Steve Chung</Option>
  </Select>
  &nbsp;
&nbsp;
   <DatePicker   style={{ width: 240 , "margin-bottom": 20 }}
      format="YYYY-MM-DD HH:mm:ss"
     
      showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
    />
     <Button  style={{ "margin-left": 380 , width : 250}}type="primary">Submit</Button>
  </form>
    </div>
{/*


<img src="/assets/images/image1.png"
        onError="this.onError=null; this.src='/assets/images/default.png';" />
<img src="/assets/images/image1.png" onError="/assets/images/default.png';" alt="Missing Image" />
  <img src= {this.state.image} onError  = {() =>{this.onerror=null;
          this.src ="./default.png" }}/>*/}
          </div>
            
         

            
        )
      }
  }


export default Childtwo;