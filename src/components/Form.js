import { observer } from 'mobx-react-lite'
import Input from '../store/input'
import TodoRed from '../store/todo'
import styles from './Form.module.css'

const Form = observer(() => {
  return (
    <div>
      <form
        className={styles.form}
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          className={styles.form__input}
          placeholder="enter the text"
          value={Input.inputValue}
          onChange={(event) => {
            console.log(`value: ${Input.inputValue}`)
            // console.log(event.currentTarget.value)
            return Input.inputChange(event.currentTarget.value)
          }}
        ></input>
        <button
          className={styles.form__button}
          type="submit"
          onClick={() => TodoRed.addTodo(Input.inputValue)}
        >
          {' '}
          Добавить задачу{' '}
        </button>
      </form>
    </div>
  )
})

export default Form
