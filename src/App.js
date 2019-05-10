import React, { Component } from 'react';
import './App.css';

import 'antd/dist/antd.css';
import Child from './layout';



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
 image: './image1.png',
 default : './default.png'
           
          };

  }
  

componentDidMount()
{
  this.interval = setInterval(() => this.setState({ time: Date('dateString') }), 1000);
  console.log("this is componentDidMount");
  
}

 componentDidUpdate()
 {
  console.log("this is componentDidUpdate");
 }



    render() {
      

        return (
          <div >
         <Child />
          </div>
        )
      }
  }


export default App;