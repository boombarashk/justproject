import React from 'react';
import ReactDOM from 'react-dom';
import {store} from './store'
import Root from './components/Root'
import './index.css';
import 'bulma/css/bulma.css'

ReactDOM.render(
  <React.StrictMode>
      <Root store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);
