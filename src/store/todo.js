import { makeAutoObservable, makeObservable } from 'mobx'

class TodoRed {
  // изначальное состояние
  // объект todo c 2 свойствами.
  // todos - который будет хранить объекты по ключам = id
  // mainTodos - массив из которого формируются родительские задачи

  todo = {
    todos: {},
    mainTodos: [],
  }

  constructor() {
    makeAutoObservable(this)
  }

  // // правильный синтаксис, с добавлением через пуш, а не копирование объекта
  addTodo(text, id) {
    // Добавление задачи в массиы чисел mainTodos из которого формируется список главных задач.
    // каждый елемент массива равен id задачи
    console.log(this.todo.todos)
    this.todo.mainTodos.push(id)

    // При добавлении новой задачи в объекте todos создается новое свойство c именем равным id
    // и значением равным объекту с набором свойств (id, text, selected, parentId)
    // из text заполняется текст задачи для отображения
    // selected служит для отображения (отмечена задача или нет) и влияет на стиль ее оформления
    // parentId нужен для формирования дочерних задач (осуществления вложенности)

    this.todo.todos[id] = {
      id: [id],
      text: [text],
      selected: false,
      parentId: null,
    }
  }

  // При добавдении дочерней задачи, ее объект помещается только в todos. Не затрагивая mainTodos
  // создается объект  аналогичный тем, что там хранятся, с одним отличием, что parentId = id той задачина на которой он был создан
  addChildTodo(id, text, parId) {
    this.todo.todos[id] = {
      id: [id],
      text: [text],
      selected: false,
      parentId: [parId],
    }
  }

  // При клике на объект значение его свойства selected меняется на противоположное
  selectTodo(idSel) {
    this.todo.todos[idSel].selected = !this.todo.todos[idSel].selected
  }

  delSelectedTodo() {
    // при удалении выбранных задач, мы создаем массив из имен свойств todos , которые равны id.
    // после этого фильтруем его на основании значения свойства selected = false у этих объектов и
    // присваеваем значение этого выражения переменной mainTodos из которой формируется список основных
    // (главных) задач
    this.todo.mainTodos = Object.keys(this.todo.todos).filter(
      (id) => this.todo.todos[id].selected === false
    )

    // Для очистки todos , мы преобразовываем этот объект в массив при помощи Object.entries .
    // После этого фильтруем его на основании значения value.selected === false .
    // После чего преобразовываем его обратно в объект при помощи Object.fromEntries

    this.todo.todos = Object.fromEntries(
      Object.entries(this.todo.todos).filter(
        ([el, value]) => value.selected === false
      )
    )
  }

  // при удалении всех задач, мы не только чистим массив из которого они формируются mainTodos,
  // но и чистим список задач в todos, чтобы в будущем не хранить лишнюю информаци
  delAllTodos() {
    this.todo.mainTodos = []

    this.todo.todos = {}
  }
}

export default new TodoRed()
