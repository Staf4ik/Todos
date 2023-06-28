import TodoRed from '../store/todo'
import styles from './Todo.module.css'

const Todo = ({ text }) => {
  return (
    <div className={styles.todo}>
      <p>{text}</p>
    </div>
  )
}

export default Todo
