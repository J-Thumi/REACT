import React from 'react'
import Fruit from './Fruit'
function Fruits() {
//const fruits=['orange','mango','apple']
const fruits=[{
  namee:"apple",
  price:"34",
  size:"big",
  soldout:false,
  },
  {namee:"apple",
  price:"34",
  size:"big",
  soldout:true,
  },
  ]

  return (
    <div>

      {fruits.map((fruit)=><p ><Fruit key={fruit.namee} namee={fruit.namee} price={fruit.price} size={fruit.size} soldout={fruit.soldout} /></p>)}
      
    </div>
  )
}

export default Fruits
