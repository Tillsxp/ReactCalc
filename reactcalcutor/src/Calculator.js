import './calculator.css';
import { useState } from 'react';

{/* Check first value in console log */ }

const Calculator = () => {

    const numberButtons = [];
    const [number, setNumber] = useState("");
    const handleClick = (e) => {
        const value = e.target.value;

        if (value === "C") {
            setNumber("");
        } else if (value === "CE") {
            setNumber(prevNumber => prevNumber.slice(0, -1));
        }
        else {
            setNumber(prevNumber => prevNumber + value);
        }

    };
    for (let i = 0; i < 10; i++) {
        numberButtons.push(<button key={i} onClick={handleClick} value={i}>{i}</button>);
    }
    const handleMath = (e) => {
        const result = eval(number);
        setNumber(result.toString());
    }

    return (
        <>
            <div className="math-container">
                <p className="rainbow">Happy counting! (•‿•) </p>
                <input type="string" value={number} readOnly /> {/* Display Result */}
                <div className="number-container">
                    <button onClick={handleClick} value={"+"}>+</button>
                    <button onClick={handleClick} value={"-"}>-</button>
                    <button onClick={handleMath} >=</button> {/* Don't print = only show */}
                    <button onClick={handleClick} value={"."}>.</button>
                    <button onClick={handleClick} value={"C"}>CE</button>
                    <button onClick={handleClick} value={"CE"}>C</button>
                    {numberButtons}
                </div>
            </div>
        </>)
}

export default Calculator;