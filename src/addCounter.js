import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { addCounter } from './actions/action';
import { bindActionCreators } from 'redux';





class AddCounter extends Component {

    constructor(props) {
        super(props);
      

  }
  




    render() {
      

        return (
          <div >
    <button className="button is-primary" 
                    onClick={(e) => { e.preventDefault();
                    this.props.dispatch(addCounter())}}>
                      Add
                  </button>

          </div>
        )
      }
  }

  function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(addCounter, dispatch) }
  }
  export default connect(mapDispatchToProps)(AddCounter);
