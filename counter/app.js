const initialState = {
    counter: 0
}

const incrementAction = {
    type: 'INCREMENT'
}

const decrementAction = {
    type: 'DECREMENT'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {counter: state.counter + 1};
        
        case 'DECREMENT':
            return {counter: state.counter - 1};
            
        default:
            return {counter: state.counter};
    }
}

const store = Redux.createStore(reducer);

function render() {
    const state = store.getState();
    document.querySelector("#counter").innerText = state.counter;
}

store.subscribe(render);

render();

document.querySelector("#increment").addEventListener("click", e => {
    store.dispatch(incrementAction);
});

document.querySelector("#decrement").addEventListener("click", e => {
    store.dispatch(decrementAction);
});
