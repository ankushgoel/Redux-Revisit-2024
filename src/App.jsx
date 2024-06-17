import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

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
        <button>
          Increment
        </button>
        <Counter />
        <button>
          Decrement
        </button>
      </div>
    </>
  )
}

export default App
