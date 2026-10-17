
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    // Add 1
    function handleAdd() {
        setCount(count + 1);
    }

    // Subtract 1 without going below 0
    function handleSubtract() {
        setCount(Math.max(0, count - 1));
    }

    // Reset to 0
    function handleReset() {
        setCount(0);
    }

    // Add 5
    function handleAddFive() {
        setCount(count + 5);
    }

    // Subtract 5 without going below 0
    function handleSubtractFive() {
        setCount(Math.max(0, count - 5));
    }

    return (
        <div>
            <h1>My Counter App</h1>

            <h2>Count: {count}</h2>

            <button onClick={handleAdd}>
                +1
            </button>

            <button onClick={handleSubtract}>
                -1
            </button>

            <button onClick={handleReset}>
                Reset
            </button>

            <button onClick={handleAddFive}>
                +5
            </button>

            <button onClick={handleSubtractFive}>
                -5
            </button>
        </div>
    );
}

export default Counter;
