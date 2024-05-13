import React from 'react'
import Fruit from './Fruit'
function Fruits() {
//const fruits=['orange','mango','apple']
const fruits=[{
  namee:"apple",
  price:"34",
  size:"big",
  },
  {namee:"apple",
  price:"34",
  size:"big",
  },
  ]

  return (
    <div>

      {fruits.map((fruit)=><p ><Fruit key={fruit.namee} namee={fruit.namee} price={fruit.price} size={fruit.size} /></p>)}
      
    </div>
  )
}

export default Fruits
