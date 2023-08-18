import React from 'react'
import styles from './Text.module.css'
import { observer } from 'mobx-react-lite'
import TodoRed from '../store/todo'

const Text = observer(() => {
  const selId = TodoRed.todo.selectedTodo

  return (
    <div className={styles.text_area}>
      <div className={styles.header}>
        <h4>
          Кликните на иконку лупы интересующей вас задачи для полного
          отображения{' '}
        </h4>
      </div>
      {selId === null ? (
        <></>
      ) : (
        <p>{Array.from(TodoRed.todo.todos[selId].text)}</p>
      )}
    </div>
  )
})

export default Text
