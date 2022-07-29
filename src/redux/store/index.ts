import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './modules/rootReducer'
import { ITaskListState } from './modules/taskList/types'

export interface IState {
    taskListReducer: ITaskListState
}

const store = configureStore({
    reducer: rootReducer
})

export default store