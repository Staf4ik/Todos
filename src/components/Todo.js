import { observer } from 'mobx-react-lite'
import TodoRed from '../store/todo'
import styles from './Todo.module.css'
import TodoList from './TodoList'

// import { AiOutlinePlus } from 'react-icons/ai'

const Todo = observer(({ prop, id }) => {
  // console.log(typeof prop.id)
  // const actualArray = Array.from(prop.id)
  // console.log(typeof actualArray[0])
  // console.log(TodoRed.todo.todos[prop.id].parentId)
  const x = Object.keys(TodoRed.todo.todos)
  // const subTodo = Object.keys(TodoRed.todo.todos).filter((el) => {
  //   return TodoRed.todo.todos[el].parentId === actualArray[0]
  // })

  // console.log(subTodo)
  console.log(x)
  return (
    <div>
      <div
        className={
          TodoRed.todo.todos[id].selected ? styles.todo_sel : styles.todo
        }
        onClick={() => TodoRed.selectTodo([prop])}
      >
        <p>{TodoRed.todo.todos[prop].text}</p>
        {/* отображение id задачи */}
        <p>id: {id}</p>
        <p>parent ID : {TodoRed.todo.todos[prop].parId}</p>
        {/* тест на отображение изменения состояния selected  */}
        {/* <p> {TodoRed.todo.todos[id].selected ? 1 : 2}</p> */}
        {/* <AiOutlinePlus /> */}
        <button
          onClick={(event) => {
            event.stopPropagation()
            const id = new Date().getTime().toString()
            const text = prompt()
            const parId = prop
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
})

export default Todo
