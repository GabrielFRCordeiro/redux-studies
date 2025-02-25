import { ActionTypes } from "../constants/action-types";

export const createTask = (task) => {
    return {
        type: ActionTypes.CREATE_TASK,
        payload: task
    }
}

export const concludeTask = (task) => {
    return {
        type: ActionTypes.CONCLUDE_TASK,
        payload: task
    }
}
