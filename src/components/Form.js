import { observer } from 'mobx-react-lite'
import Input from '../store/input'
import TodoRed from '../store/todo'

const Form = observer(() => {
  return (
    <div>
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          placeholder="enter the text"
          value={Input.inputValue}
          onChange={(event) => {
            console.log(`value: ${Input.inputValue}`)
            // console.log(event.currentTarget.value)
            return Input.inputChange(event.currentTarget.value)
          }}
        ></input>
        <button type="submit" onClick={() => TodoRed.addTodo(Input.inputValue)}>
          {' '}
          Добавить задачу{' '}
        </button>
      </form>
    </div>
  )
})

export default Form
