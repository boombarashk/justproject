import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'
import Root from './components/Root'
import reportWebVitals from './reportWebVitals';

const userReducer = (userState = {}, action) => {
    return action.type === 'LOGIN' ? action.payload : userState
}

const store = createStore(userReducer, {})

ReactDOM.render(
  <React.StrictMode>
      <Root store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
