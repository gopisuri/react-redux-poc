import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { removeCounter } from './actions/action';
import { bindActionCreators } from 'redux';





class RemoveCounter extends Component {

    constructor(props) {
        super(props);
     

  }
  




    render() {
      

        return (
          <div >
    <button className="button is-primary" 
                    onClick={(e) => { e.preventDefault();
                    this.props.dispatch(removeCounter())}}>
             Remove
                  </button>

          </div>
        )
      }
  }

  function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(removeCounter, dispatch) }
  }
  export default connect(mapDispatchToProps)(RemoveCounter);
