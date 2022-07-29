import styles from './TodoList.module.scss'
import TasksNotFound from '../TasksNotFound/TasksNotFound'
import TasksList from '../TasksList/TasksList'
import { useDispatch, useSelector } from 'react-redux'
import { IState } from '../../redux/store'
import { ITask } from '../../redux/store/modules/taskList/types'
import { changeTaskStatus, removeTask } from '../../redux/store/modules/taskList/actions'

export default function TodoList() {
    const tasks = useSelector<IState, ITask[]>(state => state.taskListReducer.tasks)
    const dispatch = useDispatch()

    const handleDelete = (task: ITask) => {
        dispatch(removeTask(task))
    }

    const handleChangeStatus = (task: ITask) => {
        dispatch(changeTaskStatus(task))
    }

    const finishedTasks = tasks.filter(item => (
        item.isDone === true
    )).length

    return (
        <div className={styles.container}>
            <div className={styles.counters}>
                <span>
                    Tarefas criadas <span>{tasks.length}</span>
                </span>
                <span>
                    Concluídas <span>{finishedTasks} de {tasks.length}</span>
                </span>
            </div>
            {tasks && tasks.length ?
                <TasksList taskList={tasks} onDelete={handleDelete} onChangeStatus={handleChangeStatus} />
                :
                <TasksNotFound />
            }
        </div>
    )
}