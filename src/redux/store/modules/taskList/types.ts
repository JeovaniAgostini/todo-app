export interface ITask {
    id: string
    isDone: boolean
    taskName: string
}

export interface ITaskListState {
    tasks: ITask[]
}