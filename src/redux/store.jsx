import { createStore } from 'redux'

const initialState = 1;

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

// Pass second parameter to set initial state
export const store = createStore(reducer, initialState)

console.log(store.getState())