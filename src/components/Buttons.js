import TodoRed from '../store/todo'
import styles from './Buttons.module.css'

const Buttons = () => {
  return (
    <>
      <button className={styles.button} onClick={() => TodoRed.delAllTodos()}>
        {' '}
        Удалить все задачи{' '}
      </button>
      <button className={styles.button} onClick={() => TodoRed.delSelectedTodo}>
        {' '}
        Удалить выбранную задачу
      </button>
    </>
  )
}

export default Buttons
