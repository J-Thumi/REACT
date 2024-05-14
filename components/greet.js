import React from 'react'

// function Greet(){
//     return <h1>Hello user</h1>
// }

const Greet=(props)=>{
const {namee,hero}=props//destructuring

    return (
        <div>
    <h1>hello {namee} you are {hero}</h1>

    {props.children}
    </div>
    )
    
   }

export default Greet  