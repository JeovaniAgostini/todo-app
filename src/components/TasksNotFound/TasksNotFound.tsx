import { ClipboardText } from 'phosphor-react'
import styles from './TasksNotFound.module.scss'

export default function TasksNotFound() {
    return (
        <div className={styles.tasksNotFound}>
            <ClipboardText size={56} weight="light" />
            <strong>
                Você ainda não tem tarefas cadastradas
            </strong>
            <p>
                Crie tarefas e organize seus itens a fazer
            </p>
        </div>
    )
}