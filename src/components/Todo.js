import { observer } from 'mobx-react-lite'
import TodoRed from '../store/todo'
import styles from './Todo.module.css'
import TodoList from './TodoList'

import { AiOutlinePlus } from 'react-icons/ai'

const Todo = observer(({ prop, id }) => {
  // subTodo - это массив из которого формируются подзадачи.
  // при помощи  Object.keys мы создаем массив из имен свойств todos (равные id всем задачам).
  // Потом мы сравниваем все элементы этого массива со значением parentId элемента на котором нажали кнопку
  // добавить подзадачу. результирующий массив мы присваеваем переменной subTodo, которую ниже передаем
  // компоненте TodoList через пропсы , как значение свойства  todoIds

  // !!!!! СТОИТ ОБРАТИТЬ ВНИМАНИЕ !!!!
  // mobx возвращает значения как елемент массива proxy объекта
  // из-за этого TodoRed.todo.todos[el].parentId === prop будет неверно.
  // т.к. typeof TodoRed.todo.todos[el].parentId = object.
  // чтобы получить значение из proxy объекта, нужно воспользоваться
  // следующим методом: Array.from . Он вернет массив с одним элементом. Чтобы получить
  // значение из массива, мы имеем следующую запись : Array.from(TodoRed.todo.todos[el].parentId)[0]

  const subTodo = Object.keys(TodoRed.todo.todos).filter((el) => {
    return Array.from(TodoRed.todo.todos[el].parentId)[0] === prop
  })

  const parentTodo = TodoRed.todo.todos[prop].parentId
  console.log(parentTodo)

  console.log(subTodo)

  return (
    <div className={parentTodo ? styles.subTodoSecond : styles.subTodoFirst}>
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
          {/* отображение parentid задачи для проверки  */}
          <p>
            parent ID :
            {TodoRed.todo.todos[prop].parentId === 0
              ? 'null'
              : TodoRed.todo.todos[prop].parentId}
          </p>
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
