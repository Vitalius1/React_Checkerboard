import React from 'react';
import Cell from './Cell';

function Row (props) {
    var number = props.cells
    var style = props.styles.cell
    
    return (
        <Cell number={number} styl={style}/>
    );
}

export default Row;