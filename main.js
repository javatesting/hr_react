import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import HR from './HRApp.jsx';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(<Router><HR /></Router>, document.getElementById('app'));