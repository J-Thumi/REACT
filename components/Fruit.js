import React from 'react'

function Fruit({namee,price,size,soldout}) {
   
  return (
    <li >
      {namee} {price} {size}{soldout? " soldout":" "}
    </li>
  )
}

export default Fruit
