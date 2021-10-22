import { useSelector, useDispatch } from "react-redux"
import classes from './Counter.module.css'

const Counter = ()=>{
    const dispatch = useDispatch()
    const counter = useSelector( state => state.counter)
    const show = useSelector(state => state.showCounter)

    const incrementHandaler = ()=>{
        dispatch({type: 'increment'})

    }
    const increaseHandaler = ()=>{
        dispatch({type: 'increase', amount: 10})

    }
    
    const decrementHandaler = ()=>{
        dispatch({type: 'decrement'})
    }

    const toggleCounterHandler = ()=>{
        dispatch({type: 'toogle'})
        
    }




    return(<main className = {classes.counter}>
     <h1>Redux Counter</h1>
     {show && <div className = {classes.value}> {counter} </div>}
    <div>
    <button onClick = { incrementHandaler }>increment</button>
    <button onClick = { increaseHandaler }>increase</button>
    <button onClick = { decrementHandaler }>decrement</button>
    <button onClick = {toggleCounterHandler}>toggle Counter</button>
    </div>
    </main>
    )
}
export default Counter;