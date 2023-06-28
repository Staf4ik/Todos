import TodoRed from '../store/todo'
import Todo from './Todo'
import { Observer, observer } from 'mobx-react-lite'
import styles from './TodoList.module.css'

const TodoList = observer(() => {
  return (
    <div className={styles.todolist}>
      <h1>Список задач: </h1>
      {TodoRed.todo.map((el) => {
        return <Todo text={el} />
      })}
    </div>
  )
})

export default TodoList
