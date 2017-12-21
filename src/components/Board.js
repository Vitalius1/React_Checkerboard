import React from 'react';
import Row from './Row';

function Board (props) {
    
    const rows = prompt("Please enter the number of rows you want the checkerboard to be:");
    
    var styles = {
        row: { height: '20px' },
        cell: { height: '20px', width: '20px', display: 'inline-block', border: '1px solid black' },
        colorA: { backgroundColor: 'black' },
        colorB: { backgroundColor: 'red' }
    }
    
    return (
        <Row cells={rows} styles={styles}/>
    );
}

export default Board;