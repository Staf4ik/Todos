import TodoRed from '../store/todo'
import Todo from './Todo'
import { Observer, observer } from 'mobx-react-lite'
import styles from './TodoList.module.css'

const TodoList = observer((props) => {
  const { todoIds } = props
  return (
    <div className={styles.todolist}>
      {todoIds.map((el) => {
        return <Todo prop={el} id={el} key={el} />
      })}
    </div>
  )
})

export default TodoList
