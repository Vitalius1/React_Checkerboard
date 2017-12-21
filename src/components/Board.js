import React from 'react';
import Row from './Row';

function Board (props) {
    return (
        <Row cells={props.rows}/>
    );
}

export default Board;