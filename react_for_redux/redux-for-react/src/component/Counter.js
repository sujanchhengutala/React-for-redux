import { useSelector, useDispatch } from "react-redux"
import classes from './Counter.module.css'
import { counterActions } from "../store"

const Counter = () => {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)
    const show = useSelector(state => state.showCounter)

    const incrementHandaler = () => {
        dispatch(counterActions.increment())

    }

    const decrementHandaler = () => {
        dispatch(counterActions.decrement())
    }

    const increaseHandaler = () => {
        dispatch(counterActions.increase(10))

    }

    const decreaseHandaler = () => {
        dispatch(counterActions.decrease(10))

    }

    const toggleCounterHandler = () => {
        dispatch(counterActions.toogle()) 

    }

    return (<main className={classes.counter}>
        <h1>Redux Counter</h1>
        {show && <div className={classes.value}> {counter} </div>}
        <div>
            <button onClick={incrementHandaler}>increment</button>
            <button onClick={decrementHandaler}>decrement</button>
            <button onClick={increaseHandaler}>increase</button>
            <button onClick={decreaseHandaler}>decrease</button>
            <button onClick={toggleCounterHandler}>toggle Counter</button>
        </div>
    </main>
    )
}
export default Counter;