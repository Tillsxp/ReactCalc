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
            <div className="math-container">
                <p>Happy counting! (•‿•) </p>
                    <input type="string" /> {/* Display Result */}
                <div className="number-container">
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