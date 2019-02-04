import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const { ymaps } = window;

ReactDOM.render(<App ymaps={ymaps} />, document.getElementById('root'));
