import './App.css'
import Buttons from './components/Buttons'
import Counter from './components/Counter.js'
import Form from './components/Form.js'
import TodoList from './components/TodoList'
import TodoRed from './store/todo.js'
import { observer } from 'mobx-react-lite'
// import { RiArrowDownFill } from 'react-icons/ri'

const App = observer(() => {
  console.dir(TodoRed.todo.todos)

  return (
    <div className="App">
      {/* ненужная штука, с нее начиналась программа, это тупо счетчик */}
      {/* <Counter /> */}
      <Form />
      <Buttons />
      <h1>Список задач: </h1>
      <TodoList todoIds={TodoRed.todo.mainTodos} />
    </div>
  )
})

export default App
