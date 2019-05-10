import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import Childtwo from './calendar' 
import Child from './layout';
import WrappedNormalLoginForm from './login'
import Registration from './registration'
import WrappedRegistrationForm from './addentity';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import counterApp from './actions/combinereducer';

const store = createStore(counterApp);
const routing = (
  <Router>
    <switch>
      <Route exact path="/" component={App} />
      <Route path="/calendar" component={ Childtwo} />
      <Route path="/cal" component={Child } />
      <Route path="/login" component={WrappedNormalLoginForm } />
      <Route path="/registration" component={Registration } />
      <Route path="/entity" component={WrappedRegistrationForm } />
      </switch>
   
  </Router>
)
ReactDOM.render( 
  <Provider store = {store}>
    {routing}
    </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
