import TodoRed from '../store/todo'
import Todo from './Todo'
import { Observer, observer } from 'mobx-react-lite'

const TodoList = observer(() => {
  return (
    <div>
      <h1>Список задач: </h1>
      {TodoRed.todo.map((el) => {
        return <Todo text={el} />
      })}
    </div>
  )
})

export default TodoList
