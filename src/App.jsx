import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import { useDispatch } from 'react-redux'
import { increment, decrement } from './rtk/counter/counterSlice'

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()

  return (
    <>
      <h1>Counter App</h1>
      <br />
      <h3>Using useState hook</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
      <br />
      <h3>Using Redux(Toolkit)</h3>
      <div className="card">
        {/* <button onClick={() => dispatch({type: "INCREMENT"})}> */}
        <button onClick={() => dispatch(increment())}>Increment</button>
        <Counter />
        {/* <button onClick={() => dispatch({type: "DECREMENT"})}> */}
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </>
  )
}

export default App
