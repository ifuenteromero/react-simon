import React from 'react';

import './styles.css';

const Button = props => {
    const { handleClick, color,id } = props
    return (
        <div
            className={`square-ext ${color}`}
            onClick= {handleClick}
            id={id}
        >
        </div>
    );

}

export default Button;