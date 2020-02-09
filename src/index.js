import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import '@babel/polyfill';
import App from "./App/App.js";

const mountNode = document.getElementById('app');

ReactDOM.render(<App/>, mountNode);
// ReactDOM.render(<h1>Привет, мир!</h1>, mountNode);

