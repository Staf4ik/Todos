import { makeAutoObservable, makeObservable } from 'mobx'

class TodoRed {
  // изначальное состояние
  // объект todo c 3 свойствами.
  // todo - который будет хранить объекты по ключам = id
  // mainTodo - массив из которого формируются родительские задачи
  // parentID - для станлартного значени для родителей
  todo = {
    todos: {},
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
      [id]: { id: [id], text: [text], selected: false, parentId: null },
    }
  }

  addChildTodo(id, text, parId) {
    this.todo.todos = {
      ...this.todo.todos,
      [id]: { id: [id], text: [text], selected: false, parentId: [parId] },
    }
    console.log(this.todo.todos)
  }

  selectTodo(idSel) {
    this.todo.todos[idSel].selected = !this.todo.todos[idSel].selected
  }

  delSelectedTodo() {
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
}

export default new TodoRed()
