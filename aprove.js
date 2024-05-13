import React from 'react'
import Old from './old'
import Young from './young'


function aprove() {
    const age=true
   
  return age ? <Young/  >:<Old/>
}

export default aprove
