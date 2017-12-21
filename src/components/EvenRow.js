import React from 'react';
import Cell from './Cell';

function EvenRow (props) {
    
    var number = parseInt(props.width);
    var cellStyle = props.cellStyles
    
    const row = Array(number).fill().map((_, idx) => {
        return (idx % 2 === 0 ? <Cell key={idx} style={cellStyle.cellB}/> : <Cell key={idx} style={cellStyle.cellA}/>);
    })
    
    return (
        <div>{row}</div>
    );
}

export default EvenRow;