import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import { useDispatch } from 'react-redux'

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch();

  return (
    <>
      <h1>Using useState hook</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <h1>Using Redux</h1>
      <div className="card">
        <button onClick={(e) => dispatch({type: "INCREMENT"})}>
          Increment
        </button>
        <Counter />
        <button onClick={(e) => dispatch({type: "DECREMENT"})}>
          Decrement
        </button>
      </div>
    </>
  )
}

export default App
