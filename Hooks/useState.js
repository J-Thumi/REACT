import React ,{ useState } from 'react'

function App() {

    const [current,setCurrent] = useState(6)

    const decrease=()=>{
        setCurrent((previous)=>previous-1)
    }
    const increase=()=>{
        setCurrent((previous)=>previous+1)
    }

  return (
    <div>
      <button onClick={decrease}>-</button>
      <span>{current}</span>
      <button onClick={increase}>+</button>
    </div>
  )
}

export default App
