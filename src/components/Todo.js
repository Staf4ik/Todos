import { observer } from 'mobx-react-lite'
import TodoRed from '../store/todo'
import styles from './Todo.module.css'
import TodoList from './TodoList'

// import { AiOutlinePlus } from 'react-icons/ai'

const Todo = ({ prop, id }) => {
  // console.log(prop.id)
  // console.log(TodoRed.todo.todos[prop.id].parentId)
  const subTodo = Object.keys(TodoRed.todo.todos).filter((el) => {
    return TodoRed.todo.todos[el].parentId === prop.id
  })

  console.log(subTodo)

  return (
    <div>
      <div
        className={
          TodoRed.todo.todos[id].selected ? styles.todo_sel : styles.todo
        }
        onClick={() => TodoRed.selectTodo([id])}
      >
        <p>{prop.text}</p>
        {/* отображение id задачи */}
        <p>id: {id}</p>
        {/* тест на отображение изменения состояния selected  */}
        {/* <p> {TodoRed.todo.todos[id].selected ? 1 : 2}</p> */}
        {/* <AiOutlinePlus /> */}
        <button
          onClick={(event) => {
            const id = new Date().getTime().toString()
            const text = prompt()
            const parId = prop.id
            console.log(parId)
            TodoRed.addChildTodo(id, text, parId)
          }}
        >
          +
        </button>
      </div>
      {/* <TodoList todoIds={}/> */}
    </div>
  )
}

export default Todo
