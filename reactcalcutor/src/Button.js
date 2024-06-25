import React from 'react';

const Button = ({ onClick, value }) => {
    return (
        <button onClick={onClick} value={value}>{value}</button>
    );

}

export default Button;