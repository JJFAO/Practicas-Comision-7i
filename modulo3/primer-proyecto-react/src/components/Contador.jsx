import { useState } from 'react';

export default function Contador() {
    const [counter, setCounter] = useState(0);

    const addCounter = () => {
        setCounter(counter + 10);
    };
    const extractCounter = () => {
        setCounter(counter - 10);
    };
    const reset = () => {
        setCounter(0);
    };
    return (
        <div>
            <h1>Contador: {counter}</h1>
            <button className="btn btn-primary" onClick={addCounter}>
                +
            </button>
            <button className="btn btn-primary" onClick={extractCounter}>
                -
            </button>
            <button className="btn btn-danger" onClick={reset}>
                reset
            </button>
        </div>
    );
}
