import { observer } from 'mobx-react-lite'
import TodoRed from '../store/todo'
import styles from './Todo.module.css'
import TodoList from './TodoList'
import findChildTodos from '../function/findChildTodos'

import { AiOutlinePlus } from 'react-icons/ai'
import { RiArrowDropRightLine } from 'react-icons/ri'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { RiArrowRightSLine } from 'react-icons/ri'
import { RiSearch2Line } from 'react-icons/ri'
import { eventWrapper } from '@testing-library/user-event/dist/utils'

const Todo = observer(({ prop, id }) => {
  // subTodo - это массив из которого формируются подзадачи.
  // при помощи  Object.keys мы создаем массив из имен свойств todos (равные id всем задачам).
  // Потом мы сравниваем все элементы этого массива со значением parentId элемента на котором нажали кнопку
  // добавить подзадачу. результирующий массив мы присваеваем переменной subTodo, которую ниже передаем
  // компоненте TodoList через пропсы , как значение свойства  todoIds

  // !!!!! СТОИТ ОБРАТИТЬ ВНИМАНИЕ !!!!
  // mobx возвращает значения как элемент массива proxy объекта
  // из-за этого TodoRed.todo.todos[el].parentId === prop будет неверно.
  // т.к. typeof TodoRed.todo.todos[el].parentId = object.
  // чтобы получить значение из proxy объекта, нужно воспользоваться
  // следующим методом: Array.from . Он вернет массив с одним элементом. Чтобы получить
  // значение из массива, мы имеем следующую запись : Array.from(TodoRed.todo.todos[el].parentId)[0]

  // const findChildTodos = (currentId) => {
  //   return Object.keys(TodoRed.todo.todos).filter((el) => {
  //     return Array.from(TodoRed.todo.todos[el].parentId)[0] === currentId
  //   })
  // }

  //   const arrow = document.getElementById('test')

  //   arrow.addEventListener('click', function () {
  //     // Проверяем текущее содержимое div
  //     if (arrow.innerHTML === ' > ') {
  //       // Изменяем содержимое на " V "
  //       arrow.innerHTML = ' V '
  //     } else {
  //       // Изменяем содержимое на " > "
  //       arrow.innerHTML = ' > '
  //     }
  //   })

  const subTodo = Object.keys(TodoRed.todo.todos).filter((el) => {
    return Array.from(TodoRed.todo.todos[el].parentId)[0] === prop
  })

  const subTodo2 = findChildTodos(prop)

  const parentTodo = TodoRed.todo.todos[prop].parentId
  // console.log(parentTodo)

  // console.log(subTodo)
  return (
    <>
      <div className={parentTodo ? styles.subTodoSecond : styles.subTodoFirst}>
        <div className={styles.display}>
          <div
            className={
              TodoRed.todo.todos[id].selected ? styles.todo_sel : styles.todo
            }
            onClick={() => TodoRed.selectTodo(prop, subTodo2)}
            // onClick={() => findChildTodos(prop)}
          >
            <div className={styles.ico}>
              {/* при появлении вложенных задач, появляеится иконка стрелки ( > или v) */}
              {subTodo.length > 0 ? (
                <span>
                  {TodoRed.todo.todos[id].roll ? (
                    <RiArrowDropDownLine
                      className={styles.todoIcon2}
                      onClick={(event) => {
                        event.stopPropagation()
                        TodoRed.rollTodos(prop)
                      }}
                    />
                  ) : (
                    <RiArrowRightSLine
                      className={styles.todoIcon2}
                      onClick={(event) => {
                        event.stopPropagation()
                        TodoRed.rollTodos(prop)
                      }}
                    />
                  )}{' '}
                </span>
              ) : (
                true
              )}

              {/* {subTodo.length > 0 ? (
                <RiArrowRightSLine
                  className={styles.todoIcon}
                  onClick={(event) => {
                    event.stopPropagation()
                    TodoRed.rollTodos(prop)
                  }}
                />
              ) : (
                true
              )} */}
            </div>
            <div>
              <p className={styles.text_todo}>
                {TodoRed.todo.todos[prop].text}
              </p>

              {/* отображение id задачи  */}
              {/* <span>id: {id}</span> */}

              {/* отображение parentid задачи для проверки  */}
              {/* <span>
                parent ID :
                {TodoRed.todo.todos[prop].parentId === 0
                  ? 'null'
                  : TodoRed.todo.todos[prop].parentId}
              </span> */}

              {/* тест на отображение изменения состояния selected  */}
              {/* пока selected = false отображается 1 при true 2  */}
              {/* <p> {TodoRed.todo.todos[id].selected ? 2 : 1}</p> */}
            </div>
            <div>
              <RiSearch2Line
                className={styles.todoIcon3}
                onClick={(event) => {
                  event.stopPropagation()
                  TodoRed.lookTodo(prop)
                }}
              />
            </div>
            <div>
              <AiOutlinePlus
                className={styles.todoIcon3}
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
          {/* <div>
            <input type="checkbox" className={styles.inputTodo}></input>
          </div> */}
        </div>
        {/* <div id="test"> V </div> */}
        {TodoRed.todo.todos[id].roll ? <TodoList todoIds={subTodo} /> : true}
        {/* <TodoList todoIds={subTodo} /> */}
      </div>
    </>
  )
})

export default Todo
