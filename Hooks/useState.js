import React ,{ useState } from 'react'

function App() {



    const [state,setState] = useState({count:6,theme:"blue"})
    const count=state.count
    const theme=state.theme


    const decrease=()=>{
       setState((prevstate)=>{ 
        return {...prevstate, count:prevstate.count-1}
    })
       
    }
    const increase=()=>{
        setState((prevstate)=>{ 
            return {...prevstate, count:prevstate.count+1}
        })
    }

  return (
    <div>
      <button onClick={decrease}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={increase}>+</button>
    </div>
  )
}

export default App
