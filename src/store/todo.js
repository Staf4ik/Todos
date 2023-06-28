import { makeAutoObservable, makeObservable } from 'mobx'

class TodoRed {
  todo = [1]

  constructor() {
    makeAutoObservable(this)
  }

  addTodo(text) {
    this.todo = [...this.todo, text]
    console.log('задача добавлена')
  }

  delSelectedTodo() {}

  delAllTodos() {
    this.todo = []
  }
}

export default new TodoRed()
