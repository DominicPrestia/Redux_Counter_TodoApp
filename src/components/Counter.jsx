import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/actions/counterActions'

const Counter = () => {

    const count = useSelector((state) => state.count)
    const dispatch = useDispatch();

    return (
        <div>
            <div>Counter: {count}</div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={()=> dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}

export default Counter