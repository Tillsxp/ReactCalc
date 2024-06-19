import './calculator.css';

const Calculator = () => {

    {
        /* Function to print all buttons? Maybe a loop */

    }
    const numberButtons = [];

    for (let i = 0; i < 12; i++) {
        numberButtons.push(<button key={i}>{i}</button>);
    }
    return (
        <>
            <div>
                <p>Math</p>
                <div>
                    <input type="number" /> {/* Display Result */}
                    <button>+</button>
                    <button>-</button>
                    <button>=</button>
                    <button>.</button>
                    {numberButtons}
                </div>
            </div>
        </>)
}

export default Calculator;