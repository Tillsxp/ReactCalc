import './calculator.css';
import { useState } from 'react';

const Calculator = () => {

    const numberButtons = [];
    const [number, setNumber] = useState("");
    const handleClick = (e) => {
        const value = e.target.value;

        return value == "C" ? setNumber("")
            : value == "CE" ? setNumber(prevNumber => prevNumber.slice(0, 0 - 1))
                : setNumber(prevNumber => prevNumber + value); {}
        const numberValue = parseInt(number, 10);
        number = numberValue;
        console.log(number);
    };
    for (let i = 0; i < 10; i++) {
        numberButtons.push(<button key={i} onClick={handleClick} value={i}>{i}</button>);
    }

    const handleMatch = (e) => {
        {/* Count Math if = is pressed*/ }
    }
    return (
        <>
            <div className="math-container">
                <p className="rainbow">Happy counting! (•‿•) </p>
                <input type="string" value={number} readOnly /> {/* Display Result */}
                <div className="number-container">
                    <button onClick={handleClick} value={"+"}>+</button>
                    <button onClick={handleClick} value={"-"}>-</button>
                    <button onClick={handleClick} >=</button> {/* Don't print = only show */ }
                    <button onClick={handleClick} value={"."}>.</button>
                    <button onClick={handleClick} value={"C"}>CE</button>
                    <button onClick={handleClick} value={"CE"}>C</button>
                    {numberButtons}
                </div>
            </div>
        </>)
}

export default Calculator;