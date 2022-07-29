import Header from '../../components/Header/Header'
import InputTask from '../../components/InputTask/InputTask'
import TodoList from '../../components/TodoList/TodoList'
import styles from './Home.module.scss'

export default function Home() {
    return (
        <>
            <Header />
            <div className={styles.pageConfig}>
                <InputTask />
                <TodoList />
            </div>
        </>
    )
}