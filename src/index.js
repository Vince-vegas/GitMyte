import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import '@fortawesome/fontawesome-free/css/all.css';
import { BrowserRouter as Router } from 'react-router-dom';
require('dotenv').config();

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
