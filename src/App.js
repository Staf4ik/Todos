import './App.css'
import Buttons from './components/Buttons'
import Counter from './components/Counter.js'
import Form from './components/Form.js'
import TodoList from './components/TodoList'
import TodoRed from './store/todo.js'
import { observer } from 'mobx-react-lite'

const App = () => {
  return (
    <div className="App">
      {/* ненужная штука, с нее начиналась программа, это тупо счетчик */}
      {/* <Counter /> */}
      <Form />
      <Buttons />
      <TodoList />
    </div>
  )
}

export default App
