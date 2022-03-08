import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './views/Home';
import Login from './views/Login'
import Signup from './views/Signup';




ReactDOM.render(
  <React.StrictMode>
    <Signup/>
  </React.StrictMode>,
  document.getElementById('root')
);