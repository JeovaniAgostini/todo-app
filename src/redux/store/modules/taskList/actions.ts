import { ITask } from "./types";

export function addTask(task: ITask) {
    return {
        type: 'ADD_TASK',
        payload: {
            task,
        }
    }
}

export function removeTask(task: ITask) {
    return {
        type: 'REMOVE_TASK',
        payload: {
            task,
        }
    }
}

export function changeTaskStatus(task: ITask) {
    return {
        type: 'CHANGE_TASK_STATUS',
        payload: {
            task,
        }
    }
}