import React,{Component}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
// import 'antd/lib/index.css'; 
import 'antd/dist/antd.css'
import $ from "jquery"
import axios from 'axios'
import qs from 'qs'
Component.prototype.axios=axios
Component.prototype.qs=qs;
Component.prototype.$=$;

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
