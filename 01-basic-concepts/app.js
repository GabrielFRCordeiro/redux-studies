// Estado inicial
const initialState = {
    count: 0
};
  
// Ação
const incrementAction = { type: 'INCREMENT' };
const decrementAction = { type: 'DECREMENT' };

// Reducer (sem parametros, retorna estado inicial)
function counterReducer(state = initialState, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      default:
        return state;
    }
}
  
// Store (guarda estado global)
const store = Redux.createStore(counterReducer);

// Atualiza a interface
function render() {
    const state = store.getState();
    document.getElementById('count').innerText = state.count;
}
  
// Quando estado global (store) mudar, a interface é atualizada
store.subscribe(render);

// Inicializa a interface
render();

// Manipuladores de eventos
document.getElementById('increment').addEventListener('click', () => {
    store.dispatch(incrementAction);
});

document.getElementById('decrement').addEventListener('click', () => {
    store.dispatch(decrementAction);
});