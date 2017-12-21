import React from 'react';

/**
 * A counter button: tap the button to increase the count.
 */
class Board extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <h1>{this.props.rows}</h1>
        );
    }
}
export default Board;