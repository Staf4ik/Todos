import { observer } from 'mobx-react-lite'
import TodoRed from '../store/todo'
import styles from './Todo.module.css'
import TodoList from './TodoList'

import { AiOutlinePlus } from 'react-icons/ai'

const Todo = observer(({ prop, id }) => {
  const subTodo = Object.keys(TodoRed.todo.todos).filter((el) => {
    return Array.from(TodoRed.todo.todos[el].parentId)[0] === prop
  })

  console.log(subTodo)
  return (
    <div>
      <div
        className={
          TodoRed.todo.todos[id].selected ? styles.todo_sel : styles.todo
        }
        onClick={() => TodoRed.selectTodo([prop])}
      >
        <div>
          <p>{TodoRed.todo.todos[prop].text}</p>
          {/* отображение id задачи  */}
          <p>id: {id}</p>
          <p>parent ID :{TodoRed.todo.todos[prop].parId}</p>
          {/* тест на отображение изменения состояния selected  */}
          {/* пока selected = false отображается 1 при true 2  */}
          {/* <p> {TodoRed.todo.todos[id].selected ? 2 : 1}</p> */}
        </div>

        <div>
          <AiOutlinePlus
            className={styles.todoIcon}
            onClick={(event) => {
              event.stopPropagation()
              const id = new Date().getTime().toString()
              const text = prompt()
              const parId = prop
              // console.log(parId)
              TodoRed.addChildTodo(id, text, parId)
            }}
          />
        </div>
      </div>
      <TodoList todoIds={subTodo} />
    </div>
  )
})

export default Todo
