import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import loginreducer from './redux/reducer';
import addrenterreducer from './redux/addrenter';
import thunk from 'redux-thunk';
import configureStore from './Store/configureStore'


ReactDOM.render(
  
  <Provider store={configureStore}>
    <App />
    </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
