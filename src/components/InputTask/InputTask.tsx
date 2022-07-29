import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { PlusCircle } from 'phosphor-react'
import styles from './InputTask.module.scss'
import { useDispatch } from 'react-redux'
import { addTask } from '../../redux/store/modules/taskList/actions'
import { v4 } from 'uuid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function InputTask() {
    const [inputValue, setInputValue] = useState<string>('')
    const [disabled, setDisabled] = useState(false)
    const dispatch = useDispatch()

    const notify = () => toast.warn(
        "Digite o nome da tarefa!",
        {
            theme: 'dark'
        }
    );

    const handleAddTask = useCallback((taskName: string) => {
        if (!taskName.trim()) {
            notify()
        } else {
            const task = {
                id: v4(),
                isDone: false,
                taskName,
            }
            dispatch(addTask(task))
        }
    }, [])

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    return (
        <>
            <div className={styles.addTaskGroup}>
                <input
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    onChange={(e) => handleInputChange(e)}
                    value={inputValue}
                />
                <button type="submit" disabled={disabled} onClick={() => handleAddTask(inputValue)}>
                    Criar <PlusCircle size={20} weight="bold" />
                </button>
            </div>
            <ToastContainer position="bottom-right" />
        </>
    )
}