import TodoRed from '../store/todo'
import Todo from './Todo'
import { Observer, observer } from 'mobx-react-lite'
import styles from './TodoList.module.css'

const TodoList = observer(() => {
  console.dir(TodoRed.todo.mainTodos)
  console.log(TodoRed.todo.mainTodos)
  return (
    <div className={styles.todolist}>
      <h1>Список задач: </h1>

      {TodoRed.todo.mainTodos.map((el) => {
        return <Todo prop={el} id={el.id} />
      })}
    </div>
  )
})

export default TodoList
