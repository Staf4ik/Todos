import TodoRed from '../store/todo'

const Buttons = () => {
  return (
    <>
      <button onClick={() => TodoRed.delAllTodos()}>
        {' '}
        Удалить все задачи{' '}
      </button>
      <button onClick={() => TodoRed.delSelectedTodo}>
        {' '}
        Удалить выбранную задачу
      </button>
    </>
  )
}

export default Buttons
