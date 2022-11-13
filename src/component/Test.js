import React, {useState} from 'react'

const TestPage = () => {
    const val = 1980
    const useCounter = (values = 0, delta = 1) => {
        const [count, setCount] = useState(values)
        const increment = () => {
            setCount((prevState) => prevState + delta)
        }
        const decrement = () => {
            setCount((prevState) => prevState - delta)
        }
        return [count, increment, decrement]
    }
    const [count, increment, decrement] = useCounter(val, 2000)
    return (
        <>
            <button onClick={increment}> +++</button>
            <div>{count}</div>
            <button onClick={decrement}> ---</button>
        </>
    )
}
export default TestPage;