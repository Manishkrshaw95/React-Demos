import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);


    return (
        <div>
            <p> You have clicked {count} times here.</p>
            <button onClick={() =>setCount(count+1)}>Increment</button>
            <button onClick={() =>setCount(count-1)}>Decreament</button>
        </div>
    );
};

export default Counter