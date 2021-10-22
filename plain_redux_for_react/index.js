const redux = require('redux');

const counterReducer = (state = {counter: 0}, action)=>{
    if(action.type === 'increase'){
        
    }

}

const store = redux.createStore(counterReducer)

const counterSubscriber = ()=>{
const latestStore = store.getState()
console.log(latestStore)
}

store.subscribe(counterSubscriber)
store.dispatch({ type: 'increase'})

