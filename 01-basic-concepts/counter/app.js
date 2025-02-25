const initialState = {
    count: 0
}

const incrementAction = {
    type: 'INCREMENT'
}

const decrementAction = {
    type: 'DECREMENT'
}

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, count: state.count + 1}
        
        case 'DECREMENT':
            return {...state, count: state.count - 1}
    
        default:
            return state
    }
}

const store = Redux.createStore(countReducer);

function render() {
    const state = store.getState();
    document.querySelector("#counter").innerText = state.count;
}

store.subscribe(render)

render();

document.querySelector("#increment").addEventListener("click", e => {
    store.dispatch(incrementAction)
})

document.querySelector("#decrement").addEventListener("click", e => {
    store.dispatch(decrementAction)
})
