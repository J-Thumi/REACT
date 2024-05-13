import React from 'react'

function conditional() {
    const display=false

    if (display){
        return(
        <div>
      <p>Display is true</p>
    </div>
        )
    }
    else{
        return (
            <div>
              <p>Display is false</p>
            </div>
          )
    }
 
}

export default conditional
