import React, { useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div>
            <h1>Count: {count}</h1> {/* Display the current count */}
            <button onClick={increment}>Increment</button> {/* Increment the count */}
            <button onClick={decrement}>Decrement</button> {/* Decrement the count */}
        </div>
    );
}

export default App;

// useState is used to declare state variables in functional components.
// The state variable (count) and the updater function (setCount) allow you to read and update the state.