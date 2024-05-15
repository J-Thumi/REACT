import React , {useState} from 'react'

function useEffect() {

    const [Resource,setResource] = useState('Post')

  return (
    <div>

      <h1>{Resource}</h1>

      <button onClick={()=>setResource('Post')}>Post</button>
      <button onClick={()=>setResource('Users')}>Users</button>
      <button onClick={()=>setResource('Comments')}>Comments</button>
    </div>
  )
}

export default useEffect
