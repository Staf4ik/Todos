import { makeAutoObservable, makeObservable } from 'mobx'

class Input {
  inputValue = ''

  constructor() {
    makeAutoObservable(this)
  }

  inputChange(el) {
    this.inputValue = el
  }
}

export default new Input()
