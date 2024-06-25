import './App.css';
import Calculator from './Calculator';
import Display from './Display';

function App() {
    return (
        <>
            <div className="main-container">
                <div className="math-container">
                <Display />
                <Calculator />
                </div>
            </div>
        </>
    );
}

export default App;
