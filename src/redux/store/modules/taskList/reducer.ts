import { Reducer } from "redux";
import { ITaskListState } from "./types";

const initialState: ITaskListState = {
    tasks: [
        {
            id: 'sd6f4-sd56f4-sd4f54sdf564-sd4f56sd4f',
            isDone: true,
            taskName: 'Fazer compras'
        },
        {
            id: 'bdkll-sbdkll-bdkll4sdf564-sd4f5bdkll',
            isDone: false,
            taskName: 'Fazer almoço'
        },
        {
            id: 'puibv-spuibv-puibv4sdf564-sd4f5opuibv',
            isDone: false,
            taskName: 'Meditar'
        }
    ]
}

const taskListReducer: Reducer<ITaskListState> = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK': {
            const { task } = action.payload

            return { ...state, tasks: [...state.tasks, task] }
        }
        case 'REMOVE_TASK': {
            const { task } = action.payload

            return { ...state, tasks: [...state.tasks.filter(item => item.id !== task.id)] }
        }
        case 'CHANGE_TASK_STATUS': {
            const { task } = action.payload

            return {
                ...state,
                tasks: [
                    ...state.tasks.map(item => item.id === task.id ? {
                        ...item, isDone: !(item.isDone)
                    } : {
                        ...item
                    })
                ]
            }
        }
        default: {
            return state;
        }
    }
}

export default taskListReducer;