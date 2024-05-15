import React, { useState } from 'react'

function Input() {

   const [Name,setName] = useState({First:"" ,Second:" "})
const handleSubmit=(e)=>{
    e.preventDefault()
    return alert("Form Submitted")}
   
  return (
    <div>
      <h1>Form</h1>
      <form >
        <span>FirstName : <input onChange={(e)=>setName({...Name , First: e.target.value })} type='text' value={Name.First}></input></span>
        <br />
        <span>SecondName : <input onChange={(e)=>setName({...Name , Second: e.target.value })} type='text' value={Name.Second}></input></span>
        <br />
        <span>FullName : {Name.First} {Name.Second} </span>
<br />
        <button onClick={(e)=>handleSubmit(e)}>Submit</button>
      </form>
    </div>
  )
}

export default Input


