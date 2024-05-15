import React ,{ useState } from 'react'

function App() {



    //const [state,setState] = useState({count:6,theme:"blue"})
    const [state,setState] = useState({count:6})
    const[incBy,setIncBy]=useState(1)

    const count=state.count
    // const theme=state.theme


   
    const incRange=()=>{
        setIncBy(incBy+1)
    }
    const decRange=()=>{
        setIncBy(incBy-1)
    }
    const decrease=()=>{
        setState((prevstate)=>{ 
         return { count:prevstate.count-incBy}
     })
        
     }
     const increase=()=>{
         setState((prevstate)=>{ 
             return {count:prevstate.count+incBy}
         })
     }
  return (
    <div>
      <button onClick={decrease}>-</button>
      <span>{count}</span>
      {/* <span>{theme}</span> */}
      <button onClick={increase}>+</button>
      <h1>We are increasing by: {incBy}</h1>
      <button onClick={incRange}>increase range</button>
      <button onClick={decRange}>decrease range</button>
    </div>
  )
}

export default App
