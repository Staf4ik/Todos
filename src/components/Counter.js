import React from 'react'
import { observer } from 'mobx-react-lite'
import counter1 from '../store/counter'

const Counter = observer(() => {
  return (
    <div>
      <h1>Счетчик: {counter1.count}</h1>
      <button onClick={() => counter1.increment()}>Добавить 1</button>
      <button onClick={() => counter1.decrement()}>Уменьшить 1</button>
    </div>
  )
})

export default Counter
