import React from 'react'
import Doc from './Doc'
function Workers() {
  const numbers=[1,2,3,4,5,6]
    const name="John"
    const occupation="Doctor"
    const salary=78000

  return <Doc name={name} occupation={occupation} salary={salary}/>
}

export default Workers
