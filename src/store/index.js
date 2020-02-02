import { createStore } from 'redux'

function counter(state = false, action) {
  switch (action.type) {
    case 'OPEN':
      return true
    case 'CLOSE':
      return false
    default:
      return state
  }
}

let store = createStore(counter)

export default store