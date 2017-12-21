import React from 'react';
import Cell from './Cell';

function Row (props) {
    
    var number = parseInt(props.width);
    var cellStyle = props.cellStyles
    
    const row = Array(number).fill().map((_, idx) => {
        return (<Cell key={idx} style={cellStyle}/>)
    })
    
    return (
        <div>{row}</div>
    );
}

export default Row;