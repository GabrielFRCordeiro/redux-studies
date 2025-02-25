import { ActionTypes } from "../constants/action-types"

const initialState = {
    backlog: [],
    done: []
}

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.CREATE_TASK:
            return {
                ...state,
                backlog: [...state.backlog, action.payload]
            };
        
        case ActionTypes.CONCLUDE_TASK:
            return {
                ...state,
                done: [...state.done, action.payload]
            };
    
        default:
            return state;
    }
}
