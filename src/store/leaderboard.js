import { createStore } from 'redux'

function counter(state = [], action) {
  switch (action.type) {
    case 'INCREMENT':
      return [...state, ...action.data]
    case 'DECREMENT':
      return []
    default:
      return state
  }
}

let store = createStore(counter)

export default store