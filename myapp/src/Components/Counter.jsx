import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const addCounter = () => {
        setCounter((prevValue) => prevValue + 1)
    }
    return (
        <div>
            <h1>Counter:{counter}</h1>
            <button onClick={addCounter}>+</button>
        </div>
    )
}

export default Counter