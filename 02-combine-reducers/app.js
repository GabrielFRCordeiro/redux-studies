let newTask;

const initialState = {
    backlog: [],
    done: []
}

const createTaskAction = (task) => ({
    type: 'CREATE',
    payload: task
});

const concludeTaskAction = (task) => ({
    type: 'CONCLUDE',
    payload: task
});

const createTaskReducer = (state = { backlog: [] }, action) => {
    switch (action.type) {
        case 'CREATE':
            return {
                ...state,
                backlog: [...state.backlog, action.payload]
            };
        default:
            return state;
    }
}

const concludeTaskReducer = (state = { done: [] }, action) => {
    switch (action.type) {
        case 'CONCLUDE':
            return {
                ...state,
                done: [...state.done, action.payload]
            };
        default:
            return state;
    }
}

const rootReducer = Redux.combineReducers({
    create: createTaskReducer,
    conclude: concludeTaskReducer
});

const store = Redux.createStore(rootReducer);

function render() {
    const state = store.getState();
    const tasks_section = document.querySelector("#tasks_section");
    tasks_section.innerHTML = '';
    
    state.create.backlog.forEach(task => {
        tasks_section.innerHTML += `<tr><td><p>${task}</p><button onclick="store.dispatch(concludeTaskAction('${task}'))">Finish</button></td></tr>`;
    });
    
    state.conclude.done.forEach(task => {
        tasks_section.innerHTML += `<tr><td></td><td>${task}</td></tr>`;
    });
}

store.subscribe(render);

render();

document.querySelector("#btn_submit").addEventListener("click", e => {
    e.preventDefault();
    newTask = document.querySelector("#t_field_task").value;
    store.dispatch(createTaskAction(newTask));
});