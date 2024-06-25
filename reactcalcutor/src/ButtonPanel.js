import React from 'react';

const ButtonPanel = ({ handleClick, handleMath }) => {
    const numberButtons = [];
    for (let i = 0; i < 10; i++) {
        numberButtons.push(
            <button key={i} onClick={handleClick} value={i}>{i}</button>
        );
    }

    return (
        <div className="number-container">
            <button onClick={handleClick} value={"CE"}>C</button>
            <button onClick={handleClick} value={"C"}>CE</button>
            <button onClick={handleMath} >=</button>
            <button onClick={handleClick} value={"+"}>+</button>
            <button onClick={handleClick} value={"-"}>-</button>
            <button onClick={handleClick} value={"/"}>/</button>
            <button onClick={handleClick} value={"*"}>*</button>
            <button onClick={handleClick} value={"."}>.</button>
            {numberButtons}
        </div>
    )
}

export default ButtonPanel;