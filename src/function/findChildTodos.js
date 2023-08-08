import TodoRed from '../store/todo'

const findChildTodos = (currentId) => {
  let result = [currentId]
  //   console.log(result)
  const x = Object.keys(TodoRed.todo.todos).filter((el) => {
    return Array.from(TodoRed.todo.todos[el].parentId)[0] === currentId
  })

  //   перебирает все эоементы из id дочерних элементов первого уровня
  // и сравнивает их с теми, что уже есть в базе. Если их нет, то добавляет в массив новые ids
  // x.forEach((item) => {
  //   if (!result.includes(item)) {
  //     result.push(item)
  //   }
  // })
  result.concat(x)

  console.log(result)

  for (let index = 0; index < result.length; ++index) {
    const y = Object.keys(TodoRed.todo.todos).filter((el) => {
      return Array.from(TodoRed.todo.todos[el].parentId)[0] === result[index]
    })

    // console.log(y)

    y.forEach((item) => {
      if (!result.includes(item)) {
        result.push(item)
      }
    })

    // console.log('добавил')
  }

  return result
}

export default findChildTodos
