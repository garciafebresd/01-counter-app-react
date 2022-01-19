import React from 'react';
import ReactDOM from 'react-dom';
// import FirstApp from './FirstApp';
import CounterApp from './CounterApp';
import './index.css';

const divRoot = document.querySelector('#root');

// ReactDOM.render(<FirstApp sayHello="Hola soy vegeta" other="123" />, divRoot);
ReactDOM.render(<CounterApp value={10} />, divRoot);

