import { createStore } from 'redux'
const counterReducer = (state = { counter : 10 }, action) =>{
    if( action.type === 'increase') {
        return {counter : state.counter + 1 }
    }
    if( action.type === 'decrease') {
        return {counter : state.counter - 1 }
    }
    return state;
}
const store = createStore(counterReducer)
export default store