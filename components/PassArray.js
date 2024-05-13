import React from 'react'

function PassArray(props) {
  return (
    <div>
      <p>I love {props.like}</p>
      <p> {props.Person.place} {props.Person.birth} {props.Person.county} </p>
    </div>
  )
}

export default PassArray
