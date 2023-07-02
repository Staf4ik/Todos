import { makeAutoObservable, makeObservable } from 'mobx'

class TodoRed {
  // изначальное состояние
  // объект todo c 3 свойствами.
  // todo - который будет хранить объекты по ключам = id
  // mainTodo - массив из которого формируются родительские задачи
  // parentID - для станлартного значени для родителей
  todo = {
    todos: { a: 1 },
    mainTodos: [],
    parrentId: null,
  }

  constructor() {
    makeAutoObservable(this)
  }

  addTodo(text, id) {
    this.todo.mainTodos = [
      ...this.todo.mainTodos,
      { id: [id], text: [text], selected: false, parentId: null },
    ]
    this.todo.todos = {
      ...this.todo.todos,
      [id]: { id: [id], text: [text], selected: false },
      // console.log(this.todo.todos[id].text)
    }
  }

  delSelectedTodo() {
    console.log(`main: ${this.todo.mainTodos}`)
    console.log(this.todo.todos)

    this.todo.mainTodos = Object.keys(this.todo.todos)
      .filter((id) => this.todo.todos[id].selected === false)
      .map((el) => ({
        id: el,
        text: this.todo.todos[el].text,
        selected: false,
        parentId: null,
      }))
  }

  delAllTodos() {
    this.todo.mainTodos = []
  }

  // selectTodo(id) {
  //   const changeMainTodos = this.todo.mainTodos.map((el) => {
  //     if ((el.id = id)) {
  //       el.selected = !el.selected
  //     }
  //     return el
  //   })

  //   // this.todo.mainTodos = changeMainTodos
  // }
  selectTodo(idSel) {
    this.todo.todos[idSel].selected = !this.todo.todos[idSel].selected
  }
}

export default new TodoRed()
