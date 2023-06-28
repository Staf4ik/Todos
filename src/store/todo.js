import { makeAutoObservable, makeObservable } from 'mobx'

class TodoRed {
  todo = {
    todos: {},
    mainTodos: [],
    parrentId: null,
  }

  constructor() {
    makeAutoObservable(this)
  }

  addTodo(text) {
    this.todo.mainTodos = [...this.todo.mainTodos, text]
    console.log('задача добавлена')
  }

  delSelectedTodo() {}

  delAllTodos() {
    this.todo.mainTodos = []
  }
}

export default new TodoRed()
