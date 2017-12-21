import React from 'react';
import EvenRow from './EvenRow';
import OddRow from './OddRow';

function Board (props) {
    
    const width = parseInt(prompt("Please enter the number of rows you want the checkerboard to be:"));
    
    var styles = {
        row: { height: '20px' },
        cellA: { height: '20px', width: '20px', display: 'inline-block', backgroundColor: 'black' },
        cellB: { height: '20px', width: '20px', display: 'inline-block', backgroundColor: 'red' },
    }

    const board = Array(width).fill().map((_, idx) => {
        return (idx % 2 === 0 ? <OddRow key={idx} width={width} cellStyles={styles}/> : <EvenRow key={idx} width={width} cellStyles={styles}/>);
    })
    
    return (
        <div>{board}</div>
    );
}

export default Board;