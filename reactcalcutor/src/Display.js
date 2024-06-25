import React from 'react';

const Display = ({ value }) => {
    return (
        <input type="text" value={value} readOnly />
    );
};

export default Display;
