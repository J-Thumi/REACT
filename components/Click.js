import React from 'react'

const click=()=>{
    const handle=()=>{
        console.log(" clicked")
    }
    return(
        <div>
<button onClick={handle}>click</button>
        </div>
    )
}

export default click



