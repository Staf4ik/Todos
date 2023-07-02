import { observer } from 'mobx-react-lite'
import TodoRed from '../store/todo'
import styles from './Todo.module.css'

const Todo = observer(({ prop, id }) => {
  // console.log(prop.selected)
  // let selected = TodoRed.todo.todos[id].selected
  // console.log(selected)
  return (
    <div
      className={
        TodoRed.todo.todos[id].selected === false
          ? styles.todo
          : styles.todo_sel
      }
      onClick={() => TodoRed.selectTodo([id])}
    >
      <p>{prop.text}</p>
      <p>id: {id}</p>
      <p> {TodoRed.todo.todos[id].selected ? 1 : 2}</p>
    </div>
  )
})

export default Todo
