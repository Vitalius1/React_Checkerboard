import React from 'react';
import Cell from './Cell';

function Row (props) {
    var number = parseInt(props.cells);
    var CellStyle = props.styles.cell
    
    
    const row = Array(number).fill().map((_, idx) => {
        return (<Cell key={idx} style={CellStyle}/>)
    })
    console.log(row);
    
    return (
        <div>{row}</div>
    );
}

export default Row;