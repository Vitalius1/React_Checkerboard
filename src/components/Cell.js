import React from 'react';

function Cell (props) {
    return (
        <div>Number: {props.number} //// style: {props.styl.height}</div>
    );
}

export default Cell;