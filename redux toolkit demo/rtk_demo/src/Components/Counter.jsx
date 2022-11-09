import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { decrement, increment } from './Redux/features/Counter/CounterSlice'

function Counter() {
    const counter = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()
  
  return (
    <div>
        <h1>{counter}</h1>
        <button  onClick={()=> dispatch(increment())}>+</button>
        <button onClick ={()=> dispatch(decrement())}>-</button>
    </div>
  )
}

export default Counter