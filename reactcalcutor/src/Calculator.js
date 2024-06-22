import './calculator.css';
import { useState } from 'react';

const Calculator = () => {

    const numberButtons = [];
    const [number, setNumber] = useState("");
    const handleClick = (e) => {
        const value = e.target.value;
        if (value == "C") {
            setNumber("");
        } else if (value == "CE") {
            setNumber(prevNumber => prevNumber.slice(0, 0 - 1));
        }else {
        setNumber(prevNumber => prevNumber + value);

        }
    };
    for (let i = 0; i < 10; i++) {
        numberButtons.push(<button key={i} onClick={handleClick} value={i}>{i}</button>);
    }
    return (
        <>
            <div className="math-container">
                <p>Happy counting! (•‿•) </p>
                <input type="string" value={number} readOnly /> {/* Display Result */}
                <div className="number-container">
                    <button onClick={handleClick} value={"+"}>+</button>
                    <button onClick={handleClick} value={"-"}>-</button>
                    <button onClick={handleClick} value={"="}>=</button>
                    <button onClick={handleClick} value={"."}>.</button>
                    <button onClick={handleClick} value={"C"}>CE</button>
                    <button onClick={handleClick} value={"CE"}>C</button>
                    {numberButtons}
                </div>
            </div>
        </>)
}

export default Calculator;