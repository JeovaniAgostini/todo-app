import { Circle, Trash, CheckCircle } from 'phosphor-react'
import { ITask } from '../../redux/store/modules/taskList/types'
import styles from './TasksList.module.scss'

interface Task {
    id: string
    isDone: boolean
    taskName: string
}

interface TasksListProps {
    taskList: Task[]
    onDelete: (task: ITask) => void
    onChangeStatus: (task: ITask) => void
}

export default function TasksList({ taskList, onDelete, onChangeStatus }: TasksListProps) {

    return (
        <div className={styles.tasksList}>
            <ul>
                {taskList.map((task) => (
                    <li key={task.id} className={task.isDone ? styles.done : ''}>
                        {task.isDone ?
                            <CheckCircle size={20} weight="fill" onClick={() => onChangeStatus(task)} />
                            :
                            <Circle size={20} weight="bold" onClick={() => onChangeStatus(task)} />
                        }
                        <p>
                            {task.taskName}
                        </p>
                        <Trash size={20} weight="light" onClick={() => onDelete(task)} />
                    </li>
                ))}
            </ul>
        </div>
    )
}