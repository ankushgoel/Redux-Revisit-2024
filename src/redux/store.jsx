import { createStore } from 'redux'
import reducers from './reducers';

const initialState = {};

// Pass second parameter to set initial state
export const store = createStore(reducers, initialState)

console.log(store.getState())
// console.log(reducers);