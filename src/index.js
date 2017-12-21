console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';

document.addEventListener('DOMContentLoaded', function () {
    const rows = prompt("Please enter the number of rows you want the checkerboard to be:");
    ReactDOM.render(
        React.createElement(Board, {rows: rows}),
        document.getElementById('mount')
    );
});