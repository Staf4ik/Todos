import { makeAutoObservable, makeObservable } from 'mobx'
import findChildTodos from '../function/findChildTodos'

class TodoRed {
  // изначальное состояние
  // объект todo c 2 свойствами.
  // todos - который будет хранить объекты по ключам = id
  // mainTodos - массив из которого формируются родительские задачи

  todo = {
    todos: {},
    mainTodos: [],
    selectedTodo: null,
  }

  constructor() {
    makeAutoObservable(this)
  }

  // // правильный синтаксис, с добавлением через пуш, а не копирование объекта
  addTodo(text, id) {
    // Добавление задачи в массиы чисел mainTodos из которого формируется список главных задач.
    // каждый елемент массива равен id задачи

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
      roll: true,
      parentId: 0,
    }
  }

  // При добавдении дочерней задачи, ее объект помещается только в todos. Не затрагивая mainTodos
  // создается объект  аналогичный тем, что там хранятся, с одним отличием, что parentId = id той задачи на на которой он был создан
  addChildTodo(id, text, parId) {
    this.todo.todos[id] = {
      id: [id],
      text: [text],
      selected: false,
      roll: true,
      parentId: [parId],
    }
  }

  // При клике на объект значение его свойства selected меняется на противоположное
  selectTodo(idSel, subTodo2) {
    // console.log(subTodo2)
    const oppositeState = !this.todo.todos[idSel].selected
    subTodo2.forEach((key) => (this.todo.todos[key].selected = oppositeState))
  }

  lookTodo(idSel) {
    this.todo.selectedTodo = idSel
    console.log(this.todo.selectedTodo)
  }

  delSelectedTodo() {
    // при удалении выбранных задач, мы применяем метод мap к массиву mainTodos из которого формируются
    // родительские задачи. Проверяем чему равен selected у каждого из элементов и оставляем только
    // те элементы (id) у которых selected === false .
    // но массив будет не чистый и будет сожержать элементы undefined .
    // Чтобы от них избавиться мы применяем фильтр  filter((el) => el !== undefined)

    this.todo.mainTodos = this.todo.mainTodos
      .map((el) => {
        if (this.todo.todos[el].selected === false) {
          return el
        }
      })
      .filter((el) => el !== undefined)

    console.log(this.todo.mainTodos)

    // после формирования нового mainTodos (после удаления старых) из родительских ID, нужно создать новый массив, который будет
    // включать в себя все дочерние id. После этого уже проходить ключами объекта именно по этому новому массиву,
    // а не по mainTodos. Т.К. он не содержит дочерних id и в итоге все дочернии эл-ты удаляются.

    // Мы создаем массив из массивов дочерних объектов пример: [[1,2],[3],[4]]
    let childIds = this.todo.mainTodos.map((el) => findChildTodos(el))

    // приводим childIds к однородному массиву. Было [[1,2],[3],[4]] стало [1,2,3,4]
    let allChildIds = childIds.flat()

    // Мы берем ключи (имена свойств) todos, делаем итерации и проверяем есть ли в массиве allChildIds эл = ключу
    // Если есть, идем дальше. Если нет, удаляем его из объекта todos, который содердит список всех todo

    for (const key in this.todo.todos) {
      // if (Array.from(this.todo.mainTodos).includes(key)) {
      if (allChildIds.includes(key)) {
        console.log(' включает')
      } else {
        console.log(' нет')

        delete this.todo.todos[key]
      }
    }

    // Если главные задачи из mainTodos небыли выбраны, то делается проверка по значению свойства selected
    // у всех задач в списке this.todo.todos и удаляются все задачи у кого selected true

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

  rollTodos(idSel) {
    this.todo.todos[idSel].roll = !this.todo.todos[idSel].roll
  }
}

export default new TodoRed()
