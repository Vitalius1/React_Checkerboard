console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';

document.addEventListener('DOMContentLoaded', function () {
    
    ReactDOM.render(
        React.createElement(Board),
        document.getElementById('mount')
    );
});