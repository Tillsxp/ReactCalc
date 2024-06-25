import Display from './Display';
import ButtonPanel from './ButtonPanel';
import { useState } from 'react';

const Calculator = () => {

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
    const handleMath = (e) => {
        const result = eval(`${number}`);
        setNumber(result.toString());
    }

    return (
        <>
            <Display value={number} />
            <ButtonPanel handleClick={handleClick} handleMath={handleMath}/>
        </>)
}

export default Calculator;