import React from 'react'

// function Greet(){
//     return <h1>Hello user</h1>
// }

const Greet=(props)=>{

    return (
        <div>
    <h1>hello {props.namee} you are {props.hero}</h1>

    {props.children}
    </div>
    )
    
   }

export default Greet  