import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    const handleAddition = () => {
        setResult(Number(num1) + Number(num2));
    };

    const handleSubtraction = () => {
        setResult(Number(num1) - Number(num2));
    };

    const handleMultiplication = () => {
        setResult(Number(num1) * Number(num2));
    };

    const handleDivision = () => {
        if (num2 === '0') {
            setResult('Cannot divide by zero');
        } else {
            setResult(Number(num1) / Number(num2));
        }
    };

    return (
        <div className="calculator">
            <h1>Calculator</h1>
            <div className="input-container">
                <input
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                    placeholder="Enter first number"
                />
                <input
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                    placeholder="Enter second number"
                />
            </div>
            <div className="button-container">
                <button onClick={handleAddition}>Add</button>
                <button onClick={handleSubtraction}>Sub</button>
                <button onClick={handleMultiplication}>Mul</button>
                <button onClick={handleDivision}>Div</button>
            </div>
            <div className="result-container">
                <h2>Result: {result}</h2>
            </div>
        </div>
    );
};

export default Calculator;
