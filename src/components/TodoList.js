import TodoRed from '../store/todo'
import Todo from './Todo'
import { Observer, observer } from 'mobx-react-lite'
import styles from './TodoList.module.css'

const TodoList = observer((props) => {
  const { todoIds } = props
  return (
    <div className={styles.todolist}>
      <h1>Список задач: </h1>

      {todoIds.map((el) => {
        return <Todo prop={el} id={el.id} key={el.id} />
      })}
    </div>
  )
})

export default TodoList
